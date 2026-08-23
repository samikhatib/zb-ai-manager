const ZBManager = {

  sendMessage() {

    const input = document.getElementById("cmd");

    const chat = document.getElementById("chat");

    if (!input || !chat) {

      alert("خطأ: لم أجد خانة السؤال أو صندوق المحادثة");

      return;

    }

    const text = input.value.trim();

    if (!text) return;

    const userMessage = document.createElement("div");

    userMessage.className = "msg you";

    userMessage.innerHTML = "<b>أنت:</b> " + text;

    chat.appendChild(userMessage);

    let answer = "أنا جاهز. اسألني عن المبيعات، المخزون، المشتريات أو وضع الشركة.";

    if (text.includes("وضع الشركة")) {

      answer = "وضع الشركة جيد مبدئيًا. سأعرض لك المبيعات والمقبوض والمستحقات والتنبيهات.";

    } else if (text.includes("مبيعات")) {

      answer = "مبيعات اليوم: $8,420";

    } else if (text.includes("مقبوض")) {

      answer = "المقبوض اليوم: $6,180";

    } else if (text.includes("مخزون")) {

      answer = "المخزون يحتاج متابعة الأصناف السريعة الحركة والمواد القريبة من النفاد.";

    } else if (text.includes("مشتريات")) {

      answer = "راجع طلبات الشراء المفتوحة والأسعار والموردين قبل اعتماد أي طلب جديد.";

    }

    const managerMessage = document.createElement("div");

    managerMessage.className = "msg";

    managerMessage.innerHTML = "<b>المدير:</b> " + answer;

    chat.appendChild(managerMessage);

    input.value = "";

    chat.scrollTop = chat.scrollHeight;

  },

  startVoice() {

    const SpeechRecognition =

      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {

      alert("التعرف الصوتي غير مدعوم في هذا المتصفح");

      return;

    }

    const recognition = new SpeechRecognition();

    recognition.lang = "ar-LB";

    recognition.onresult = function (event) {

      const input = document.getElementById("cmd");

      if (input) {

        input.value = event.results[0][0].transcript;

      }

    };

    recognition.start();

  }

};

window.sendMessage = function () {

  ZBManager.sendMessage();

};

window.ask = function () {

  ZBManager.sendMessage();

};

window.startVoice = function () {

  ZBManager.startVoice();

};