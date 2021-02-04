<template>
  <div class="blog">
    <div class="introduction-page in-other-page">
      <div class="container text-center text-white">
        <h1 class="m-0">Junior blog experiences</h1>
        <h6 class="mt-2">
          This its just a review of what happends everyday in my days as junior
          web developer,<br />
          you can see im not that deep in programing but maybe you just can have
          fun, for what happends to me everyday...
        </h6>
      </div>
    </div>
    <section class="pt-5 pb-5">
      <div class="container">
        <ul class="list-articles">
          <li>
            <router-link to="/blog-detail">
              <article>
                <figure>
                  <img
                    src="../../assets/img/experiences-background.jpg"
                    alt="image-post-name"
                  />
                </figure>
                <div class="article-information">
                  <h4>1This its my post title</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consint santium inventore.
                    Accusamus animi a soluta beatae vero quis nulla similique.
                  </p>
                  <span class="link-style">Read</span>
                </div>
              </article>
            </router-link>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "BlogPage"
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/styles";

h1 {
  font-family: "Roboto", sans-serif !important;
}

h6 {
  // color: $primary-color;
  font-size: 18px;
  margin-bottom: 10px;
  // font-family: "Redressed", cursive;

  @include media-breakpoint-down(sm) {
    br {
      display: none;
    }
  }
}
</style>
