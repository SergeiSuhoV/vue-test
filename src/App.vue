<template>
  <div id="app">
    <div class="app__wrapper">
      <!-- Добавить пользователя -->
      <div class="app__add-button">
        <t-button :onClick="openPopup">Добавить</t-button>
        <!-- <t-button >tst</t-button> -->
      </div>
      <!-- Попап -->
      <t-popup :isOpen="isPopupOpen" @onClose="closePopup">
        <!-- содержание попапа -->
        форма
      </t-popup>
      <!-- Таблица пользователей -->
    </div>
  </div>
</template>

<script>
import TButton from './components/TButton.vue'
import TPopup from './components/TPopup.vue'

export default {
  components: {
    TPopup,
    TButton
  },
  data () {
    return {
      isPopupOpen: false
    }
  },
  methods: {
    openPopup () {
      this.isPopupOpen = true
    },
    closePopup () {
      this.isPopupOpen = false
    }
  }
}
</script>

<style>
* {
  margin: 0;
  box-sizing: border-box;
}
#app {
  display: flex;
  flex-direction: column;
}
.app__wrapper {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 10px;
}
.app__add-button {
  display: flex;
  justify-content: end;
  margin: 100px 0 47px 0;
}
</style>
