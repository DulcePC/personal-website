<template>
  <section>
    <div class="container">
      <h1>crud-blog</h1>
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <h1>{{ titulo }}</h1>
          <h2>{{ clave }}</h2>
          <h3>{{ description }}</h3>
          <p>{{ blogList }}</p>
          <ul>
            <li v-for="item in blogList" v-bind:key="item.id">
              {{ item.titulo }} {{ item.description }}
              <button @click.prevent="deleteItem(item.clave)">Borrar</button>
            </li>
          </ul>
        </div>
        <div class="col-lg-6">
          <form class="mb-5">
            <div class="form-group">
              <label>Titulo</label>
              <input type="text" class="form-control" v-model="titulo" />
            </div>
            <div class="form-group">
              <label>Clave</label>
              <input type="text" class="form-control" v-model="clave" />
            </div>
            <div class="form-group">
              <label>Descripcion</label>
              <textarea
                type="text"
                class="form-control"
                v-model="description"
              ></textarea>
            </div>
            <div class="form-group d-flex justify-content-end m-0">
              <button @click.prevent="agregarPost">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CrudBlog",
  data() {
    return {
      clave: "",
      titulo: "",
      description: "",
      blogList: []
    };
  },
  methods: {
    clearForm() {
      this.clave = "";
    },
    agregarPost() {
      var post = {
        clave: this.clave,
        titulo: this.titulo,
        description: this.description
      };
      this.blogList.push(post);
      this.clearForm();
    },
    deleteItem(clave) {
      var index = this.blogList
        .map(function(obj) {
          return obj.clave;
        })
        .indexOf(clave);

      this.blogList.splice(index);
    }
  }
};
</script>

<style></style>
