var firebaseConfig = {
      apiKey: "AIzaSyCWhC5mJ0obN9VRX7-bAj9SYKDPYGMMKkk",
      authDomain: "kwitter-8e870.firebaseapp.com",
      projectId: "kwitter-8e870",
      storageBucket: "kwitter-8e870.appspot.com",
      messagingSenderId: "129724788736",
      appId: "1:129724788736:web:294289cb82414f9c5968e5"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
      user_name = localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
      function addRoom() {
      room_name = document.getElementById("room_name").value; 
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html"; 
}

function redirectToRoomName(name)
{ 
      console.log(name);
       localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html"; 
      }
         function logout() 
         { 
               localStorage.removeItem("user_name");
                localStorage.removeItem("room_name");
                 window.location = "kwitter.html";
             }