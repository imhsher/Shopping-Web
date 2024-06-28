<template>
    <van-form @submit="onSubmit" >
        <van-cell-group inset>
            <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]" />
            <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]" />
            <van-field v-model="repedpassword" type="password" name="重复密码" label="重复密码" placeholder="重复密码"
                :rules="[{ required: true, message: '请填写正确密码' }]" />
        </van-cell-group>
        <div style="margin: 16px;">
            <van-button round block type="primary" native-type="submit">
                提交
            </van-button>
        </div>
    </van-form>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
let store = useStore()
const username = ref()
const password = ref()
const repedpassword = ref()

function onSubmit() {
    if (password.value == repedpassword.value) {
        const userInfo = {
            userName: username.value,
            password: password.value
        }
        store.dispatch('addUserState', userInfo)
console.log(store.state.userInfo);

        if (store.state.userInfo) {
            username.value = ''
            password.value = ''
            repedpassword.value = ''
            alert('注册成功')
            
        }


    } else {
        alert('两次密码不对')
    }

}
</script>