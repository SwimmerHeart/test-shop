<template>
  <div>
    <select
        class="v-catalog__select"
        @change="selectOption($event)"
    >
      <option v-for="option in options"
              :key="option.id"
      >
        {{option.name}}
      </option>
    </select>

  </div>
</template>

<script>
export default {
  name: "v-catalog-select",
  props: {
    options: {
      type: Array,
      default (){
        return []
      }
    }
  },
  data() {
    return {

    }
  },
  methods:{
    selectOption(e){
      this.$emit('selectOption', e.target.value)
    }
  }
}
</script>

<style lang="scss">
.v-catalog__select{
  width: 200px;
  height: 30px;
}

</style>