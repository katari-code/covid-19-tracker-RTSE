<template>
  <v-app>
    <div class="">
      <div class="">
        <div
          class="tw-flex tw-h-screen tw-flex-col tw-items-center tw-justify-center backgorund-signin"
        >
          <div
            class="tw-bg-white tw-p-5 border-color tw-flex tw-flex-col tw-items-center tw-justify-center tw-rounded-sm lg:tw-w-3/12 tw-w-full tw-h-full lg:tw-h-5/6"
          >
            <div class="tw-py-6">
              <img
                src="/logo/bacteria 1.svg"
                class="tw-px-2 tw-w-32"
                alt=""
                srcset=""
              />
            </div>
            <div class="tw-w-full">
              <v-text-field
                label="Email"
                v-model="email"
                outlined
              ></v-text-field>
              <v-text-field
                type="password"
                label="Password"
                v-model="pwd"
                outlined
              ></v-text-field>
              <div
                @click="login"
                class="tw-cursor-pointer btn tw-h-11 tw-rounded-sm tw-w-full"
              >
                <h1 class="tw-text-center tw-py-2 tw-text-white">LogIn</h1>
              </div>
            </div>
            <v-snackbar
              v-model="snackbar"
              bottom
              transition="fade-transition"
              class="tw-py-5"
              :multi-line="multiLine"
            >
              {{ text }}

              <template v-slot:action="{ attrs }">
                <v-btn
                  color="red"
                  text
                  v-bind="attrs"
                  @click="snackbar = false"
                >
                  Close
                </v-btn>
              </template>
            </v-snackbar>
            <div class="tw-py-8 tw-px3"></div>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      pwd: "",
      multiLine: true,
      snackbar: false,
      text: `The email address or password you entered is incorrect `,
    };
  },

  methods: {
    async login() {
     
    },
  },
};
</script>

<style>
.border-color {
  border-color: #e5e5e5;
  border-width: 1px;
}
.btn {
  background-color: #02b3e4;
}
.backgorund-signin {
  background-color: #f7f8fc;
}
</style>
