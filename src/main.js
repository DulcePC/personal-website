// import * as firebase from "firebase";
import firebase from "firebase/app";

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//scrollTo
var VueScrollTo = require("vue-scrollto");
Vue.use(VueScrollTo);
Vue.use(VueScrollTo, {
  container: "body",
  duration: 900,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});

//fireBase
var config = {
  apiKey: "AIzaSyC_MKjErOwTz4F9TucjVCalq__2ykpos-0",
  authDomain: "dulce-website.firebaseapp.com",
  databaseURL: "https://dulce-website-default-rtdb.firebaseio.com",
  projectId: "dulce-website",
  storageBucket: "dulce-website.appspot.com",
  messagingSenderId: "650129749889",
  appId: "1:650129749889:web:e00fb0d48ec16f8e87da80"
};
firebase.initializeApp(config);

new Vue({
  router,
  store,
  firebase: firebase,
  render: h => h(App)
}).$mount("#app");
