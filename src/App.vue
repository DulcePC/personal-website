<template>
  <div id="app">
    <HeaderComponent />
    <main id="main" :class="{ 'p-0': isInHomeRoute }">
      <router-view />
    </main>
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
  },
  computed: {
    isInHomeRoute() {
      return this.$route.name == "home";
    }
  }
};
</script>

<style lang="scss">
@import "./assets/scss/styles";
</style>
