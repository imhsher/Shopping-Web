<template>
    <div class="pt-1  bg-blue-400">
        <div class=" text-white text-2xl flex justify-center items-center">
            食选商城
        </div>
        <div>
            <van-search placeholder="请输入搜索关键词" />
        </div>
    </div>

    <div class="mt-2">
        <van-swipe :autoplay="3000" lazy-render class=" h-96" style="height: 150px;">
            <van-swipe-item v-for="image in images">
                <img class="w-full h-full" :src="image" />
            </van-swipe-item>
        </van-swipe>
    </div>
<div class="grid grid-cols-2 w-full mt-5 pb-10  ">
    <div  v-for="(item, index) in shopList">
        <HomeShopList :food-list="item" :card-list="cardList"></HomeShopList>
    </div>
</div>
    
</template>

<script setup lang="ts">
import HomeShopList from '../../components/HomeShopList.vue'
const images = [
    'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
    'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
]

const shopList = [
    { id: 1, name: '苹果', url: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg', price: 12.5 },
    { id: 2, name: '橘子', url: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg', price: 11 },
    { id: 3, name: '香蕉', url: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg', price: 14 },
    { id: 4, name: '苹果', url: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg', price: 12.5 },
    { id: 5, name: '橘子', url: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg', price: 11 },
    { id: 6, name: '香蕉', url: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg', price: 14 },
    { id: 7, name: '苹果', url: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg', price: 12.5 },
    { id: 8, name: '橘子', url: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg', price: 11 },
    { id: 9, name: '香蕉', url: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg', price: 14 },
]

const cardList = []as Array<{ id: number; name: string; url: string; price: number }>  



</script>
