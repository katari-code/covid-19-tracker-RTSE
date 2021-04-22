<template>
  <v-app>
    <div>
        <div
          class="tw-h-20 tw-flex tw-justify-between tw-justify-items-center tw-items-between tw-px-12 tw-bg-white tw-py-2 tw-max-h-52"
        >
      <nuxt-link to="/">
          <img src="/logo/bacteria 1.svg" class="tw-w-44" alt="" srcset="" />
      </nuxt-link>
        </div>

      <div class="tw-grid-cols-12 tw-grid tw-p-4">
        <div
          class="tw-col-start-1 tw-py-4 tw-m-4 tw-mt-8 tw-bg-white lg:tw-col-span-2 tw-col-span-12 tw-rounded-lg highet"
        >
          <div class="tw-flex tw-justify-center tw-flex-col tw-items-center">
            <img
              src="/userProfile.jpg"
              class="tw-w-20 tw-mx-4 tw-h-20 tw-rounded-full"
              alt=""
              srcset=""
            />

            <div
              class="tw-flex tw-flex-col tw-my-2 tw-justify-center tw-items-center"
            >
              <h1>Yaren</h1>
              <!-- <p>Barnet Hospital</p> -->
            </div>

            <div class="tw-w-full">
              <div
                @click="text(item.to, index)"
                v-for="(item, index) in items"
                :key="item.id"
                :class="idx == index ? `tw-cursor-pointer tw-text-white  tw-flex tw-items-start tw-bg-blue-400 hover:tw-bg-blue-400 tw-transition-colors tw-py-4 tw-justify-start`: `tw-cursor-pointer tw-flex tw-items-start hover:tw-bg-blue-400 tw-transition-colors tw-py-4 tw-justify-start`"
              >
                <img
                  :src="item.icon"
                  alt=""
                  class="tw-w-5 tw-mx-4 tw-h-5"
                  srcset=""
                />
                <h1  :class="idx == index ?`tw-text-white tw-px-2`: `tw-text-black tw-px-2`">{{ item.title }}</h1>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tw-w-full  tw-mt-8 tw-rounded-lg lg:tw-col-start-3 tw-col-start-1 tw-col-end-13 tw-min-h-screen tw-justify-center tw-items-center"
        >
          <Nuxt />
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      idx:0,
      items: [
        {
          title: "Home",
          icon: "/icons/home_.svg",
          to: "/",
          selected: "false",
        },
    
        {
          title: "Logout",
          icon: "/icons/logout_.svg",
          to: "/auth",
          selected: "false",
        },
      ],
    };
  },
  methods: {
    text(str, index) {

      this.$router.push(str);
      this.idx = index;
      console.log(str, index);
    },
  },
};
</script>


<style>
.highet {
  height: 22rem;
  height: 28rem;
}
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  scroll-behavior: smooth;
}


*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
h1,
h3,
h4 {
  font-family: "Poppins", sans-serif;
}
p {
  font-family: "Raleway", sans-serif;
}

h2 {
  font-family: "Raleway", sans-serif;
}

.v-application,
.v-application--wrap {
  background-color: #ebeff2 !important;
}

</style>
