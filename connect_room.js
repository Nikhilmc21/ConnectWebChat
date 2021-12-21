
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCDOamsnlSWJccENuv03Ed0fazwgjPaTGM",
      authDomain: "connect-67845.firebaseapp.com",
      databaseURL: "https://connect-67845-default-rtdb.firebaseio.com",
      projectId: "connect-67845",
      storageBucket: "connect-67845.appspot.com",
      messagingSenderId: "182081847541",
      appId: "1:182081847541:web:5323690862f61b4940c5bc"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     
      //End code
      });});}
getData();
