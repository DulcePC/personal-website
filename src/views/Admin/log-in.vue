<template>
  <section>
    <div class="introduction-page in-other-page">
      <h1>Log in</h1>
    </div>
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-5 col-md-7">
          <form v-on:submit.prevent="login">
            <div class="form-group mb-4">
              <input
                type="text"
                v-model="user"
                class="form-control"
                placeholder="name"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                v-model="password"
                class="form-control"
                placeholder="pass"
              />
            </div>
            <div class="form-group">
              <button type="submit" class="shadow-lg">Log in</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      user: "",
      password: "",
      error: false,
      errorMsg: ""
    };
  },
  methods: {
    login() {
      console.log(this.user);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/styles";

section {
  height: 100vh;
}
</style>
