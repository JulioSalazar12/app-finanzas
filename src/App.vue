<template>
  <v-app>
    <h1 class="mt-6 font-weight-bold mx-auto">APP FINANCE</h1>
    <v-hover>
      <template v-slot:default="{ hover }">
        <v-card :class="`elevation-${hover ? 20 : 10}`" class="mx-auto my-5 transition-swing">
          <v-tabs centered background-color="black" dark>
            <v-tab to="/tasa">Rate</v-tab>
            <v-tab to="/cliente">Client</v-tab>
            <v-tab to="/letra">Bills</v-tab>
            <v-tab to="/costes">Costs</v-tab>
            <v-tab>Sample</v-tab>
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