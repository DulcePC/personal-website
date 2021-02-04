<template>
  <header
    :class="{
      'on-scroll': onScroll,
      'in-other-page': !isInHomeRoute && !isInBlogRoute && !isInBlogDetailRoute
    }"
    id="header"
  >
    <div class="container">
      <nav class="main-nav" :class="{ open: openMenu }">
        <ul class="main-menu">
          <li>
            <router-link :to="{ name: 'home' }">
              Home
            </router-link>
          </li>
          <li v-show="isInHomeRoute">
            <a
              href="javascript:;"
              v-scroll-to="{ element: '#about', offset: -60 }"
            >
              About
            </a>
          </li>
          <li>
            <router-link :to="{ name: 'BlogPage' }">
              Blog
            </router-link>
          </li>
          <li v-show="isInHomeRoute">
            <a
              href="javascript:;"
              v-scroll-to="{ element: '#contact', offset: -60 }"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <a href="javascript:;" class="header-button" @click="toggleMenu()">
        <i class="fas fa-bars"></i>
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  data: function() {
    return {
      openMenu: false,
      onScroll: false
    };
  },
  methods: {
    toggleMenu() {
      this.openMenu = !this.openMenu;
    },
    handleScroll() {
      var scrollLocation = window.scrollY;
      if (scrollLocation > 200) {
        this.onScroll = true;
      } else {
        this.onScroll = false;
      }
    }
  },
  computed: {
    isInHomeRoute() {
      return this.$route.name == "home";
    },
    isInBlogRoute() {
      return this.$route.name == "BlogPage";
    },
    isInBlogDetailRoute() {
      return this.$route.name == "BlogDetail";
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/styles";

header {
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 100;
  transition: 0.3s;

  @include media-breakpoint-up(lg) {
    height: 60px;
  }

  @include media-breakpoint-down(md) {
    height: 50px;
  }

  &.on-scroll,
  &.in-other-page {
    background-color: $primary-color;

    .main-menu {
      li {
        &:hover {
          a {
            color: white !important;
          }
        }
      }
    }
  }

  > .container,
  .container-fluid {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;

    @include media-breakpoint-down(md) {
      max-width: 100%;
    }
  }

  .main-nav {
    width: 100%;

    @include media-breakpoint-up(lg) {
      z-index: 1050;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      height: 100%;
    }

    @include media-breakpoint-down(md) {
      display: flex;
      flex-direction: column;
      position: fixed;
      justify-content: flex-start !important;
      width: 100%;
      height: calc(100% - 50px);
      max-width: 350px;
      background-color: rgb(255, 166, 0);
      right: 0;
      top: 50px;
      overflow: auto;
      transform: translate(100%, 0);
      transition: transform 0.3s ease;

      &.open {
        transform: translate(0%, 0);
      }
    }

    @include media-breakpoint-down(xs) {
      width: 100%;
      max-width: 100%;
    }

    .main-menu {
      padding: 0;
      margin: 0;
      list-style: none;

      @include media-breakpoint-up(lg) {
        display: flex;
        align-items: center;
        height: 100%;
      }

      > li {
        position: relative;

        @include media-breakpoint-up(lg) {
          height: 100%;
          display: flex;
          align-items: center;
        }

        > a {
          text-decoration: none;
          font-size: 14px;
          letter-spacing: 0;
          line-height: 24px;
          font-family: "Roboto", sans-serif;
          font-weight: 500;
          color: white;
          display: flex;
          align-items: center;

          i {
            font-size: 24px;
          }

          @include media-breakpoint-down(md) {
            padding: 15px;
            border-bottom: 1px solid #ebebeb;
          }

          @include media-breakpoint-down(sm) {
            padding-left: 15px;
          }
        }

        &:hover,
        &.active {
          a {
            color: $primary-color;
          }
        }

        @include media-breakpoint-up(lg) {
          padding-left: 10px;
          padding-right: 10px;
        }
      }
    }
  }

  .header-button {
    @include size(30px);
    background-color: #93d447;
    color: white;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;

    @include media-breakpoint-up(lg) {
      display: none;
    }
  }
}
</style>
