var firebaseConfig = {
      apiKey: "AIzaSyABMOpy1Knv6qGOBy4XkhcgVCvh1pnA6xk",
      authDomain: "laughter-and-joy.firebaseapp.com",
      databaseURL: "https://laughter-and-joy-default-rtdb.firebaseio.com",
      projectId: "laughter-and-joy",
      storageBucket: "laughter-and-joy.appspot.com",
      messagingSenderId: "797365832035",
      appId: "1:797365832035:web:043e973958e7a2baeeeb56"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

user_name =localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}
