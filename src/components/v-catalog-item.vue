<template>
  <li class="v-catalog-item">
    <img :src="product_data.thumbnail"
         alt="item-image"
         class="v-catalog-item__image"
         @click="openPopupDetails"
    />
    <h4 class="v-catalog-item__title">{{product_data.title}}</h4>
    <p class="v-catalog-item__price">Price: {{product_data.price}} p.</p>
    <button class="v-catalog-item__btn btn"
            @click="addToCart"
    >Добавить в корзину</button>
  </li>
</template>

<script>
export default {
  name: "v-catalog-item",
  components:{ },
  props: {
    product_data:{
      type: Object,
      default(){
        return {}
      }
    }
  },
  data (){
    return {

    }
  },
  methods: {
    openPopupDetails(){
      this.$emit('openPopupDetails', this.product_data)
    },
    addToCart ()  {
      this.$emit('addToCart', this.product_data)
    }
  },
  mounted() {
    // this.$set(this.product_data, 'quantity', 1)
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/variables.scss";
.v-catalog-item{
  flex-basis: 22%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  margin: $margin*2;
  padding: $padding*2;
  list-style: none;
}
.v-catalog-item__image{
  max-width: 100%;
  height: 200px;
  cursor: pointer;
}

</style>