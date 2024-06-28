import { createStore } from 'vuex'

// store.js  
const store = createStore({  
  state: {  
    cardList: [] as Array<{ id: number; name: string; url: string; price: number }> , 
   // 购物车列表
    userInfo: {
      userName: "",
      password: '' 
    }  as Object,
    token: '' 
  },  
  mutations: {    
    addToCart(state, item) {    
      // 如果 item 是一个数组，遍历并添加到购物车  
      if (Array.isArray(item)) {  
        item.forEach(itemToAdd => {  
          state.cardList.push(itemToAdd);  
        });  
      } else {  
        // 如果 item 不是一个数组，直接添加到购物车  
        state.cardList.push(item);  
      }  
    },
    reset(state){
      state.cardList = []
    },
    addUser(state, newUserInfo){
      state.userInfo = newUserInfo
    },
    addToken(state, token){
      state.token = token
    }
  },    
  actions: {  
    addToCartAction({ commit }, item) {  
      commit('addToCart', item);  
    },
    resetState({ commit }) {  
      commit('reset');  
    },
    addUserState({ commit }, newUserInfo) {
      commit('addUser', newUserInfo);  
    },
    addtoken({ commit }, token) {
      commit('addToken', token);  
    }
  }  
});  
  
export default store;