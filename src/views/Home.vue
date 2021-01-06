<template>
  <div class="home">
    <HeaderComponent />
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <h1>{{ mensaje }}</h1>
    <h1 v-show="mensaje == 'hola'">show me</h1>
    <input type="text" v-model="mensaje" />
    <br />
    <button v-on:click="kiss++">
      convertir en principe
    </button>
    <p v-if="kiss < 3">sapo</p>
    <p v-else>principe</p>
    <br />
    <h1>Lista de temas para estudiar</h1>
    <hr />
    <ul>
      <li v-for="estudio in estudios" v-bind:key="estudio.id">{{ estudio }}</li>
    </ul>
    <hr />
    <h1>templates</h1>
    <div v-for="list in lista" v-bind:key="list.id">
      <h3>{{ list.titulo }}</h3>
      <p>{{ list.description }}</p>
    </div>
    <hr />
    <input type="text" v-model="nombre" />
    <br />
    <input type="text" v-model="apellido" />
    <br />
    <label>{{ nombreCompleto }}</label>
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
