<template>
  <button :type="typeButton" :class="classButton" @click="onClick">
    {{ text }}
  </button>
</template>
<script lang="ts" setup>
// DEFINE PROPS  ======================================================================================================
const props = defineProps({
  text: {
    type: String,
    default: "Button",
  },
  typeButton: {
    // type: "button" | "submit" | "reset",
    // type: ButtonHTMLAttributes["type"],
    default: "button",
  },
  classButton: {
    default: "",
  },
  action: {
    type: Function,
    default: () => {},
  },
});
function onClick() {
  props.action();
}
</script>
<style>
button {
  padding: 10px;
  border: 1px solid #000;
  border-radius: 5px;
  background-color: #f0f0f0;
  cursor: pointer;
  margin-bottom: 20px;
}
</style>
