<template>
  <v-app>
    <v-app-bar v-if="val" dark absolute app>
      <v-toolbar-title class="font-weight-bold my-auto"><v-icon class="mr-1 py-1">mdi-school</v-icon>Asimov</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn depressed outlined rounded class="text-capitalize mx-1" @click="logOut">Log out<v-icon class="ml-2">mdi-logout-variant</v-icon></v-btn>
    </v-app-bar>
    <h1 class="mt-6 font-weight-bold mx-auto">APP FINANCE</h1>
    <v-hover v-if="val">
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
import router from "@/router";
export default {
  name: 'App',
  data: () => ({
    val: true,
  }),
  updated() {
    this.val = this.$store.state.authenticated;
  },
  mounted() {
    if(!localStorage.getItem('user')){
      this.val = false;
      router.push("/sign-up");
    }else
      this.val = true;
  },
  methods: {
    logOut() {
      localStorage.removeItem('user');
      this.$store.dispatch('changeAuthenticatedFalseAction');
      router.push("/log-in")
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Montserrat;
  background-color: #f5f5f5;
}

</style>