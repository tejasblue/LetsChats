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

document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";

function addRoom()
{
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);

      window.location="kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -"+Room_name);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}