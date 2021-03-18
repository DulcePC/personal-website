<template>
  <ul class="list-articles">
    <li v-for="post in posts" :key="post.id">
      <a href="/blog-etail">
        <article>
          <figure>
            <img :src="post.image" :alt="post.title" />
          </figure>
          <div class="article-information">
            <h4>{{ post.title }}</h4>
            <p>{{ post.postDescription }}</p>
            <span class="link-style">Read now</span>
          </div>
        </article>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ListArticle",
  data() {
    return {
      posts: [
        {
          id: 1,
          image: require("../assets/img/experiences-background.jpg"),
          title: "This its the post one",
          postDescription: "Bla bla bla one"
        },
        {
          id: 2,
          image: require("../assets/img/experiences-background.jpg"),
          title: "This its the post two",
          postDescription: "Bla bla bla two"
        },
        {
          id: 3,
          image: require("../assets/img/experiences-background.jpg"),
          title: "This its the post three",
          postDescription: "Bla bla bla three"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/styles";

.list-articles {
  padding: 0px;
  margin: 0px;
  list-style: none;
  @include make-row();

  li {
    @include make-col-ready();
    margin-bottom: 38px;

    @include media-breakpoint-down(xl) {
      @include make-col(4);
    }

    @include media-breakpoint-down(md) {
      @include make-col(6);
    }

    @include media-breakpoint-down(sm) {
      @include make-col(6);
    }

    @include media-breakpoint-down(xs) {
      @include make-col(12);
    }
  }

  @include media-breakpoint-down(sm) {
    justify-content: center;
  }

  a {
    display: block;

    article {
      background-color: white;
      box-shadow: $box-shadow;
      transition: 0.3s;

      figure {
        width: 100%;
        height: 170px;
        margin: 0px;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: 0.3s;
        }
      }

      .article-information {
        padding: 15px;

        h4 {
          font-size: 24px;
          line-height: 28px;
          font-weight: 400;
          color: black;
        }

        p {
          font-size: 14px;
          line-height: 24px;
          margin-bottom: 8px;
          color: black;
          font-weight: 400;
          color: #333333;
        }

        span {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          color: $primary-color;
          font-weight: 400;
          line-height: 1;
          transition: 0.3s;
        }
      }

      &:hover {
        box-shadow: $box-shadow-lg;

        figure {
          img {
            transform: scale(1.1);
          }
        }
      }
    }
  }
}
</style>
