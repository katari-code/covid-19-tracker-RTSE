import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDWDE8qN_lT9DN7mdO9DMkq0PXIUGJhgxE",
    libraries: "places"
  }
});
