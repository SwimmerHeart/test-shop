import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cart: []
  },
  getters: {
    PRODUCTS (state){
     return state.products
    },
    CART (state){
      return state.cart
    }
  },
  mutations: {
    SET_PRODUCTS (state, products) {
      state.products = products
    },
    SET_CART(state, product){
      if(state.cart.length){
        let isProductExists = false
          state.cart.map(item=>{
            if(item.id === product.id){
              item.quantity++
              isProductExists = true
            }
          })
        if(!isProductExists) {
          state.cart.push(product)
        }
      }
      else {
        state.cart.push(product)
      }
    },
    REMOVE_FROM_CART(state, product){
      state.cart = state.cart.filter(item=>item.id !== product.id)
    },
    INCREMENT(state, id){
      state.cart.forEach(item=>{
        if(item.id === id){
          item.quantity++
        }
      })
    },
    DECREMENT(state, id){
      state.cart.forEach(item=>{
        if(item.id === id && item.quantity > 1){
          item.quantity--
        }
      })
    }
  },
  actions: {
    async GET_PRODUCTS_FROM_API ({commit}){
      try {
        const resolve = await fetch('https://dummyjson.com/products')
        const data = await resolve.json()
       data.products.map(item=>item.quantity = 1)
        commit('SET_PRODUCTS', data.products)
        console.log('данные получены')
      }
      catch (e) {
        console.log(e, 'ошибка получения данных')
      }
    },
    ADD_TO_CART ({commit}, product){
      commit('SET_CART', product)
    },
    DELETE_FROM_CART ({commit}, product){
      commit('REMOVE_FROM_CART', product)
    },
    INCREMENT_TO_CART ({commit}, id){
      commit('INCREMENT', id)
    },
    DECREMENT_TO_CART({commit}, id){
      commit('DECREMENT', id)
    }
  },
  modules: {
  }
})
