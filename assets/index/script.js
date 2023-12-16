const songs = {
  './assets/index/sounds/Hurts Me.mp3': '0RBw4ODUQPO4cuAOZtBGga',
  './assets/index/sounds/REEL IT IN.mp3': '5qHirGR7M9tdm6C17DlzSY',
}
const song = Object.keys(songs);

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

function title() {
  let i = 0;
  document.title = titles[i];

  function update() {
      i = (i + 1) % titles.length;
      document.title = titles[i];
  }
  setInterval(update, 100);

}

setInterval(function() {
  console.clear();
  console.log('🤓');
}, 50);

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
          ntf('✅Message sent!')
      })
      .catch(error => {
          ntf('Error: ', error)
      })

  const inputElement = document.querySelector('.message');
  inputElement.value = '';
}

function ntf(message) {
  const ntfs = document.body.querySelectorAll('.notification');

  ntfs.forEach(notification => {
      document.body.removeChild(notification);
  });

  var notification = document.createElement("div");
  notification.className = "notification";
  notification.innerHTML = message;

  document.body.appendChild(notification);
  setTimeout(function() {
      notification.style.top = "10px";
      notification.style.opacity = "1";
  }, 10);

  setTimeout(function() {
      notification.style.top = "-100px";
      notification.style.opacity = "1";
  }, 5000);
}

const pauselinks = document.querySelectorAll('.typed-text a');
pauselinks.forEach(pause => {
  const hovers = new Audio('https://api.appolon.dev/download/click.wav');
  pause.addEventListener('mouseenter', () => {
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
      initmusic();
      text.style.opacity = "0";
      bg.style.opacity = "0";
      setTimeout(() => {
          document.body.removeChild(text);
          document.body.removeChild(bg);
          body.forEach(element => document.body.appendChild(element));
          musicinit();
      }, 500);
      document.removeEventListener('click', autoplayfix2);
  }

  document.addEventListener('click', autoplayfix2);
}

let music;
let musicname;
let spotifytype = 1;

function initmusic() {
  const randomi = Math.floor(Math.random() * Object.keys(songs).length);
  const path = Object.keys(songs)[randomi];
  const match = path.match(/\/([^/]+)\.\w+$/);
  musicname = match ? match[1] : "Unknown";
  music = new Audio(path);
  music.volume = 0.2;
}

function changevolume(value) {
  if (!music.paused) {
      music.volume = value / 100;
      ntf('🔊 Volume changed to ' + (value) + '%');
  }
}

function pause() {
  if (!music.paused) {
      music.pause();
      ntf('⏯️ Music paused');
  } else {
      music.play()
      ntf('▶️ Listening to "' + musicname + '"');
  }
}

function musicinit() {
  fetch('https://api.appolon.dev/index/spotify')
      .then(response => response.json())
      .then(data => {
          const SpotifyE = document.querySelector('.spotify');
          if (data['Track'] == undefined) {
              SpotifyE.innerHTML = 'Listening nothing';
              return
          }

          if (spotifytype == 1) {
              SpotifyE.innerHTML = `<iframe class="spotifyembed" src="https://open.spotify.com/embed/track/${data['TrackID']}?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
          } else {
              const minutesd = Math.floor((data['Duration'] / 1000) / 60);
              const secondsd = Math.floor((data['Duration'] / 1000) % 60);
              const secondsp = Math.floor((data['Progress'] / 1000) % 60);
              const minutesp = Math.floor((data['Progress'] / 1000) / 60);
              const time = `${minutesp.toString().padStart(2, '0')}:${secondsp.toString().padStart(2, '0')} / ${minutesd.toString().padStart(2, '0')}:${secondsd.toString().padStart(2, '0')}`;
              SpotifyE.innerHTML = `<a href='https://open.spotify.com/track/${data['TrackID']}' target='_blank'>${data['Track'].replace(/\([^)]*\)/g, '')}</a> ${time} <br>by <a href='${data['Artists'][0]['Url']}' target='_blank'>${data['Artists'][0]['Name']}</a>`;
          }

      })
}

var slider = document.getElementById("sliderv");
if (slider) {
  slider.addEventListener("change", function() {
      changevolume(slider.value)
  })
}


perror();
randomnote()
autoplayfix();
title();