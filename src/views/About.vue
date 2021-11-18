<template>
  <div class="about">
    <v-card ref="form" class="pa-3">
      <v-card-title class="pl-12 font-weight-bold">This is About Page!</v-card-title>
      <v-card-text>
        <v-text-field outlined
                      ref="email"
                      v-model="email"
                      :rules="[() => !!email || 'This field is required']"
                      :error-messages="errorMessages"
                      label="Email"
                      placeholder="example@gmail.com"
                      required
        >
          <template v-slot:prepend>
            <v-tooltip
                bottom
            >
              <template v-slot:activator="{ on }">
                <v-icon v-on="on">
                  mdi-help-circle-outline
                </v-icon>
              </template>
              I'm a tooltip
            </v-tooltip>
          </template>
          <template v-slot:append>
            <v-fade-transition leave-absolute>
              <v-icon v-on="on">
                mdi-email-outline
              </v-icon>
            </v-fade-transition>
          </template>
        </v-text-field>
        <v-text-field outlined
                      type="password"
                      ref="password"
                      v-model="password"
                      :rules="[() => !!password || 'This field is required']"
                      :error-messages="errorMessages"
                      label="Password"
                      placeholder="*********"
                      required
        >
          <template v-slot:prepend>
            <v-tooltip
                bottom
            >
              <template v-slot:activator="{ on }">
                <v-icon v-on="on">
                  mdi-help-circle-outline
                </v-icon>
              </template>
              I'm a tooltip
            </v-tooltip>
          </template>
          <template v-slot:append>
            <v-fade-transition leave-absolute>
              <v-icon v-on="on">
                mdi-key-outline
              </v-icon>
            </v-fade-transition>
          </template>
        </v-text-field>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn text
               class="font-weight-bold">
          Cancel
        </v-btn>
        <v-spacer></v-spacer>
        <v-slide-x-reverse-transition>
          <v-tooltip
              v-if="formHasErrors"
              left
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  icon
                  class="my-0"
                  v-bind="attrs"
                  @click="resetForm"
                  v-on="on"
              >
                <v-icon>mdi-refresh</v-icon>
              </v-btn>
            </template>
            <span>Refresh form</span>
          </v-tooltip>
        </v-slide-x-reverse-transition>
        <v-btn
            class="font-weight-bold"
            color="indigo accent-4"
            text
            @click="submit"
        >
          Submit
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
