<template>
  <div class="v-catalog">
    <h1>Catalog</h1>
    <VPopup
        v-if="isVisiblePopup"
        @closePopup="closePopup"
    >
      <h2>{{productDetails.title}}</h2>
      <img :src="productDetails.thumbnail"
           alt="item-image"
           class="v-catalog-item__image"
      />
      <h4 class="v-catalog-item__title">{{productDetails.title}}</h4>
    </VPopup>
    <router-link :to="{name: 'cart', params:{cart_data: CART}}" >
      <button class="btn v-catalog-btn">В корзине: {{CART.length}}</button>
    </router-link>
    <div class="v-catalog__filter">
      <VCatalogSelect :options="categories"
                      @selectOption="sortByCategories"
                      :isOpen="true"
      />
    </div>
    <ul class="v-catalog__list">
      <VCatalogItem
          v-for="product in filteredProduct"
          :key="product.id"
          :product_data="product"
          @addToCart="addToCart"
          @openPopupDetails="openPopup"
      />
    </ul>
  </div>
</template>

<script>
import VCatalogItem from "@/components/v-catalog-item"
import VCatalogSelect from "@/components/v-catalog-select"
import VPopup from "@/components/popup/v-popup"
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "v-catalog",
  components:{
    VPopup,
    VCatalogSelect,
    VCatalogItem
  },
  data (){
    return {
      categories: [
        {name: 'all', value: 0},
        {name: 'smartphones', value: 1},
        {name: 'laptops', value: 2},
        {name: 'fragrances', value: 3},
        {name: 'skincare', value: 4},
        {name: 'groceries', value: 5},
        {name: 'home-decoration', value: 6}
      ],
      sortedProducts: [],
      isVisiblePopup: false,
      productDetails: null
    }
  },
  methods: {
    openPopup(product){
      this.productDetails = product
      this.isVisiblePopup = true
      console.log(this.productDetails)
    },
    closePopup(){
      this.isVisiblePopup = false
    },
    ...mapActions(['GET_PRODUCTS_FROM_API', 'ADD_TO_CART']),
    addToCart (data) {
      this.ADD_TO_CART(data)
    },
    sortByCategories(category){
      this.sortedProducts = this.PRODUCTS.filter(product=>product.category === category)
    }

  },
  computed: {
    ...mapGetters(['PRODUCTS','CART']),
    filteredProduct(){
      return  this.sortedProducts.length ? this.sortedProducts : this.PRODUCTS
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
  }
}
</script>

<style lang="scss">
  .v-catalog{
    &__list{
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      padding: 0;
    }
  }
  .v-catalog-btn{
    position: absolute;
    top: 10px;
    right: 10px;
  }
  .btn{
    padding: 8px;
    margin: 8px;
    background-color: #2c3e50;
    color: aliceblue;
    border-radius: 8px;
    cursor: pointer;
    border: none;
  }
  .btn:hover{
    background-color: #43698f;
  }
</style>