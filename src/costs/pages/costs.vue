<template>
  <div class="costs" align="center">
    <v-card class="pa-8 mx-8" max-width="900">
      <v-card-title class="font-weight-bold pt-0">Create a Costs</v-card-title>
      <v-form ref="form">
        <v-text-field class="mb-3" dense outlined  clearable hide-details  v-model="description" label="Descripción"      ></v-text-field>
        <v-text-field class="mb-3" dense outlined  clearable hide-details  v-model="montoAsociado"           label="Monto Asociado"                 ></v-text-field>
        <v-text-field class="mb-3" dense outlined  clearable hide-details  v-model="initOfinal"    label="Inicial o Final" placeholder="[F] o [I]"      ></v-text-field>
        <v-combobox   class="mb-3" clearable outlined hide-details dense   v-model="oneBill" label="Letra" :items="bills"                ></v-combobox>
        <v-divider class="mt-5 mb-3"></v-divider>
        <v-card-actions>
          <v-btn outlined color="red" @click="reset">Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-btn outlined color="indigo accent-4" @click="createNewCost">Submit</v-btn>
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
import CostsService from "@/costs/services/costs.service";

export default {
  name: "costs",
  data: () => ({
    description: '',
    montoAsociado: '',
    fechaInicio: '',
    initOfinal: '',
    oneBill: null,
    bills: ['Letra1','Letra2','Letra3'],
  }),
  methods: {
    createNewCost () {
      this.snackbar = true;
      this.text = "Coste creado exitosamente";
      const Bills = {
        //TODO: Implementar para enviar idLetra
        description: this.description,
        montoAsociado: this.montoAsociado,
        inicial_o_final: this.initOfinal,
        idLetra: 1,
      };
      CostsService.createNewCosts(Bills)
          .then((response) => {
            console.log("new costs:", response.data);
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