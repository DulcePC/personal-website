<template>
  <section>
    <div class="introduction-page in-other-page">
      <h1>Title blog</h1>
    </div>
    <div class="container py-4">
      <div class="row justify-content-center">
        <div class="col-lg-7">
          <h2 class="text-primary">This is the sub title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque vel
            facere possimus itaque animi ratione nam accusantium? Iusto illo
            saepe natus facere veniam cumque. Inventore beatae eos maxime qui
            magnam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque vel
            facere possimus itaque animi ratione nam accusantium? Iusto illo
            saepe natus facere veniam cumque. Inventore beatae eos maxime qui
            magnam?
          </p>
          <figure>
            <img
              src="./../../assets/img/introduction-home.jpg"
              alt="image name"
            />
          </figure>
          <h3>La cosa es que:</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque vel
            facere possimus itaque animi ratione nam accusantium? Iusto illo
            saepe natus facere veniam cumque. Inventore beatae eos maxime qui
            magnam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque vel
            facere possimus itaque animi ratione nam accusantium? Iusto illo
            saepe natus facere veniam cumque. Inventore beatae eos maxime qui
            magnam?
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BlogDetail"
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/styles";

h2,
h3 {
  color: $primary-color;
  font-family: "Redressed", cursive;
}

p {
  margin-bottom: 25px;
  font-size: 16px;
  text-align: justify;
}

figure {
  img {
    max-height: 350px;
    width: 100%;
    object-fit: cover;
  }
}
</style>
