<template>
  <div class="v-main-wrapper">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

<!--    <VCatalog />-->
<!--    <VCart-->
<!--        v-if="CART.length"-->
<!--        :cart_data="CART"-->
<!--    />-->
  </div>
</template>

<script>
// import VCatalog from "@/components/v-catalog"
// import VCart from "@/components/v-cart"
import {mapGetters} from "vuex";

export default {
  name: "v-main-wrapper",
  components: {
    // VCatalog,
    // VCart
  },
  computed: {
    ...mapGetters(['CART'])
  }
}
</script>

<style>
  .v-main-wrapper{
    max-width: 1400px;
    margin: 0 auto;
  }
</style>