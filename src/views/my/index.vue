<template>
    <div style="font-size: 24px;" class="bg-blue-400 text-white">
        <h1>
            我的
        </h1>
    </div>

    <div class="flex items-center bg-white" style="border-bottom: 1px solid grey">
        <img class="mt-5 ml-5 rounded-full mb-5" style="width: 100px; height: 100px;" src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg" alt="">
        <div v-if="token" class="ml-10" style="font-size: 24px;">
            {{ store.state.userInfo.userName }}
        </div>
        <div v-else class="ml-10" @click="toLogin" style="font-size: 24px;">
            点击去登录
        </div>
    </div>
</template>

<script setup lang="ts">
import router from '@/router';
import { useStore } from 'vuex';
let store = useStore()
let token =store.state.token
function toLogin(){
    router.push('/login')
}
</script>
