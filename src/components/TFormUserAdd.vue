<template>
  <form class="t-form-user-add" @submit.prevent="submit">
    <div class="t-form-user-add__head">
      <h2 class="t-form-user-add__title">Добавление пользователя</h2>
      <button @click="onClose">x</button>
    </div>
    <div class="t-form-user-add__field">
      <span class="t-form-user-add__caption">Имя</span>
      <input
        type="text"
        class="t-form-user-add__input"
        v-model="formData.name"
      />
    </div>
    <div class="t-form-user-add__field">
      <span class="t-form-user-add__caption">Телефон</span>
      <input
        type="text"
        class="t-form-user-add__input"
        v-model="formData.phoneNumber"
      />
    </div>
    <div class="t-form-user-add__field">
      <span class="t-form-user-add__caption">Начальник</span>
      <select class="t-form-user-add__select" v-model="formData.parentId">
          <option v-for="user in parrentList" :value="user.id" :key="user.id">
            {{ `${user.name} - ${user.phoneNumber}` }}
          </option>
      </select>
    </div>
    <div class="t-form-user-add__field">
      <button
        :disabled="!isValidSubmit"
        type="submit"
        class="t-form-user-add__submit"
      >
        Сохранить
      </button>
    </div>
  </form>
</template>

<script>
import {
  clearStorageData,
  getStorageData,
  setStorageData
} from "../utils";

// Название ключа в localStore
const NAME_STORAGE_FORM_DATA = "userFormLocalStorage";

export default {
  name: "t-form-user-add",

  // options для полей
  initForm: {
    user: "",
    phoneNumber: "",
    parentId: ""
  },

  props: {
    parrentList: []
  },
  data() {
    return {
      formData: {},
      isEmptyFields: true
    };
  },

  created() {
    // инициализируем данные из сторы и пишем в userFormLocalStorage
    const userFormFieldData = getStorageData(NAME_STORAGE_FORM_DATA);
    this.formData = { ...this.$options.initForm, ...userFormFieldData };
  },

  // отслеживаем изменения полей formData
  watch: {
    formData: {
      handler() {
        // сейвим данные формы в userFormLocalStorage
        setStorageData(NAME_STORAGE_FORM_DATA, this.formData);
      },
      deep: true
    }
  },
  computed: {
    isValidSubmit() {
      return Object.keys(this.formData);
    }
  },
  methods: {
    isEmpty(x) {
      return Object.keys(x).length;
    },
    handleResetForm() {
      this.formData = { ...this.$options.initForm };
      clearStorageData(NAME_STORAGE_FORM_DATA);
    },
    submit() {
      // Минимальная проверка
      this.$emit("onSubmit", this.formData);
      // сброс формы
      this.handleResetForm();
    },
    onClose() {
      this.$emit("onClose");
    }
  }
};
</script>

<style>
.t-form-user-add {
  max-width: 520px;
  width: 100%;
  padding: 30px;
  border: solid 1px #000000;
  border-radius: 3px;
  background-color: #ffffff;
}
.t-form-user-add__head {
  margin: 0 0 50px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.t-form-user-add__title {
  font-size: 16px;
}
.t-form-user-add__field {
  margin: 0 0 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.t-form-user-add__input {
  max-width: 340px;
  width: 100%;
  height: 25px;
  border: 1px solid #000000;
}
.t-form-user-add__select {
  max-width: 340px;
  width: 100%;
  height: 25px;
  border-radius: 5px;
  border: 1px solid #000000;
}
.t-form-user-add__submit {
  max-width: 285px;
  width: 100%;
  height: 45px;
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: start;
  border: 1px solid #000000;
  border-radius: 32px;
  transition: all, ease-in-out 0.2s;
}
.t-form-user-add__submit:hover {
  background-color: #cecece;
  box-shadow: 3px #000000;
}
</style>
