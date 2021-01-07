<template>
  <div class="home">
    <div class="introduction-page in-home" id="home">
      <figure>
        <img src="../assets/img/dulce.jpg" alt="Profile photo" />
      </figure>
      <h1>Hi!, I'm Dulce</h1>
    </div>
    <section class="about-me-section" id="about">
      <div class="container">
        <h2>Welcome To My Site</h2>
        <p>
          Insert myself in the professional field to continue my development
          professional through study and constant preparation. Take advantage of
          professional opportunities for these purposes.
        </p>
        <div class="row">
          <div class="col-lg-4">
            <h6 class="skill-title">html</h6>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style="width: 90%"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div class="col-lg-4">
            <h6 class="skill-title">css</h6>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style="width: 70%"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div class="col-lg-4">
            <h6 class="skill-title">scss</h6>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style="width: 60%"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div class="col-lg-4">
            <h6 class="skill-title">Javascript</h6>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style="width: 30%"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div class="col-lg-4">
            <h6 class="skill-title">vue</h6>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style="width: 30%"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div class="col-lg-4">
            <h6 class="skill-title">seo</h6>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style="width: 70%"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="services-section">
      <div class="container">
        <h2>I'm Available For Hire</h2>
        <p>We can create technological and creative solutions</p>
        <div class="row justify-content-center">
          <div class="col-lg-4 mt-3">
            <div class="service-card">
              <i class="fas fa-layer-group"></i>
              <h5>Layouts</h5>
              <p>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Nulla mollis dapibus nunc
              </p>
            </div>
          </div>
          <div class="col-lg-4 mt-3">
            <div class="service-card">
              <i class="fas fa-layer-group"></i>
              <h5>Layouts</h5>
              <p>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Nulla mollis dapibus nunc
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="blog-introduction-section" id="blog">
      <div class="container">
        <h2>The junior daily blog</h2>
        <p>
          A simple blog to share the experiences of a junior, just for fun ...
        </p>
        <h1>Soon...</h1>
      </div>
    </section>
    <section class="experiences-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 px-lg-5">
            <h2>Experience</h2>
            <div class="experience-card">
              <time>2019 - now</time>
              <h6>Junior Front-end Developer</h6>
              <p>
                In charge of doing the web layout tasks in
                <a href="#!">Kation Interactive</a>.
              </p>
            </div>
            <div class="experience-card">
              <time>2019 - now</time>
              <h6>Junior Front-end Developer</h6>
              <p>
                In charge of doing the web layout tasks in
                <a href="#!">October Studio</a>.
              </p>
            </div>
          </div>
          <div class="col-lg-6 px-lg-5">
            <h2>Eductation</h2>
            <div class="experience-card">
              <time>2019 - now</time>
              <h6>software development engineer</h6>
              <p>
                Universidad abierta para adultos (UAPA)
              </p>
            </div>
            <div class="experience-card">
              <time>2015 - 2018</time>
              <h6>Software development technologist</h6>
              <p>
                technological institute of the americas (ITLA)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="contact-section" id="contact">
      <div class="container">
        <h2 class="text-center">Contact me</h2>
        <div class="row justify-content-center mt-4">
          <div class="col-xl-5 col-lg-5 col-md-6">
            <form action="" class="contact-form">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Name" />
              </div>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Email" />
              </div>
              <div class="form-group">
                <textarea class="form-control" placeholder="Message"></textarea>
              </div>
              <div class="form-group d-flex justify-content-end m-0">
                <button type="submit">Enviar</button>
              </div>
            </form>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6">
            <a href="#!" class="contact-links">
              <i class="fas fa-map-marker-alt"></i>
              Santo Domingo, Dominincan Republic
            </a>
            <a href="mailto:dulcefrancelispc@gmail.com" class="contact-links">
              <i class="far fa-envelope"></i>
              dulcefrancelispc@gmail.com
            </a>
            <a href="tel:8292151544" class="contact-links">
              <i class="fas fa-phone"></i>
              8292151544
            </a>
            <a href="javascript:;" class="contact-links">
              <i class="far fa-file-pdf"></i>
              Download resume
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  data: function() {
    return {
      mensaje: "hola",
      kiss: 0,
      estudios: ["js", "vue"],
      lista: [
        { titulo: "Titulo 1", description: "description one" },
        { titulo: "Titulo 2", description: "description two" },
        { titulo: "Titulo 3", description: "description three" }
      ],
      nombre: "",
      apellido: ""
    };
  },
  computed: {
    nombreCompleto: function() {
      return this.nombre + " " + this.apellido;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/styles";

.about-me-section {
  padding: 40px 0px 60px 0px;

  h2,
  p {
    text-align: center;
  }

  h2 {
    color: $primary-color;
    margin-bottom: 10px;
  }

  p {
    max-width: 500px;
    margin: 0 auto;
    margin-bottom: 40px;
    font-weight: 300;
    font-family: "Roboto", sans-serif;
  }

  .skill-title {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    font-family: "Roboto", sans-serif;
    margin-bottom: 8px;
  }

  .progress {
    height: 5px;
    margin-bottom: 30px;

    .progress-bar {
      background-color: $primary-color;
    }
  }
}

.services-section {
  background-image: url("~@/assets/img/services-background.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  padding: 70px 0px;
  position: relative;

  .container {
    position: relative;
    z-index: 3;
  }

  h2,
  p {
    text-align: center;
  }

  h2 {
    margin-bottom: 10px;
    color: white;
  }

  p {
    color: white;
  }

  &::before {
    content: "";
    background: rgba(7, 10, 12, 0.72);
    position: absolute;
    top: 0;
    min-height: 100%;
    left: 0;
    right: 0;
    z-index: 2;
  }
}

.service-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  height: 100%;
  margin-bottom: 20px;
  transition: 0.3s;

  i {
    color: $primary-color;
    margin-bottom: 15px;
    font-size: 50px;
  }

  h5,
  p {
    color: white;
    font-family: "Roboto", sans-serif;
  }

  p {
    margin: 0px;
  }

  &:hover {
    i {
      color: white;
    }

    background-color: $primary-color;
  }
}

.blog-introduction-section {
  padding: 70px 0px;

  h2,
  p,
  h1 {
    text-align: center;
  }

  h2 {
    color: $primary-color;
  }

  h1 {
    text-transform: uppercase;
    margin: 0px;
  }
}

.experiences-section {
  background-image: url("~@/assets/img/experiences-background.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  padding: 40px 0px;
  position: relative;

  .container {
    position: relative;
    z-index: 3;
  }

  h2 {
    color: white;
    margin-bottom: 30px;
  }

  &::before {
    content: "";
    background: rgba(7, 10, 12, 0.72);
    position: absolute;
    top: 0;
    min-height: 100%;
    left: 0;
    right: 0;
    z-index: 2;
  }
}

.experience-card {
  padding-bottom: 20px;
  border-bottom: 1px solid white;
  margin-bottom: 30px;

  time {
    padding: 3px 15px;
    border: 2px solid $primary-color;
    display: inline-block;
    text-align: center;
    color: white;
    margin-bottom: 15px;
    font-weight: bold;
    font-size: 16px;
    transition: 0.3s;
  }

  h6 {
    font-weight: bold;
    color: white;
  }

  p {
    margin: 0px;
    color: white;
  }

  a {
    color: $primary-color;
  }

  &:hover {
    time {
      background-color: $primary-color;
    }
  }
}

.contact-section {
  padding: 40px 0px;

  h2 {
    color: $primary-color;
  }

  .contact-form {
    textarea {
      height: 160px !important;
    }

    button {
      border: none;
      background-color: $primary-color;
      color: white;
      font-weight: bold;
      padding: 5px 30px;
      border-radius: 5px;
      display: inline-block;
      font-size: 14px;

      &:focus {
        outline: transparent;
      }
    }

    @include media-breakpoint-down(sm) {
      margin-bottom: 20px;
    }
  }

  .contact-links {
    padding: 15px;
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    background: #f5f5f5;
    color: $primary-color;
    font-family: "Roboto", sans-serif;
    transition: 0.3s;

    i {
      margin-right: 10px;
      font-size: 24px;

      @include media-breakpoint-down(md) {
        font-size: 14px;
      }
    }

    &:hover {
      background-color: $primary-color;
      color: white;
    }

    @include media-breakpoint-down(md) {
      font-size: 14px;
    }
  }
}
</style>
