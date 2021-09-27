<template>
<main class="container">
  <!-- <div class="bordes">
    <span class="border-info"> -->
      

  <div class="row justify-content-center ">
    <div class="col-md-6 border-white">
      <div class="BG"></div>

      <div class="fadeIn ">
      <img src="@/assets/LogoApp.jpeg" width="350" id="icon" alt="User Icon" />
      </div>
      <h3 class="text-center">REGISTRO</h3>
      <form @submit.prevent="handleSubmitForm">
        <div class="form-group">
          <label>Nombre</label>
          <input
            type="text"
            class="form-control"
            v-model="registro.nombre"
            required
          />
        </div>

        <div class="form-group ">
          <label>Hora/Entrada</label>
          <input
            type="text"
            class="form-control" 
            v-model="registro.entrada"
            
          />
        </div>

        <div class="form-group">
          <label>Hora/Salida</label>
          <input
            type="text"
            class="form-control"
            v-model="registro.salida"
            
          />
        </div>

        <div class="form-group">
          <button class="btn btn-danger btn-sm">Registrar</button>
        </div>
      </form>
      <footer class="footer"></footer>
    </div>
    
  </div>
  >
  
</main>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      registro: {
        nombre: "",
        entrada: "",
        salida: "",
      },
    };
  },
  methods: {
    handleSubmitForm() {
      let apiURL = "http://localhost:4000/api/create-registro";

      axios
        .post(apiURL, this.registro)
        .then(() => {
          this.$router.push("/view");
          this.registro = {
            nombre: "",
            entrada: "",
            salida: "",
          };
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>

.form-control {
  display: block;
  border-bottom-width: 5px;
  padding: 20px; 
}  


.BG  {
  display: block;
  color: #86a6fb;
  background-color: #86a6fb;
  width: 80;
  padding: 20px;
  border-radius: 10px 10px 0px 0px;
}

.col-md-6 {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: #fff;
  padding: 30px;
  width: 90%;
  max-width: 450px;
  position: relative;
  padding: 0px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  text-align: center;

}

.footer {
  display:block;
  color: #86a6fb;
  background-color: #86a6fb;
  padding: 20px;
  border-radius: 0px 0px 10px 10px;
}



</style>

