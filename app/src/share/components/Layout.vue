<template>
  <div>
    <slot></slot>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </div>
</template>
<script lang="ts" setup></script>
<style>
nav {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  /* background-color: red; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  a {
    text-decoration: none;
    color: white;
  }
}
</style>
