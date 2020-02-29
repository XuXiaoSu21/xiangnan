<template>
<div class="team">
    <div class="menu-container">
        <div class="menus" v-for="menus of menuList" :key="menus.title">
            <ul class="menu-items">
                <li class="menu-item" v-for="(item, index) of menus.items" :key="index" @click="navigate(item)">
                    <div :class="index==1?'color':''">{{item.label}}</div>
                </li>
            </ul>
        </div>
    </div>
    <div class="firstPic">
        <div class="text">
            <p>我们是PARPER是一家有态度的彩妆品牌公司，加入我们，开启别样人生</p>
        </div>
    </div>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="../assets/images/team.png"></div>
            <div class="swiper-slide"><img src="../assets/images/home1.png"></div>
        </div>
        <div class="swiper-button-next"></div>
    </div>
    <div class="bottom">
        <p>我们的创作团队（Our creative team）</p>
    </div>
</div>
</template>
<script>
import  'swiper/css/swiper.css'  
import { mapMutations } from 'vuex'
import Swiper from 'swiper';
export default {
    name: 'team-index',
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
                            href: '/team'
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
        var mySwiper = new Swiper ('.swiper-container', {
            loop: true, // 循环模式选项
            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        })   
    }
}
</script>

<style lang="stylus" scope>

</style>