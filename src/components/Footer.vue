<template>
  <footer>
    <div class="container">
      <ul class="social-media">
        <li>
          <a href="https://www.instagram.com/dulcep.c/" target="blank">
            <i class="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="#!"><i class="fab fa-linkedin-in"></i></a>
        </li>
        <li>
          <a href="#!"><i class="fab fa-github-alt"></i></a>
        </li>
      </ul>
      <hr />
      <p>© 2020 My Website. All rights reserved</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent"
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/styles";

footer {
  background: #222222;
  padding: 40px 0px;

  hr {
    border-color: #454545;
  }

  p {
    color: #454545;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 0px;
  }

  .social-media {
    padding: 0px;
    margin: 0px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    li {
      @include size(40px);
      border-radius: 50%;
      border: 1px solid #454545;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 15px;
      transition: 0.3s;

      &:last-child {
        margin-right: 0px;
      }

      a {
        color: #454545;
        font-size: 16px;
      }

      &:hover {
        border-color: rgb(255, 166, 0);

        a {
          color: rgb(255, 166, 0);
        }
      }
    }
  }
}
</style>
