<template>
  <div class="v-popup__wrapper"
       @click="$event.stopPropagation()"
  >
    <div class="v-popup__content">
      <div class="v-popup__header">
        <h3 class="v-popup__header-title">Title</h3>
        <i
            class="material-icons"
            @click="closePopup"
        >close</i>
      </div>
      <div class="v-popup__body">
        <slot />
      </div>
      <div class="v-popup__footer">
        <button
            class="btn-popup v-popup__footer-btn-green">Добавить</button>
        <button
            class="btn-popup v-popup__footer-btn-red"
            @click="closePopup"
        >Закрыть</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-popup",
  props:{

  },
  methods:{
    closePopup(){
      this.$emit('closePopup')
    }
  }
}
</script>

<style lang="scss">
.v-popup__wrapper{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(64, 64, 64, .4);
  display: flex;
  justify-content: center;
}
.v-popup__content{
  padding: 8px;
  width: 400px;
  box-shadow: 0 0 8px 0 #e0e0e0;
  border-radius: 8px;
  position: fixed;
  top: 50px;
  background-color: white;
}
.v-popup__header{
  padding: 0 8px;
  .material-icons{
    cursor: pointer;
  }
}
  .v-popup__header, .v-popup__footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-btn-green{
      background-color: #15c315;
    }
    &-btn-green:hover{
      background-color: #5ae65a;
    }
    &-btn-red{
      background-color: #d90928;
    }
    &-btn-red:hover{
      background-color: #ee1f49;
    }
  }
  .btn-popup{
    padding: 8px;
    margin: 8px;
    color: aliceblue;
    border-radius: 8px;
    border: none;
    cursor: pointer;
  }
</style>