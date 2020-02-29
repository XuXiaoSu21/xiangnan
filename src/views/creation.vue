<template>
<div class="creation">
    <div class="menu-container">
        <div class="menus" v-for="menus of menuList" :key="menus.title">
            <ul class="menu-items">
                <li class="menu-item" v-for="(item, index) of menus.items" :key="index" @click="navigate(item)">
                    <div :class="index==4?'color':''">{{item.label}}</div>
                </li>
            </ul>
        </div>
    </div>
    <div class="picAll">
        <div class="pic-ch margin">
            <div class="imgs">
                <img src="../assets/images/five1.jpg" alt="">
            </div>
            <div class="texts">
                <p class="text1">产品调色</p>
                <p class="text2">Pick your favorite color</p>
            </div>
        </div>
        <div class="pic-ch margin">
            <div class="imgs">
                <img src="../assets/images/five2.jpg" alt="">
            </div>
            <div class="texts">
                <p class="text1">包装打样</p>
                <p class="text2">Constantly experiment with packaging</p>
            </div>
        </div>
        <div class="pic-ch margin">
            <div class="imgs">
                <img src="../assets/images/five3.jpg" alt="">
            </div>
            <div class="texts">
                <p class="text1">产品调色</p>
                <p class="text2">Pick your favorite color</p>
            </div>
        </div>
        <div class="pic-ch">
            <div class="imgs">
                <img src="../assets/images/five4.jpg" alt="">
            </div>
            <div class="texts">
                <p class="text1">产品调色</p>
                <p class="text2">Pick your favorite color</p>
            </div>
        </div>
        <div class="pic-ch margin">
            <div class="imgs">
                <img src="../assets/images/five1.jpg" alt="">
            </div>
            <div class="texts">
                <p class="text1">产品调色</p>
                <p class="text2">Pick your favorite color</p>
            </div>
        </div>
        <div class="pic-ch margin">
            <div class="imgs">
                <img src="../assets/images/five2.jpg" alt="">
            </div>
            <div class="texts">
                <p class="text1">包装打样</p>
                <p class="text2">Constantly experiment with packaging</p>
            </div>
        </div>
        <div class="pic-ch margin">
            <div class="imgs">
                <img src="../assets/images/five3.jpg" alt="">
            </div>
            <div class="texts">
                <p class="text1">产品调色</p>
                <p class="text2">Pick your favorite color</p>
            </div>
        </div>
        <div class="pic-ch">
            <div class="imgs">
                <img src="../assets/images/five4.jpg" alt="">
            </div>
            <div class="texts">
                <p class="text1">产品调色</p>
                <p class="text2">Pick your favorite color</p>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapMutations } from 'vuex'
import Swiper from 'swiper';
export default {
    name: 'creation-index',
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
    }
}
</script>

<style lang="stylus" scope>
.picAll{
    padding :2rem;
    display :flex;
    justify-content :center;
    -webkit-justify-content :center;
    align-items: flex-end;
    -webkit-align-items:flex-end;
    flex-wrap: wrap;
    -webkit-flex-wrap:wrap;
}
.pic-ch{
    width:22%;
    margin-bottom: 5rem;
}
.pic-ch .imgs{
    width:100%;
}
.pic-ch .imgs img{
    width:100%;
    height:100%;
}
.texts .text1{
    color:#333333;
    font-size:.75rem;
}
.texts .text2{
    color:#999999;
    font-size:.75rem;
}
.margin{
    margin-right:1rem;
}
</style>