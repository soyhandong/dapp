<template>
    <v-layout column="column" row="row">
        <v-tabs background-color="white" color="#2D9527" center-active="center-active">
            <v-tab to="/yangdo">양도소득세</v-tab>
            <v-tab to="/chwideug">취득세</v-tab>
            <v-tab to="/tuja">투자수익률</v-tab>
            <v-tab to="/jeungyeo">증여세</v-tab>
            <v-tab class="font-weight-black" to="/joonggae">중개보수료</v-tab>
            <v-tab to="/doro">도로명주소</v-tab>
            <v-tab to="/pyeongsu">평수환산</v-tab>
            <v-tab to="/iza">이자계산</v-tab>
        </v-tabs>
        <v-divider></v-divider>
        <v-flex wrap="wrap">
            <v-list-item>
                <v-list-item-content>
                    <p class="font-weight-black">대상물 구분</p>
                    <v-btn-toggle
                        v-model="mjws"
                        tile="tile"
                        color="blue"
                        group="group"
                        style="flex-wrap: wrap; width: 100%">
                        <v-btn class="caption" value="m" height="40px" style="width: 30%">매매계약</v-btn>
                        <v-btn class="caption" value="j" height="40px" style="width: 30%">전세계약</v-btn>
                        <v-btn class="caption" value="w" height="40px" style="width: 30%">월세계약</v-btn>
                    </v-btn-toggle>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-content>
                    <p class="font-weight-black">거래 구분</p>
                    <v-btn-toggle
                        v-model="asset_type"
                        tile="tile"
                        color="blue"
                        group="group"
                        style="flex-wrap: wrap; width: 100%">
                        <v-btn class="caption" value="house" height="40px" style="width: 45%">주택</v-btn>
                        <v-btn class="caption" value="op" height="40px" style="width: 45%">오피스텔</v-btn>
                        <v-btn class="caption" value="etc" height="40px" style="width: 90%">주택이외(토지, 상가 등)</v-btn>
                    </v-btn-toggle>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-content>
                    <div v-if="mjws==='m'">
                        <v-row>
                            <v-col cols="4">
                                <v-subheader class="caption" color="blue darken-4">매매가</v-subheader>
                            </v-col>
                            <v-col cols="7">
                                <v-text-field
                                    v-model="price_m"
                                    class="caption"
                                    placeholder="매매가 입력"
                                    suffix="만원"></v-text-field>
                            </v-col>
                        </v-row>
                    </div>
                    <div v-if="(mjws==='j')||(mjws==='w')">
                        <v-row>
                            <v-col cols="4">
                                <v-subheader class="caption" color="blue darken-4">보증금</v-subheader>
                            </v-col>
                            <v-col cols="7">
                                <v-text-field
                                    v-model="price_wbo"
                                    class="caption"
                                    placeholder="보증금 입력"
                                    suffix="만원"></v-text-field>
                            </v-col>
                        </v-row>
                    </div>
                    <div v-if="mjws==='w'">
                        <v-row>
                            <v-col cols="4">
                                <v-subheader class="caption" color="blue darken-4">월세</v-subheader>
                            </v-col>
                            <v-col cols="7">
                                <v-text-field v-model="price_w" class="caption" placeholder="월세 입력" suffix="만원"></v-text-field>
                            </v-col>
                        </v-row>
                    </div>
                    <v-dialog
                        v-model="dialog"
                        fullscreen="fullscreen"
                        hide-overlay="hide-overlay"
                        transition="dialog-bottom-transition">
                        <template v-slot:activator="{ on }">
                            <div class="being">
                                <v-btn
                                    @click="joongTest"
                                    max-width="80%"
                                    min-width="80%"
                                    color="#2D9527"
                                    dark="dark"
                                    v-on="on">계산하기</v-btn>
                            </div>
                        </template>
                        <v-card>
                            <v-toolbar dark="dark" color="#2D9527">
                                <v-btn icon="icon" dark="dark" @click="dialog = false">
                                    <v-icon>mdi-close</v-icon>
                                </v-btn>
                                <v-toolbar-title>계산 결과</v-toolbar-title>
                            </v-toolbar>

                            <v-container v-if="calc_result.which === 'fee-broker'">
                                <v-list>
                                    <v-list-item>
                                        <v-list-item-content class="font-weight-bold">거래금액</v-list-item-content>
                                        <v-list-item-content class="font-weight-bold">{{calc_result.result.price_basis}}원</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content>요율</v-list-item-content>
                                        <v-list-item-content>{{calc_result.result.rate}}%</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content style="color: #0085FF">수수료</v-list-item-content>
                                        <v-list-item-content style="color: #0085FF">{{calc_result.result.fee_ori}}원</v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-container>
                            <v-divider></v-divider>
                            <v-container v-if="calc_result.which === 'fee-broker'">
                                <v-list>
                                    <v-list-item>
                                        <v-list-item-content>상한금액</v-list-item-content>
                                        <v-list-item-content>{{calc_result.result.fee_limit}}원</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content class="font-weight-bold">중개수수료</v-list-item-content>
                                        <v-list-item-content class="font-weight-bold">{{calc_result.result.fee}}원</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content class="font-weight-bold">부가세</v-list-item-content>
                                        <v-list-item-content class="font-weight-bold">{{calc_result.result.fee_tax}}원</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content style="color: #0085FF">부가세포함</v-list-item-content>
                                        <v-list-item-content style="color: #0085FF">{{calc_result.result.fee_tot}}원</v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-container>
                        </v-card>
                    </v-dialog>
                </v-list-item-content>
            </v-list-item>
        </v-flex>
    </v-layout>
</template>
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-cookies@1.6.1/vue-cookies.js"></script>
<script>
    import axios from "axios"
    import Vue from 'vue'
    import VueCookies from 'vue-cookies'
    Vue.use(VueCookies)
    export default {
        name: 'jeungyeo',
        data() {
            return {
                mjws: 'm',
                asset_type: 'house',
                price_m: '',
                price_wbo: '',
                price_w: '',
                price_current: '',
                price_premium: '',
                letspost: '',
                sheet: false,
                dialog: false,
                price_basis: '',
                fee_tot: '',
                fee: '',
                fee_ori: '',
                fee_tax: '',
                rate: '',
                fee_limit: '',
                calc_result: {
                    which: '',
                    result: null
                }
            }
        },
        methods: {
            joongTest() {
                axios
                    .post("https://www.ddhouse.co.kr/api/v1/public/calculator/fee-broker", {
                        mjws: this.mjws,
                        asset_type: this.asset_type,
                        price_m: this.price_m,
                        price_wbo: this.price_wbo,
                        price_w: this.price_w,
                        price_current: this.price_current,
                        price_premium: this.price_premium
                    })
                    .then(res => {
                        var jousering = {
                            mjws: this.mjws,
                            asset_type: this.asset_type,
                            price_m: this.price_m,
                            price_wbo: this.price_wbo,
                            price_w: this.price_w,
                            price_current: this.price_current,
                            price_premium: this.price_premium
                        }
                        this
                            .$cookies
                            .set('jousering', jousering);
                        // print user name
                        console.log(this.$cookies.get('jousering'))

                        console.log(res);
                        this.calc_result.which = 'fee-broker'
                        this.calc_result.result = res
                            .data
                            console
                            .log(this.calc_result)
                        this
                            .$cookies
                            .set('jorusering', res.data)
                        console.log(this.$cookies.get('jorusering'))
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
        }
    }
</script>

<style scoped="scoped">
    .being {
        display: flex;
        justify-content: center;
    }
</style>