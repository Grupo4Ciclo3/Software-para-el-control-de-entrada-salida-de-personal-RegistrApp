<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Update Registro</h3>
      <form @submit.prevent="handleUpdateForm">
        <div class="form-group">
          <label>Nombre</label>
          <input
            type="text"
            class="form-control"
            v-model="registro.nombre"
            required
          />
        </div>

        <div class="form-group">
          <label>entrada</label>
          <input
            type="text"
            class="form-control"
            v-model="registro.entrada"
            required
          />
        </div>

        <div class="form-group">
          <label>salida</label>
          <input
            type="text"
            class="form-control"
            v-model="registro.salida"
            required
          />
        </div>

        <div class="form-group">
          <button class="btn btn-danger btn-block">Update</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      registro: {},
    };
  },
  created() {
    let apiURL = `http://localhost:4000/api/edit-registro/${this.$route.params.id}`;

    axios.get(apiURL).then((res) => {
      this.registro = res.data;
    });
  },
  methods: {
    handleUpdateForm() {
      let apiURL = `http://localhost:4000/api/update-registro/${this.$route.params.id}`;

      axios
        .put(apiURL, this.registro)
        .then((res) => {
          console.log(res);
          this.$router.push("/view");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
