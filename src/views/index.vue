<template>

    <div class="h-full bg-gray-200">
        
            
        
        <div class="absolute inset-x-0 bottom-0  flex items-center px-10">
            <van-tabbar v-model="active" active-color="#ee0a24" route class=" flex justify-between w-full ">
                <van-tabbar-item replace to="/" icon="wap-home-o">首页</van-tabbar-item>
                <van-tabbar-item replace to="/car" icon="shopping-cart-o">订单</van-tabbar-item>
                <van-tabbar-item replace to="/my" icon="user-o">我的</van-tabbar-item>
            </van-tabbar>
            
        </div>
        <router-view></router-view>
    </div>

</template>

<script setup lang="ts">
import { ref } from 'vue';
let active = ref(0)
</script>

