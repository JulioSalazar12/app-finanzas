<template>
  <v-app>
    <h1 class="mt-6 font-weight-bold mx-auto">APP FINANCE</h1>
    <v-hover>
      <template v-slot:default="{ hover }">
        <v-card :class="`elevation-${hover ? 24 : 3}`" class="mx-auto my-5 transition-swing">
          <v-tabs centered background-color="black" dark>
            <v-tab to="/tasa">Tasa</v-tab>
            <v-tab to="/cliente">Cliente</v-tab>
            <v-tab to="/letra">Letra</v-tab>
            <v-tab to="/costes">Costes</v-tab>
            <v-tab to="/pago-letra">Pago de Letra</v-tab>
            <v-tab to="/execute">Execute</v-tab>
          </v-tabs>
        </v-card>
      </template>
    </v-hover>

    <v-main class="mx-6 my-3">
      <router-view/>
    </v-main>

  </v-app>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'App',
}
</script>

<style lang="scss">
#app {
  font-family: Montserrat;
  background-color: #f5f5f5;
}

</style>