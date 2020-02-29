<template>
<div class="product">
    <div class="menu-container">
        <div class="menus" v-for="menus of menuList" :key="menus.title">
            <ul class="menu-items">
                <li class="menu-item" v-for="(item, index) of menus.items" :key="index" @click="navigate(item)">
                    <div :class="index==3?'color':''">{{item.label}}</div>
                </li>
            </ul>
        </div>
    </div>
    <div>
        <ul>
            <li v-for="(item,index) in list" :key="index">
                <div class="product_top">
                    <div class="product_left">
                        <!-- <img src="../assets/images/four1.jpg" alt=""> -->
                        <img :src="item.one[0].img" alt="">
                        <p v-html="item.one[0].title">匹夫之勇</p>
                    </div>
                    <div class="product_right">
                        <p v-html="item.one[0].text">
                            <!-- 《里约大冒险》的主角是两只小蓝金刚鹦鹉，主角布鲁来到未知陌生的巴西寻找素未谋面的爱情，在与珠儿相知相爱后，面对着野生世界的危险，他们还是选择追求自由。这是一种近乎傻瓜一样的勇敢，但也只有这样世界才辽阔多彩。<br/><br/>面对未知的旅途，勇往直前探索未知。<br/>直面已知的未来，打破束缚展翅高飞。 -->
                        </p>
                    </div>
                </div>
                <div class="product_top">
                    <div class="product_newLeft">
                         <p v-html="item.one[1].text">
                            <!-- 庄周梦碟，不知是蝶梦庄周，还是庄周梦蝶。蝴蝶像是一个符号既代表虚幻，又代表真实，只要敢想真实就在路上。就像蝴蝶轻轻扇动翅膀，就能引发一场飓风一样，想象的力量超乎想象。所以尽情<br/>在想象里沉沦吧！让疯狂的想象成为真实的力量<br/><br/>做别人不敢想的事，成为别人想象中的人<br/>想象力让我独一无二 -->
                        </p>
                    </div>
                    <div class="product_left">
                        <img :src="item.one[1].img" alt="">
                        <p v-html="item.one[1].title">臆想成疾</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>
</template>
<script>
import { mapMutations } from 'vuex'
import Swiper from 'swiper';

export default {
    name: 'product-index',
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
            ],
            list:[
               {
                   one:[{
                        img:require('../assets/images/four1.jpg'),
                        title:'匹夫之勇',
                        text:'《里约大冒险》的主角是两只小蓝金刚鹦鹉，主角布鲁来到未知陌生的巴西寻找素未谋面的爱情，在与珠儿相知相爱后，面对着野生世界的危险，他们还是选择追求自由。这是一种近乎傻瓜一样的勇敢，但也只有这样世界才辽阔多彩。<br/><br/>面对未知的旅途，勇往直前探索未知。<br/>直面已知的未来，打破束缚展翅高飞。'
                    },{
                        img:require('../assets/images/four2.jpg'),
                        title:'臆想成疾',
                        text:'庄周梦碟，不知是蝶梦庄周，还是庄周梦蝶。蝴蝶像是一个符号既代表虚幻，又代表真实，只要敢想真实就在路上。就像蝴蝶轻轻扇动翅膀，就能引发一场飓风一样，想象的力量超乎想象。所以尽情<br/>在想象里沉沦吧！让疯狂的想象成为真实的力量<br/><br/>做别人不敢想的事，成为别人想象中的人<br/>想象力让我独一无二'
                    }]  
               },
               {
                   one:[{
                        img:require('../assets/images/four3.jpg'),
                        title:'极致渴望',
                        text:'画皮里的狐妖小唯渴望成人，渴望美丽，渴望爱情。渴望本身并没错，渴望本就是我们的天性。勇敢的去释放天性，只有热切渴望的人才拥有不停前进的力量。<br/><br/>清晨醒来的悸动，脸红心跳的感受<br/>对于渴望毫不掩饰，这才是我。'
                    },{
                        img:require('../assets/images/four4.jpg'),
                        title:'深水炸弹',
                        text:'对于生活在深海的鹦鹉鱼来说，人类美名其曰的探索更像是一颗颗定时炸弹，毫无预警的投入深海，潜伏在他们身边。而它们无法表达的情绪，如同瓦斯般蔓延在海里，人类终将引爆自己的恶果<br/><br/>有一刻我想要沉没，深吸一口气，潜入海底。<br/>把情绪都集中在一起，然后释放，像海啸一样。'
                    }]  
               },
               {
                   one:[{
                        img:require('../assets/images/four5.jpg'),
                        title:'画地为牢',
                        text:'当北极渐渐消融，北极熊的生活圈逐渐缩小。这片曾经他们的乐土，似乎将他们关押在了这里。谁去思考当地球上不再有北极，北极熊即使存活，他们还是曾经的北极熊吗？<br/><br/>活成一座孤岛，在体内不断寻找真实的自我，<br/>自娱自乐，自始自终，自由自在。'
                    },{
                        img:require('../assets/images/four6.jpg'),
                        title:'温柔窒息',
                        text:'在青藏高原有着很多关于羚羊的温情传说，那片空气稀薄的神秘土地，孕育着坚韧温柔的一切。即使那里危险重重，在一生中也该去一次，去看看世界尽头的样子。<br/><br/>稀薄的空气，遥远的距离，危险的情绪，<br/>无法阻止我对世界的猎奇。'
                    }]  
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
.product_top{
    width :100%;
    height:100%;
    display :flex;
    justify-content :start;
    margin-top:3rem;
}
.product_left{
    position :relative;
}
.product_left img{
    width :100%;
    height:100%;
}
.product_left p{
    position :absolute;
    color:#fff;
    right:5%;
    top:4%;
    font-size: 18px;
}
.product_right {
    width:100%;
   display: flex;
   align-items :flex-end;
}
.product_right p{
    color:#333333;
    padding :0 0 0 5%;
    bottom:0;
    font-size: 14px;
    width :25rem;
}
.product_newLeft{
    width:100%;
   display: flex;
   justify-content :flex-end;
   align-items :flex-end; 
}
.product_newLeft p{
    color:#333333;
    padding :0 5% 0 0;
    bottom:0;
    font-size: 13px;
    width :25rem;
    text-align :right;
}
</style>