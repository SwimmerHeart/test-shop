<template>
  <div class="v-cart">
    <h1>Cart</h1>
    <router-link to="/">
      <button class="btn v-cart-btn">Назад</button>
    </router-link>

    <ul>
      <VCartItem
          v-for="item in CART"
          :key="item.id"
          :cart_item_data="item"
          @removeToCart="removeToCart"
          @addQuantity="addQuantity"
          @removeQuantity="removeQuantity"
      />
    </ul>
  </div>
</template>

<script>
import VCartItem from "@/components/v-cart-item"
import {mapActions,mapGetters} from "vuex"

export default {
  name: "v-cart",
  components: {
    VCartItem
  },
  props:{
    cart_data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods:{
    ...mapActions(['DELETE_FROM_CART', 'INCREMENT_TO_CART', 'DECREMENT_TO_CART']),
    removeToCart(cart_item_data){
      this.DELETE_FROM_CART(cart_item_data)
    },
    addQuantity(id){
      this.INCREMENT_TO_CART(id)
    },
    removeQuantity(id){
      this.DECREMENT_TO_CART(id)
    }
  },
  computed:{
    ...mapGetters(['CART'])
  }
}
</script>

<style lang="scss">
  .v-cart{
    ul{
      padding-left: 0;
    }
  }
  .v-cart-btn{
    position: absolute;
    top: 10px;
    right: 10px;
  }

</style>