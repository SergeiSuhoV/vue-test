<template>
  <div>
    <table class="t-table">
      <thead class="t-table__head">
        <tr>
          <th class="t-table__th" @click="toogleFilterByName">Имя</th>
          <th class="t-table__th">Телефон</th>
        </tr>
      </thead>

      <tbody>
        <tr class="t-table__tr" v-for="item in node" :key="item.id">
          <td class="t-table__td">{{ item.name }}</td>
          <td class="t-table__td">{{ item.phoneNumber }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 't-table',
  props: {
    node: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      isUpFilterByName: false
    }
  },
  methods: {
    toogleFilterByName () {
      // вызов фильтра у родителя + toggle
      this.$emit('onFilterByName', this.isUpFilterByName)
      this.isUpFilterByName = !this.isUpFilterByName
    }
  }
}
</script>

<style>
.t-table {
  min-width: 750px;
  border-collapse: collapse;
}
.t-table__th {
  height: 50px;
  padding: 0 0 0 40px;
  text-align: left;
  border: solid 1px #ccc;
}

.t-table__td {
  height: 70px;
  padding: 0 0 0 35px;
  border: solid 1px #ccc;
}

.t-table__tr {
  transition: all 0.1s ease-in-out;
}

.t-table__tr:hover {
  background-color: coral;
}
</style>
