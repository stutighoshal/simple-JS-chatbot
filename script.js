function talk() {
  var know = {
    Hi: 'Hello, I am a simple chatbot. Ask me - How are you?',
    Hello: 'Hello, I am a simple chatbot. Ask me - How are you?',
    Hola: 'Hello, I am a simple chatbot. Ask me - How are you?',
    'How are you?': 'Good, thanks for asking. How are you?',
    "Isn't the weather lovely? ": 'Ah yes, lovely weather outside. ',
    'where do you live?':
      'Somewhere in a palace made of clouds. beep boop blop!',
    Good: `That's nice to hear!`,
    Bye: 'Okay! Will meet soon.',
  };
  var user = document.getElementById('userBox').value;
  document.getElementById('chatLog').innerHTML = user + '<br>';
  if (user in know) {
    document.getElementById('chatLog').innerHTML = know[user] + '<br>';
  } else {
    document.getElementById('chatLog').innerHTML =
      "Um, do you perhaps want to talk about the weather? Ask me - Isn't the weather lovely? <br>";
  }
}
