<template>
    <div style="font-size: 24px;" class="bg-blue-400 text-white flex">
        <div @click="goback" class="ml-5" style="position: absolute;">
            返回
        </div>
        <h1 style="margin: 0 auto;">
            登录
        </h1>
    </div>

    <div style="margin-top: 150px;">
        <UserLogin v-if="login"></UserLogin>
        <UserReg v-else></UserReg>
    </div>
    <div style="font-size: 24px; position: absolute; right: 25px;">
        <span @click="tologin">登录</span> / <span @click="toreg">注册</span>
    </div>
</template>

<script setup lang="ts">
import router from '@/router';
import UserLogin from '../../components/UserLogin.vue'
import UserReg from '../../components/UserReg.vue'
import { ref } from 'vue';
const login = ref(true)
function goback() {
    router.go(-1)
}

function tologin(){
    login.value = true
}
function toreg(){
    login.value = false
}
</script>
