<template>
    <van-form @submit="onSubmitLogin" >
        <van-cell-group inset>
            <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]" />
            <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]" />
        </van-cell-group>
        <div style="margin: 16px;">
            <van-button round block type="primary" native-type="submit">
                提交
            </van-button>
        </div>
    </van-form>
</template>
<script lang="ts" setup>
import router from '@/router';
import { ref } from 'vue';
import { useStore } from 'vuex';

let store = useStore()
const username = ref()
const password = ref()
const token = 1

console.log(store.state.userInfo);



function onSubmitLogin() {
   
    if (username.value == store.state.userInfo.userName && password.value == store.state.userInfo.password) {

        store.dispatch('addtoken', token)
        
        username.value = ''
        password.value = ''
        router.push('/my')
    } else { 
        alert('用户名/密码不正确')
    }
    console.log(store.state.token);
}
</script>