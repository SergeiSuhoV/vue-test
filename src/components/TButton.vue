<template>
  <button class="t-button" @click="onClick">
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  props: {
    onClick: {
      type: Function,
      required: true
    }
  }
}
</script>

<style>
.t-button {
  min-width: 200px;
  height: 40px;
  border: 1px solid black;
  border-radius: 18px;
  background-color: #dddddd;
  transition: all, ease-in-out 0.2s;
}

.t-button:hover {
  background-color: #cecece;
  box-shadow: 3px #000000;
}

.t-button__text {
  color: #161616;
}
</style>
