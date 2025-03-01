<template>
  <div class="container">
    <Logo />
    <h1>Selecciona un modo de juego</h1>
    <div class="buttons">
      <Button text="Mode One" />
      <Button text="Mode Two" :action="goto(2)" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import Button from "@/share/components/Button.vue";
import Logo from "@/share/components/Logo.vue";

// COMPOSABLES   ======================================================================================================

// STORE ACTIONS ======================================================================================================

// STORE GETTERS ======================================================================================================

// COMPUTEDS ==========================================================================================================

// EVENTS =============================================================================================================
const goto = (mode: number) => () => {
  console.log("goto", { mode });
  if (mode === 1) {
    // router.push({ name: "about" });
  } else {
    // router.push({ name: "home" });
  }
};
// METHODS ============================================================================================================

// HOOKS =============================================================================================================
</script>
<style>
.buttons {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>
