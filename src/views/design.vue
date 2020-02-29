<template>
<div class="design">
    <div class="menu-container">
        <div class="menus" v-for="menus of menuList" :key="menus.title">
            <ul class="menu-items">
                <li class="menu-item" v-for="(item, index) of menus.items" :key="index" @click="navigate(item)">
                    <div :class="index==2?'color':''">{{item.label}}</div>
                </li>
            </ul>
        </div>
    </div>
    <div class="top">
        <div  class="top-left">
            <h1><span>品牌理念</span></h1>
            <p>我们是一家有趣的彩妆品牌公司，我们致力于开发生活中趣味性的额产品。我们是一家有趣的彩妆品牌公司我们致力于开发生活中趣味性的额产品。我们是一家有趣的彩妆品牌公司，我们致力于开发生活中趣味性的额产品。我们是一家有趣的彩妆品牌公司我们致力于开发生活中趣味性的额产品。</p><p>我们是一家有趣的彩妆品牌公司，我们致力于开发生活中趣味性的额产品。我们是一家有趣的彩妆品牌公司我们致力于开发生活中趣味性的额产品。我们是一家有趣的彩妆品牌公司，我们致力于开发生活中趣味性的额产品。我们是一家有趣的彩妆品牌公司我们致力于开发生活中趣味性的额产品。</p><p>我们是一家有趣的彩妆品牌公司，我们致力于开发生活中趣味性的额产品。我们是一家有趣的彩妆品牌公司我们致力于开发生活中趣味性的额产品。我们是一家有趣的彩妆品牌公司，我们致力于开发生活中趣味性的额产品。我们是一家有趣的彩妆品牌公司我们致力于开发生活中趣味性的额产品。</p>
        </div>
        <div class="top-right">
            <img src="../assets/images/three1.jpg">
        </div>
    </div>
    <div class="bottom">
        <div class="bottom-ch bottom-ch1">
            <h1>
                <p><span>品牌互动</span></p>
                <p><span>About interaction</span></p>
            </h1>
            <div>
                <img src="../assets/images/three2.jpg" alt="">
            </div>
        </div>
        <div class="bottom-ch bottom-ch2">
            <h1>
                <p><span>我们现在在做的事情</span></p>
                <p><span>Things to do in the future</span></p>
            </h1>
            <div>
                <img src="../assets/images/three3.jpg" alt="">
            </div>
        </div>
        <div class="bottom-ch bottom-ch3">
            <h1>
                <p><span>我们现在在做的事情</span></p>
                <p><span>What we are doing now</span></p>
            </h1>
            <div>
                <img src="../assets/images/three4.jpg" alt="">
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
    name: 'design-index',
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
.top{
    display:flex;
    justify-content :start;
}
.top-left{
    width:40%;
    padding:3% 15% 10% 15%;
}
.top-left h1 span{
    width: 5rem;
    display :block;
    color:#333333;
    font-size:1.2rem;
    margin-bottom :1.8rem;
    border-bottom:1px solid #666;
}
.top-left p{
    color:#333333;
    font-size:.8rem;
    margin-top:1rem;
}
.top-right{
    width:58%;
    margin-right:2%;
}
.top-right img{
    width:100%;
    height:100%;
}
img[src=""],img:not([src]){opacity:0;}
.bottom{
    display :flex;
    justify-content :flex-end;
    -webkit-justify-content :flex-end;
    margin-top:5rem;
}
.bottom-ch{
   margin-right :1rem;
}
.bottom-ch1{
    width:15%;
}
.bottom-ch2{
    width:20%;
}
.bottom-ch3{
    width:30%;
}
.bottom-ch div{
    width: 100%;
    margin-top:1rem;
}
.bottom-ch div img{
    width: 100%;
    height: 100%;
}
.bottom-ch h1 p span{
    display :block;
    color:#333333;
    border-bottom:1px solid #666666;
}
.bottom-ch1 h1 p {
    padding-right :5rem;
}
.bottom-ch2 h1 p {
    padding-right :5rem;
}
.bottom-ch3 h1 p {
    padding-right :15rem;
}
</style>