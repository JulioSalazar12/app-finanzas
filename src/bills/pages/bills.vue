<template>
  <div class="bills" align="center">
    <v-card class="pa-8 mx-8" max-width="900">
      <v-card-title class="font-weight-bold pt-0">Create a Bills</v-card-title>
      <v-form ref="form">
        <v-combobox   class="mb-3" clearable outlined hide-details dense   v-model="acreedor" label="Acreedor" :items="acreedores"          ></v-combobox>
        <v-combobox   class="mb-3" clearable outlined hide-details dense   v-model="deudor" label="Deudor" :items="deudores"            ></v-combobox>
        <v-combobox   class="mb-3" clearable outlined hide-details dense   v-model="tasa" label="Tasa" :items="tasas"                ></v-combobox>
        <v-combobox   class="mb-3" clearable outlined hide-details dense   v-model="entidadFinanciera" label="Entidad Financiera" :items="entidadesFinancieras"   ></v-combobox>
        <v-text-field class="mb-3" dense outlined  clearable hide-details  v-model="valorNominal" label="Valor Nominal"      ></v-text-field>
        <v-text-field class="mb-3" dense outlined  clearable hide-details  v-model="td"           label="Td"                 ></v-text-field>
        <v-text-field class="mb-3" dense  outlined  clearable hide-details v-model="fechaInicio"  label="Fecha de inicio"    placeholder="2019-02-03T00:00:00"></v-text-field>
        <v-text-field class="mb-3" dense outlined  clearable hide-details  v-model="lugarGiro"    label="Lugar de giro"      ></v-text-field>
        <v-text-field class="mb-3" dense outlined  clearable hide-details  v-model="pagoTextual"  label="Pago textual"       ></v-text-field>
        <v-divider class="mt-5 mb-3"></v-divider>
        <v-card-actions>
          <v-btn outlined color="red" @click="reset">Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-btn outlined color="indigo accent-4" @click="createNewBills">Submit</v-btn>
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
import BillsService from '@/bills/services/bills.service'

export default {
  name: "bills",
  data: () => ({
    acreedor: null,
    deudor: null,
    tasa: null,
    entidadFinanciera: null,
    valorNominal: '',
    td: '',
    fechaInicio: '',
    lugarGiro: '',
    pagoTextual: '',
    acreedores: ['Marco','Julio','Jorge'],
    deudores: ['Luis','Juan','Pedro'],
    tasas: ['Tasa1','Tasa2','Tasa3'],
    entidadesFinancieras: ['Entity1','Entity2','Entity3']
  }),
  methods: {
    createNewBills () {
      this.snackbar = true;
      this.text = "Letra creada exitosamente";
      const Bills = {
        //TODO: Implementar para enviar idAcreedor, idDeudor, idTasa, idEf y idUsuario
        valor_Nominal: this.valorNominal,
        td: this.td,
        Fecha_Inicio: this.fechaInicio,
        lugar_Giro: this.lugarGiro,
        pago_textual: this.pagoTextual,
      };
      BillsService.createNewBills(Bills)
          .then((response) => {
            console.log("new letter:", response.data);
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