function title() {
        const titles = [
          "Appolon.dev", "Appolon.de", "Appolon.d", "Appolon.",
          "Appolon", "Appolo", "Appol", "Appo", "App", "Ap",
          "A", "Ap", "App", "Appo", "Appol", "Appolo",
          "Appolon", "Appolon.", "Appolon.d", "Appolon.de",
          "Appolon.dev", "ppolon.dev", "polon.dev", "olon.dev",
          "lon.dev", "on.dev", "o.dev", ".dev", "dev", "ev",
          "v", "ev", "dev", "o.dev", "lon.dev", "olon.dev",
          "polon.dev", "ppolon.dev", "Appolon.dev"
        ];
      
        let i = 0;
        document.title = titles[i];
      
        function update() {
          i = (i + 1) % titles.length;
          document.title = titles[i];
        }
      
        setInterval(update, 100);
      }

      title();
      const note = [
        "This guy cool",
        "note.exe",
        "note.txt",
        "note Note = 'Custom note'",
        "ass website no?",
        "Click for add a note",
        "Can you write something here please",
        "Buy SelfCTRL NOW --> selfctrl.appolon.dev",
        "Rise > Moon ?",
        "Moon > Rise ?",
        "Lunar > Badlion",
        "Astolfo > Rise ?",
        "Rise > Astolfo ?"
      ];

      function randomnote() {
        const randomText = note[Math.floor(Math.random() * note.length)];
        const textareaObject = document.getElementById("randomTextarea");
        textareaObject.placeholder = randomText;
      }
	  
	  function perror() {
		const params = new URLSearchParams(window.location.search);
		if (params.has('error')) {
			console.log(params.get('error'))
			ntf(params.get('error'))
		}
	  }

      window.addEventListener("load", randomnote);
	  window.addEventListener("load", perror);

      function sendmessage(message) {
        const req = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'message': message
          },
        };
        fetch('https://api.appolon.dev/index/message', req)
          .then(response => { return response.json(); })
          .then(data => { ntf('Message sent!') })
          .catch(error => { ntf('Error: ', error) })

        const inputElement = document.querySelector('.message');
        inputElement.value = '';
      }
      
      function ntf(message) {
        var notification = document.createElement("div");
        notification.className = "notification";
        document.body.appendChild(notification);

        notification.innerHTML = message;
        setTimeout(function () {
          notification.style.top = "10px";
          notification.style.opacity = "1";
        }, 10);

        setTimeout(function () {
          notification.style.top = "-100px";
          notification.style.opacity = "1";
        }, 5000);

        setTimeout(function () {
          document.body.removeChild(notification)
        }, 5600);
      }
