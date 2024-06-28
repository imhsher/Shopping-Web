<template>

    <div style="font-size: 24px;" class="bg-blue-400 text-white">
        <h1>
            订单页
        </h1>
    </div>
    
    <div v-if="cardList[0]" class="mt-5 h-full" style="background-color: #e5e7eb;">
        <div v-for="(item, index) in cardList" class="mt-2 bg-white flex" style="height: 150px; padding-left: 5px;">
            <img :src="item.url" style="width: 200px;" alt="">
            <div>
                <div class="ml-5" style="font-size: 40px;">{{item.name}}</div>
                <div style="font-size: 25px;">$<span style="color: red;">{{item.price}}</span></div>
            </div>
        </div>
    </div>
    <div v-else class=" bg-white items-center" style="height: 100vh; padding-top: 50%">
        <div>
            购物车空空如也
        </div>
    </div>

    <div class="absolute inset-x-0 bottom-0 h-16 pb-16 flex justify-between items-center px-5">
        <div style="font-size: 20px;">
            合计: $ <span style="color: red;">{{sun}}</span>
        </div>
        <div>
            <van-button @click="reomve" style="width: 100px;" round type="success">结算</van-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import { useStore } from 'vuex';
let sun = ref(0)
let store = useStore()
let cardList = store.state.cardList

for (let index = 0; index < cardList.length; index++) {  
    sun.value = sun.value + cardList[index].price
}

let newItem = reactive({
        item: [] as Array<{ id: number; name: string; url: string; price: number }>
    })
function reomve(){
    sun.value = 0
    newItem.item = [] 
    store.dispatch('resetState')
    console.log(store.state.cardList);
    cardList = store.state.cardList
}
</script>

