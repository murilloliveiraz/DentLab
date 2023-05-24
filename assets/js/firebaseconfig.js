const firebaseConfig = {

    apiKey: "AIzaSyCKVVL2ZPsqd_A9-a2qNYRNUtw3cdqOxiw",

    authDomain: "dentlab-1a8bc.firebaseapp.com",

    projectId: "dentlab-1a8bc",

    storageBucket: "dentlab-1a8bc.appspot.com",

    messagingSenderId: "499707773747",

    appId: "1:499707773747:web:1d61f701d47f7944787446",

    measurementId: "G-HV01F3LRE2"

  };

  //inicializa o site com o firebase
  firebase.initializeApp(firebaseConfig);

//cria o objeto de autenticacao para usar seus metodos
  const auth = firebase.auth();

  //cria o objeto do BD Firestore para que eu possa usar seus metodos
  const db = firebase.firestore();