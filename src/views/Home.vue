<template>
    <div class="home">
        <div class="menu-container">
            <div class="menus" v-for="menus of menuList" :key="menus.title">
                <ul class="menu-items">
                    <li class="menu-item" v-for="(item, index) of menus.items" :key="index" @click="navigate(item)">
                        <div :class="index==0?'color':''">{{item.label}}</div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="firstPic">
            <div class="text">
                <p>我们是PARPER是一家有态度的彩妆品牌公司，加入我们，开启别样人生</p>
                <div class="secPic">
                     <img src="../assets/images/home2.png" alt="">
                     <p>我们的创作团队（Our creative team）</p>
                </div>
            </div>
            <div class="pic">
                <img src="../assets/images/home1.png" alt="">
            </div>
        </div>
        <div  class="nextPic-fa">
            <div class="nextPic">
                <img src="../assets/images/home3.png" alt="">
           </div>
        </div>
        <div class="three-fa">
            
            <div class="threePic">
                <img src="../assets/images/home4.png" alt="">
                <p>我们的创作历程（Our creative experience）</p>
           </div>
        </div>
        <div class="four-fa">
            <div class="fourPic">
                <img src="../assets/images/home5.png" alt="">
            </div>
        </div>
        <div class="five-fa">
            <div class="fivePic">
                 <img src="../assets/images/home6.png" alt="">
            </div>
        </div>
        <div class="six-fa">
            <div class="sixPic">
                 <img src="../assets/images/home7.png" alt="">
            </div>
        </div>
        <div class="seven-fa">
            <div class="seven-left"><img src="../assets/images/home8.png" alt=""></div>
            <div class="seven-right"><img src="../assets/images/home9.png" alt=""></div>
        </div>
        <div class="eight-fa">
            <div class="eightPic"><img src="../assets/images/home10.png" alt=""></div>
        </div>
        <div class="night-fa">
            <div class="nightPic"><img src="../assets/images/home11.png" alt=""></div>
            <p>我们的设计理念（design concept）</p>
        </div>
        <div class="ten-fa">
            <div class="tenPic"><img src="../assets/images/home12.png" alt=""></div>
        </div>
        <div class="last-fa">
            <div class="lastPic"><img src="../assets/images/home13.png" alt=""></div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name: 'home-index',
    data() {
        return {
            menuList: [
                {
                    items: [
                        {
                            icon: '',
                            label: '首页',
                            href: '/Home'
                        },
                        {
                            icon: '',
                            label: '团队',
                            href: './team'
                        },
                        {
                            icon: '',
                            label: '理念',
                            href: '/design'
                        },
                        {
                            icon: '',
                            label: '产品',
                            href: '/product'
                        },
                        {
                            icon: '',
                            label: '制作历程',
                            href: '/creation'
                        },
                        {
                            icon: '',
                            label: '关于',
                            href: ''
                        },
                        {
                            icon: '',
                            label: '联系我们',
                            href: ''
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        navigate(item) {
            this.$router.push(item.href)
        }
    },
    mounted() {
    }
}
</script>

<style lang="stylus" scope>
</style>