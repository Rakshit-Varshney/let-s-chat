const firebaseConfig = {
      apiKey: "AIzaSyCo_HgpsZD_QPAxm1HjndzAnM4qPH52sQY",
      authDomain: "kwitter-64df7.firebaseapp.com",
      databaseURL: "https://kwitter-64df7-default-rtdb.firebaseio.com",
      projectId: "kwitter-64df7",
      storageBucket: "kwitter-64df7.appspot.com",
      messagingSenderId: "306628506541",
      appId: "1:306628506541:web:0dc1b14c976a76a7112724"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
