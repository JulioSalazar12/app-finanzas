<template>
  <div class="sign-up">
    <v-container class="mt-5 px-4">
      <v-row>
        <v-col cols="12" align="center">
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card max-width="400" :class="`elevation-${hover ? 24 : 3}`" class="transition-swing" >
                <v-card-title class="justify-center font-weight-bold mb-2">Sign Up</v-card-title>

                <v-card-text class="pb-0">
                  <v-form ref="form" v-model="valid" lazy-validation>
                    <v-text-field
                        class="mb-2"
                        hide-details="auto"
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        placeholder="example@mail.com"
                        required outlined
                    >
                      <template v-slot:append>
                        <v-tooltip right>
                          <template v-slot:activator="{ on }">
                            <v-icon v-on="on">mdi-email-outline</v-icon>
                          </template>
                          Write here the email you registered
                        </v-tooltip>
                      </template>
                    </v-text-field>

                    <v-text-field
                        class="mb-2"
                        hide-details="auto"
                        v-model="password"
                        :rules="passwordRules"
                        label="Password"
                        placeholder="*******"
                        type="password"
                        required outlined
                    >
                      <template v-slot:append>
                        <v-tooltip right>
                          <template v-slot:activator="{ on }">
                            <v-icon v-on="on">mdi-key-outline</v-icon>
                          </template>
                          Your password is not displayed
                        </v-tooltip>
                      </template>
                    </v-text-field>
                  </v-form>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-btn color="error"
                         class="font-weight-bold"
                         text @click="reset">
                    Reset Form
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn :disabled="!valid"
                         class="font-weight-bold"
                         color="indigo accent-4"
                         text @click="submit">
                    Submit
                  </v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-hover>
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card max-width="400" :class="`elevation-${hover ? 24 : 3}`" class="transition-swing mt-5 flex">
                <v-card-actions class="pl-5">
                  Login here
                  <v-spacer></v-spacer>
                  <v-btn text class="font-weight-bold"
                         color="indigo accent-4" to="/log-in">Here</v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
    <!--<v-snackbar v-model="snackbar" :color=color dark>
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>-->
  </div>
</template>

<script>
export default {
  name: "sign-up",
  mounted() {
    this.$store.dispatch('changeAuthenticatedFalseAction')
  },
}
</script>

<style scoped>

</style>