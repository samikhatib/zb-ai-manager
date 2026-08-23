// ZB AI Manager

// شركة الأسرة التجارية ش.م.م

const ZBManager = {

  company: "شركة الأسرة التجارية ش.م.م",

  init() {

    console.log("ZB AI Manager is ready");

  },

  sendMessage() {

    const input = document.getElementById("message");

    const chat = document.getElementById("chat");

    if (!input || !chat) return;

    const text = input.value.trim();

    if (!text) return;

    const userMessage = document.createElement("div");

    userMessage.innerHTML = "<b>أنت:</b> " + text;

    chat.appendChild(userMessage);

    const reply = document.createElement("div");

    reply.innerHTML =

      "<b>ZB AI:</b> تم استلام طلبك: " + text;

    chat.appendChild(reply);

    input.value = "";

    chat.scrollTop = chat.scrollHeight;

  },

  startVoice() {

    const SpeechRecognition =

      window.SpeechRecognition ||

      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {

      alert("التعرف الصوتي غير مدعوم في هذا المتصفح.");

      return;

    }

    const recognition = new SpeechRecognition();

    recognition.lang = "ar-LB";

    recognition.interimResults = false;

    recognition.onresult = function (event) {

      const text = event.results[0][0].transcript;

      const input = document.getElementById("message");

      if (input) {

        input.value = text;

      }

    };

    recognition.start();

  }

};

document.addEventListener("DOMContentLoaded", function () {

  ZBManager.init();

});

window.sendMessage = function () {

  ZBManager.sendMessage();

};

window.startVoice = function () {

  ZBManager.startVoice();

};