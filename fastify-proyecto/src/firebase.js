//CONFIG FIREBASE
const { initializeApp } = require ("firebase/app");

const firebaseConfig = {
  apiKey: "AIzaSyCUfQdZHsuapLmrjuFedW1DI_jJ0Ob2Fp8",
  authDomain: "prueba-bfe62.firebaseapp.com",
  projectId: "prueba-bfe62",
  storageBucket: "prueba-bfe62.appspot.com",
  messagingSenderId: "1099333519035",
  appId: "1:1099333519035:web:6d7bc66b7729408a58cb9e"
};

const app = initializeApp(firebaseConfig);

//CONFIG FIREBASE ADMIN
var admin = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "prueba-bfe62.appspot.com"
});

//EXPORTAR
module.exports = {
  app,
  admin
};