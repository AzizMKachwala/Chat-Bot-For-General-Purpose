function talk() {   
  var know = {
    "Hi" :"Hello & Welcome, Do you have any Questions?",
    "Who are you" : "Myself AZIZ KACHWALA, Nice To Meet You...",
    "How are you" : "Good :)",
    "I have some Doubts" : "What can i do for you?",
    "Ohk" : "Thank You So Much ",
    "Bye" : "Okay! Will meet soon..",
  };
  var user = document.getElementById("userBox").value;
  document.getElementById("chatLog").innerHTML = user + "<br>";
  if (user in know) {
    document.getElementById("chatLog").innerHTML = know[user] + "<br>";
  } else {
    document.getElementById("chatLog").innerHTML =
      "Sorry,I didn't understand <br>";
  }
}
