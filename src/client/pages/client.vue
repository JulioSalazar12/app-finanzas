<template>
  <div class="client" align="center">
    <v-card class="pa-8 mx-8" max-width="900">
      <v-card-title class="font-weight-bold pt-0">Create a Client</v-card-title>
      <v-form ref="form">
        <v-text-field class="mb-3" dense v-model="dni"        label="DNI"  outlined  clearable hide-details></v-text-field>
        <v-text-field class="mb-3" dense v-model="dinero"     label="Dinero"  outlined  clearable hide-details></v-text-field>
        <v-text-field class="mb-3" dense v-model="domicilio"  label="Dirección de domicilio"  outlined  clearable hide-details></v-text-field>
        <v-text-field class="mb-3" dense v-model="localidad"  label="Localidad"  outlined  clearable hide-details></v-text-field>
        <v-text-field class="mb-3" dense v-model="nombre"     label="Nombre y Apellido"  outlined  clearable hide-details></v-text-field>
        <v-text-field class="mb-3" dense v-model="telefono"   label="Telefono"  outlined  clearable hide-details></v-text-field>
        <v-divider class="mt-5 mb-3"></v-divider>
        <v-card-actions>
          <v-btn outlined color="red" @click="reset">Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-btn outlined color="indigo accent-4" @click="createNewClient">Submit</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
    <v-snackbar v-model="snackbar" dark>
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import ClientService from '@/client/services/client.service'

export default {
  name: "client",
  data: () => ({
    snackbar: false,
    text:'',
    dni:      '',
    dinero:   '',
    domicilio:'',
    localidad:'',
    nombre:   '',
    telefono: '',
  }),
  methods: {
    createNewClient () {
      this.snackbar = true;
      this.text = "Cliente creado exitosamente";
      const client = {
        dni:      this.dni,
        dinero:   this.dinero,
        domicilio:this.domicilio,
        localidad:this.localidad,
        nombre:   this.nombre,
        telefono: this.telefono,
      };
      ClientService.createClient(client)
        .then((response) => {
          console.log(response.data);
        });
      this.reset();
    },
    reset () {
      this.text = 'Formulario borrado';
      this.snackbar = true;
      this.$refs.form.reset()
    }
  }
}
</script>

<style scoped>

</style>