<template>
  <div class="tasa" align="center">
    <v-card class="pa-8 mx-8" max-width="900">
      <v-card-title class="font-weight-bold pt-0">Create a Rate</v-card-title>
      <v-form ref="form">
        <v-text-field class="mb-3" dense v-model="plazoTasa"  label="Plazo Tasa"  outlined  clearable hide-details></v-text-field>
        <v-text-field class="mb-3" dense v-model="tipoTasa"  label="Tipo Tasa"  outlined  clearable hide-details></v-text-field>
        <v-text-field class="mb-3" dense v-model="valorTasa"  label="Valor Tasa"  outlined  clearable hide-details></v-text-field>
        <v-text-field class="mb-3" dense v-model="capitalizacion"  label="Capitalización"  outlined  clearable hide-details></v-text-field>
        <v-divider class="mt-5 mb-3"></v-divider>
        <v-card-actions>
          <v-btn outlined color="red" @click="reset">Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-btn outlined color="indigo accent-4" @click="createNewTasa">Submit</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </div>
</template>

<script>

import TasaService from '@/views/services/tasa.service';

export default {
  name: 'tasa',
  data: () => ({
    plazoTasa: '' ,
    tipoTasa: '',
    valorTasa: '',
    capitalizacion: '',

  }),
  methods: {
    createNewTasa () {
      const tasa = {
        plazo_Tasa: this.plazoTasa,
        tipo_Tasa: this.tipoTasa,
        valor_Tasa: this.valorTasa,
        capitalizacion: this.capitalizacion,
      };
      TasaService.createTasa(tasa)
        .then((response) => {
          console.log(response.data);
        });
      this.reset();
    },
    reset () {
      this.$refs.form.reset()
    }
  }
}

</script>