<template>
    <v-layout column="column" row="row">
        <v-tabs background-color="white" color="#2D9527" center-active="center-active">
            <v-tab to="/yangdo">양도소득세</v-tab>
            <v-tab to="/chwideug">취득세</v-tab>
            <v-tab to="/tuja">투자수익률</v-tab>
            <v-tab to="/jeungyeo">증여세</v-tab>
            <v-tab to="/joonggae">중개보수료</v-tab>
            <v-tab to="/doro">도로명주소</v-tab>
            <v-tab to="/pyeongsu">평수환산</v-tab>
            <v-tab class="font-weight-black" to="/iza">이자계산</v-tab>
        </v-tabs>
        <v-divider></v-divider>
        <v-flex wrap="wrap">
            <v-list-item>
                <v-list-item-content>
                    <p class="font-weight-black">대상물 구분</p>
                    <v-btn-toggle
                        v-model="kind"
                        tile="tile"
                        color="blue"
                        group="group"
                        style="flex-wrap: wrap; width: 100%">
                        <v-btn class="caption" value="wonli" height="40px" style="width: 30%">원리금균등</v-btn>
                        <v-btn class="caption" value="won" height="40px" style="width: 30%">원금균등</v-btn>
                        <v-btn class="caption" value="man" height="40px" style="width: 30%">만기일시</v-btn>
                    </v-btn-toggle>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-content>
                    <v-row>
                        <v-col cols="4">
                            <v-subheader class="caption" color="blue darken-4">대출기간</v-subheader>
                        </v-col>
                        <v-col cols="7">
                            <v-text-field
                                class="caption"
                                v-model="duration"
                                placeholder="대출기간 입력"
                                suffix="개월"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <v-subheader class="caption" color="blue darken-4">대출금액</v-subheader>
                        </v-col>
                        <v-col cols="7">
                            <v-text-field class="caption" v-model="price" placeholder="대출금액 입력" suffix="만원"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <v-subheader class="caption" color="blue darken-4">연이자율</v-subheader>
                        </v-col>
                        <v-col cols="7">
                            <v-text-field class="caption" v-model="rate" placeholder="연이자율 입력" suffix="%"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <v-subheader class="caption" color="blue darken-4">거치기간</v-subheader>
                        </v-col>
                        <v-col cols="7">
                            <v-text-field
                                class="caption"
                                v-model="duration_g"
                                placeholder="거치기간 입력"
                                suffix="개월"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-dialog
                        v-model="dialog"
                        fullscreen="fullscreen"
                        hide-overlay="hide-overlay"
                        transition="dialog-bottom-transition">
                        <template v-slot:activator="{ on }">
                            <div class="being">
                                <v-btn
                                    @click="iTest"
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

                            <v-container v-if="icalc_result.iwhich === 'interest'">
                                <v-list>
                                    <v-list-item>
                                        <v-list-item-content class="font-weight-bold">대출원금</v-list-item-content>
                                        <v-list-item-content>{{price*10000}}원</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content class="font-weight-bold">총대출이자</v-list-item-content>
                                        <v-list-item-content>{{icalc_result.iresult.total_interest}}원</v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-content class="font-weight-bold">총상환금액</v-list-item-content>
                                        <v-list-item-content>{{icalc_result.iresult.total_interest+price*10000}}원</v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-container>
                            <v-divider></v-divider>
                            <v-container v-if="icalc_result.iwhich === 'interest'">
                                <table width="100%">
                                    <thead>
                                        <tr>
                                            <td class="caption font-weight-bold" width="10%">회차</td>
                                            <td class="caption font-weight-bold" width="22.5%">납입원금</td>
                                            <td class="caption font-weight-bold" width="22.5%">대출이자</td>
                                            <td class="caption font-weight-bold" width="22.5%">월상환금</td>
                                            <td class="caption font-weight-bold" width="22.5%">대출잔금</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(item, idx) in icalc_result.iresult.list" :key="idx">
                                            <td class="caption font-weight-bold" width="10%">{{item.index}}</td>
                                            <td class="caption font-weight-bold" width="22.5%">{{item.originRepay}}</td>
                                            <td class="caption font-weight-bold" width="22.5%">{{item.interestRepay}}</td>
                                            <td class="caption font-weight-bold" width="22.5%">{{item.totalRepay}}</td>
                                            <td class="caption font-weight-bold" width="22.5%">{{item.remainAmount}}</td>
                                        </tr>
                                    </tbody>
                                </table>
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
                kind: 'wonli',
                duration: null,
                duration_g: null,
                rate: null,
                price: null,
                dialog: false,
                total_interest: '',
                index: '',
                originRepay: '',
                interestRepay: '',
                totalRepay: '',
                remainAmount: '',
                icalc_result: {
                    iwhich: '',
                    iresult: null
                },
                list: [],
                count: 0,
                listing: [],
                rlisting: []
            }
        },
        methods: {
            iTest() {
                axios
                    .post("https://www.ddhouse.co.kr/api/v1/public/calculator/interest", {
                        kind: this.kind,
                        duration: this.duration,
                        duration_g: this.duration_g,
                        rate: this.rate,
                        price: this.price
                    })
                    .then(res => {
                        var iusering = {
                            kind: this.kind,
                            duration: this.duration,
                            duration_g: this.duration_g,
                            rate: this.rate,
                            price: this.price
                        }
                        this.$cookies.set('iusering', iusering);
                        console.log(this.$cookies.get('iusering'))

                        console.log(res);
                        this.icalc_result.iwhich = 'interest'
                        this.icalc_result.iresult = res
                            .data
                            console
                            .log(this.icalc_result)
                        this.$cookies.set('irusering', res.data)
                        console.log(this.$cookies.get('irusering'))

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