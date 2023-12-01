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
  const rtext = note[Math.floor(Math.random() * note.length)];
  const textareao = document.getElementById("randomTextarea");
  textareao.placeholder = rtext;
}

function perror() {
  const params = new URLSearchParams(window.location.search);
  if (params.has('error')) {
      ntf(params.get('error'))
  }
}


function sendmessage(message) {
  const req = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'message': message
      },
  };
  fetch('https://api.appolon.dev/index/message', req)
      .then(response => {
          return response.json();
      })
      .then(data => {
          ntf('Message sent!')
      })
      .catch(error => {
          ntf('Error: ', error)
      })

  const inputElement = document.querySelector('.message');
  inputElement.value = '';
}

function ntf(message) {
  var notification = document.createElement("div");
  notification.className = "notification";
  document.body.appendChild(notification);

  notification.innerHTML = message;
  setTimeout(function() {
      notification.style.top = "10px";
      notification.style.opacity = "1";
  }, 10);

  setTimeout(function() {
      notification.style.top = "-100px";
      notification.style.opacity = "1";
  }, 5000);

  setTimeout(function() {
      document.body.removeChild(notification)
  }, 5600);
}

const hovers = new Audio('https://api.appolon.dev/download/click.wav');
const links = document.querySelectorAll('.typed-text a');

links.forEach(link => {
  link.addEventListener('mouseenter', () => {
    hovers.play();
  });
});

function autoplayfix() {
  const body = Array.from(document.body.children);

  body.forEach(element => document.body.removeChild(element));

  const text = document.createElement("p");
  const bg = document.createElement("div");

  text.textContent = "Click anywhere";
  text.style.fontSize = "20px";
  text.style.fontWeight = "bold";
  text.style.position = "fixed";
  text.style.top = "50%";
  text.style.left = "50%";
  text.style.transform = "translate(-50%, -50%)";
  text.style.color = "white";
  text.style.zIndex = "9999";

  bg.style.position = "fixed";
  bg.style.top = "0";
  bg.style.left = "0";
  bg.style.width = "100%";
  bg.style.height = "100%";
  bg.style.backgroundImage = "url('https://api.appolon.dev/download/renderbg_blur.jpg')";
  bg.style.backgroundSize = "cover";
  bg.style.zIndex = "9998";
  bg.style.transition = "opacity 0.5s";

  document.body.appendChild(bg);
  document.body.appendChild(text);

  function autoplayfix2() {
      text.style.opacity = "0";
      bg.style.opacity = "0";
      setTimeout(() => {
          document.body.removeChild(text);
          document.body.removeChild(bg);
          body.forEach(element => document.body.appendChild(element));
      }, 500);

      document.removeEventListener('click', autoplayfix2);
  }

  document.addEventListener('click', autoplayfix2);
}

perror();
randomnote()
autoplayfix();


