<template>
  <div id="app">
    <div class="app__wrapper">
      <!-- Добавить пользователя -->
      <div class="app__add-button">
        <t-button :onClick="openPopup">Добавить</t-button>
        <!-- <t-button >tst</t-button> -->
      </div>
      <!-- Таблица пользователей -->
      <t-table  :node="getAllUsers" @onFilterByName="handleFilterByName" />
      <!-- Попап -->
      <t-popup :isOpen="isPopupOpen" @onClose="closePopup">
        <!-- содержание попапа -->
        <t-form-user-add
          :parrentList="getAllUsers"
          @onClose="closePopup"
          @onSubmit="handleFormUserSubmit"
        ></t-form-user-add>
      </t-popup>
    </div>
  </div>
</template>

<script>
import TButton from './components/TButton.vue'
import TPopup from './components/TPopup.vue'
import TTable from './components/TTable.vue'
import TFormUserAdd from './components/TFormUserAdd.vue'

import { getStorageData } from './utils'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    TPopup,
    TButton,
    TTable,
    TFormUserAdd

  },
  mounted () {
    // Добавляем в хранилище данные из localStore
    this.addAllUsers(getStorageData('tableData'))
  },
  data () {
    return {
      isPopupOpen: false
    }
  },
  methods: {
  // Мапим экшены
    ...mapActions(['addUser', 'addAllUsers']),

    openPopup () {
      this.isPopupOpen = true
    },
    closePopup () {
      this.isPopupOpen = false
    },
    handleFilterByName (direction) {
      console.log(direction)
    }
  },
  computed: {
    // Мапим методы из сторы
    ...mapGetters(['getAllUsers'])
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
