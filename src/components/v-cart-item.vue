<template>
  <li class="v-cart-item">
    <img :src="cart_item_data.thumbnail"
         alt="item-image"
         class="v-cart-item__image"
    />
    <h4 class="v-cart-item__title">Название: {{cart_item_data.title}}</h4>
    <p class="v-cart-item__price">Price: {{cart_item_data.price}} p.</p>
    <div class="v-cart-item__quantity">
      <p>Кол-во: {{cart_item_data.quantity}}</p>
      <button @click="plus">+</button>
      <button @click="minus">-</button>
    </div>
    <button class="v-cart-item__btn btn"
            @click="removeToCart"
    >Удалить из корзины</button>
  </li>
</template>

<script>
export default {
  name: "v-cart-item",
  props: {
    cart_item_data:{
      type: Object,
      default (){
        return {}
      }
    }
  },
  methods:{
    removeToCart(){
      this.$emit('removeToCart',this.cart_item_data)
    },
    plus(){
      this.$emit('addQuantity',this.cart_item_data.id)
    },
    minus(){
      this.$emit('removeQuantity', this.cart_item_data.id)
    }
  },
  mounted() {

  }
}
</script>

<style lang="scss">
.v-cart-item{
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  margin: 1rem 0;
  list-style: none;
  border: 1px solid #2c3e50;
  border-radius: 8px;
  img {
    width: 200px;
    height: 100px;
    border-radius: 8px;
  }
}


</style>