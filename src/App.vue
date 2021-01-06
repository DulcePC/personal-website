<template>
  <div id="app">
    <HeaderComponent />
    <router-view />
    <FooterComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from "@/components/Header.vue";
import FooterComponent from "@/components/Footer.vue";

export default {
  components: {
    HeaderComponent,
    FooterComponent
  }
};
</script>

<style lang="scss">
@import "./assets/scss/styles";
</style>
