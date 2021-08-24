var firebaseConfig = {
  apiKey: "AIzaSyAMuzLAivYagdWgqKt5kQ64dUjEBySMJwU",
  authDomain: "kwitter-7b92c.firebaseapp.com",
  databaseURL: "https://kwitter-7b92c-default-rtdb.firebaseio.com",
  projectId: "kwitter-7b92c",
  storageBucket: "kwitter-7b92c.appspot.com",
  messagingSenderId: "1080597705255",
  appId: "1:1080597705255:web:e508d4cf742f4738f6d402"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name"); 
    document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";
    
        
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room  name"
      });
      localStorage.setItem("room_name" , room_name);
      window.location =  "WeChat_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>"
       document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "WeChat_page.html";
}