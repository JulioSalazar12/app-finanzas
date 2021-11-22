<template>
  <div class="pago-letra" align="center">
    <v-card class="pa-8 mx-8" max-width="900">
      <v-card-title class="pt-0">
        <strong>Create a Pago Letra</strong>
        <v-spacer></v-spacer>
        <v-switch v-model="switch1" inset
                  :label="`Mora: ${switch1.toString()}`"
                  color="indigo accent-4"
                  class="mt-0 pt-0"
                  hide-details
        ></v-switch>
      </v-card-title>
      <v-form ref="form">
        <v-combobox   class="mb-3" clearable outlined hide-details dense   v-model="entidadFinanciera" label="Entidad Financiera" :items="entidadesFinancieras"   ></v-combobox>
        <v-combobox   class="mb-3" clearable outlined hide-details dense   v-model="letra" label="Letra" :items="letras"   ></v-combobox>
        <v-text-field class="mb-3" dense outlined  clearable hide-details  v-model="montoPago" label="Monto Pago"      ></v-text-field>
        <v-text-field class="mb-3" dense outlined  clearable hide-details  v-model="ic" label="Interes Compensatorio" v-if="switch1"     ></v-text-field>
        <v-text-field class="mb-3" dense outlined  clearable hide-details  v-model="im" label="Interes Moratorio"     v-if="switch1" ></v-text-field>
        <v-text-field class="mb-3" dense outlined  clearable hide-details  v-model="tCEPm" label="tCEPm"                               v-if="switch1"    ></v-text-field>
        <v-text-field class="mb-3" dense outlined  clearable hide-details  v-model="valor_Entregado_Mora" label="Valo entregado mora"  v-if="switch1"    ></v-text-field>
        <v-text-field class="mb-3" dense outlined  clearable hide-details  v-model="diasTranscurridos" label="Dias transcurridos"      ></v-text-field>
        <v-text-field class="mb-3" dense  outlined  clearable hide-details v-model="diasTranscurridos"  label="Fecha pago"    placeholder="2019-02-03T00:00:00"></v-text-field>
        <v-divider class="mt-5 mb-3"></v-divider>
        <v-card-actions>
          <v-btn outlined color="red" @click="reset">Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-btn outlined color="indigo accent-4" @click="createNewPagoLetra">Submit</v-btn>
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
export default {
  name: "pago-letra",
  data: () => ({
    snackbar: false,
    text: '',
    entidadesFinancieras: [],
    letras: [],
    switch1: false,
    im: '',
    ic: '',
    entidadFinanciera: '',
    letra: '',
    montoPago: '',
    tCEPm: '',
    valor_Entregado_Mora: '',
    diasTranscurridos: '',
    fecha: '',
  }),
  methods: {
    createNewPagoLetra(){
      //TODO: enviar pago letra.
      console.log("newPageLetter");
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