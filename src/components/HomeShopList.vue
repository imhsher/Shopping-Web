<template>
    <div class="flex flex-col h-50 py-5 mx-2 mb-2 bg-white rounded-lg">
        <div class="mx-auto">
            <img class="h-30 " :src="foodList?.url" alt="">
        </div>
        <div class="">

            <div class="mt-2 ml-5" style="text-align: left; font-size: 20px;">{{ foodList!.name }}</div>


            <div class="flex justify-between mr-5">
                <div class="mt-2 ml-5" style="text-align: left; font-size: 20px; color: red;">￥{{ foodList?.price }}
                </div>
                <van-button @click="upCardInfo" plain type="primary">加入购物车</van-button>
            </div>
        </div>



    </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
import { useStore } from 'vuex';

let props = defineProps({
    foodList: Object,
})


const emits = defineEmits(['updateCardList']); //
let store = useStore()

let newItem = reactive({
        item: [] as Array<{ id: number; name: string; url: string; price: number }>
    })

function upCardInfo() {
    
    if (props.foodList) { // 确保 props.foodList 存在  
        newItem.item.push({
            id: props.foodList.id, // 直接使用 props.foodList.id  
            name: props.foodList.name, // 直接使用 props.foodList.name  
            url: props.foodList.url, // 直接使用 props.foodList.url  
            price: props.foodList.price // 直接使用 props.foodList.price  
        });
    }

    console.log(newItem.item);

    store.dispatch('addToCartAction', newItem.item);  

    console.log(store.state.cardList);

}

</script>