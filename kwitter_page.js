//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyA6L-Qaeo3U69cBgF3WLfm7NVgd1tyzwhM",
      authDomain: "kwitter-app-aada4.firebaseapp.com",
      databaseURL: "https://kwitter-app-aada4-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-aada4",
      storageBucket: "kwitter-app-aada4.appspot.com",
      messagingSenderId: "893000919849",
      appId: "1:893000919849:web:d3fe9e4ac48bd6b1192538"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

     user_name=localStorage.getItem("user_name");
     room_name=localStorage.getItem("room_name");

function send()
{
      msg=document.getElementById("msg").value
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function updateLike(message_id)
{
      console.log("clicked on like button -"+ message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      update_likes=Number(likes)+1;
      console.log(update_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      });
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}