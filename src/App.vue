<template>
  <div id="app">
    <div class="app__wrapper">
      <!-- Добавить пользователя -->
      <div class="app__add-button">
        <t-button :onClick="openPopup">Добавить</t-button>
        <!-- <t-button >tst</t-button> -->
      </div>
      <!-- Таблица пользователей -->
      <t-table :node="dataForm" @onFilterByName="handleFilterByName" />
      <!-- Попап -->
      <t-popup :isOpen="isPopupOpen" @onClose="closePopup">
        <!-- содержание попапа -->
        <t-form-user-add
          :parrentList="dataForm"
          @onClose="closePopup"
          @onSubmit="handleFormUserSubmit"
        ></t-form-user-add>
      </t-popup>
    </div>
  </div>
</template>

<script>
import TButton from "./components/TButton.vue";
import TPopup from "./components/TPopup.vue";
import TTable from "./components/TTable.vue";
import TFormUserAdd from "./components/TFormUserAdd.vue";

export default {
  components: {
    TPopup,
    TButton,
    TTable,
    TFormUserAdd
  },
  data() {
    return {
      isPopupOpen: false,
      dataForm: []
    };
  },
  mounted() {
    // Добавляем в хранилище данные из localStore
    this.setAllData(
      localStorage.getItem("tableData")
        ? JSON.parse(localStorage.getItem("tableData"))
        : []
    );
  },
  methods: {
    openPopup() {
      this.isPopupOpen = true;
    },
    closePopup() {
      this.isPopupOpen = false;
    },
    handleFilterByName(direction) {
      console.log(direction);
      if (direction) {
      this.dataForm.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      this.dataForm.sort((a, b) => b.name.localeCompare(a.name));
    }
    },
    handleFormUserSubmit(data) {
      this.dataForm.push(data);
      localStorage.setItem("tableData", JSON.stringify(this.dataForm));
      this.closePopup();
    },
    setAllData(data) {
      console.log(data);
      this.dataForm = data;
    }
  },
  computed: {
    getAllUsers: () => {
      return this.dataForm;
    }
    // Мапим методы из сторы
    // ...mapGetters(['getAllUsers'])
  }
};
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
