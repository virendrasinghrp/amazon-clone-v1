  var firebaseConfig = {
    apiKey: "AIzaSyDDSOgda8nt2q6Va3wSsbZ5OVA21T1Ulig",
    authDomain: "clone-v1-ee52c.firebaseapp.com",
    projectId: "clone-v1-ee52c",
    storageBucket: "clone-v1-ee52c.appspot.com",
    messagingSenderId: "371134110135",
    appId: "1:371134110135:web:8451e8c1f5cc2503bb7032",
    measurementId: "G-J79H209G4X"
  };
  

  // Initialize Firebase
/*   const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  
  var db = firebase.firestore(); */
  
   const firebaseApp = firebase.initializeApp(firebaseConfig);
   const db = firebaseApp.firestore();
   const auth = firebaseApp.auth();