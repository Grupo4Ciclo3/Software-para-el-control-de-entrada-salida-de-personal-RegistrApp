<template>
  <div class="row">
    <div class="col-md-12">
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th>Nombre</th>
            <th>Hora/Entrada</th>
            <th>Hora/Salida</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="registro in Registro" :key="registro._id">
            <td>{{ registro.nombre }}</td>
            <td>{{ registro.entrada }}</td>
            <td>{{ registro.salida }}</td>
            <td>
              <router-link
                :to="{ nombre: 'edit', params: { id: registro._id } }"
                class="btn btn-success"
                >Edit
              </router-link>
              <button
                @click.prevent="deleteRegistro(registro._id)"
                class="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      Registro: [],
    };
  },
  created() {
    let apiURL = "http://localhost:4000/api";
    axios
      .get(apiURL)
      .then((res) => {
        this.Registro = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    deleteRegistro(id) {
      let apiURL = `http://localhost:4000/api/delete-registro/${id}`;
      let indexOfArrayItem = this.Registro.findIndex((i) => i._id === id);

      if (window.confirm("Do you really want to delete?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.Registro.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style>
.btn-success {
  margin-right: 10px;
}
</style>
