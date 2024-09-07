const backgroundMusic = document.getElementById('background-music');
backgroundMusic.volume = 0.3;

window.onload = function() {
  const containerMain = document.querySelector('.container-main');
  const loadingElements = document.querySelector('.loading-elements');
  
  function playMusicAndFadeIn() {
    loadingElements.style.opacity = '0';
    backgroundMusic.play();
    containerMain.style.opacity = '1';    
    document.removeEventListener('click', playMusicAndFadeIn); 
    UpdateCharacter();
  }
  
  document.addEventListener('click', playMusicAndFadeIn);
};

const characters = [
  {
    name: "zagreus",
    subtitle: "PRÍNCIPE DO SUBMUNDO",
    description: "<strong style=\"color: rgba(164, 0, 0, 1)\">Zagreus</strong> é o príncipe do Submundo e o filho rebelde de Hades. Ele é o irmão mais velho de Melinoë e é o <strong>protagonista</strong> de Hades.<br>Ele sempre teve a sensação de que não pertence à Casa de Hades. Após descobrir a verdade sobre sua linhagem, ele decide escapar do submundo a qualquer custo, indo contra a vontade de seu pai.",
    image: "./images/characters/zagreus.webp",
    voice: "./sounds/zagreus_voice.mp3"
  },
  {
    name: "zeus",
    subtitle: "REI DOS OLÍMPIANOS",
    description: "<strong style=\"color: rgba(243, 243, 149, 1)\">Zeus</strong> é o Deus Olímpico do Céu e do Trovão, e o <strong>governante</strong> dos Deuses Olímpicos. Ele é o irmão mais novo de Hades e o tio de Zagreus. Ele oferece bênçãos ao seu sobrinho, que conferem às suas habilidades raios em cadeia ou relâmpagos.",
    image: "./images/characters/zeus.webp",
    voice: "./sounds/zeus_voice.mp3"
  },
  {
    name: "poseidon",
    subtitle: "DEUS DO MAR",
    description: "<strong style=\"color: rgba(111, 159, 116, 1)\">Poseidon</strong> é o Deus Olímpico do <strong>Mar</strong>, dos <strong>terremotos</strong> e dos <strong>cavalos</strong>, e é ocasionalmente referido pelo epíteto de \"Aquele que Abala a Terra\". Ele, como muitos de seus companheiros olímpicos, oferece bênçãos a Zagreus que aumentam significativamente o dano de suas habilidades, além de fazer com que suas habilidades causem Retrocesso.",
    image: "./images/characters/poseidon.webp",
    voice: "./sounds/poseidon_voice.mp3"
  },
  {
    name: "hermes",
    subtitle: "DEUS DA AGILIDADE",
    description: "<strong style=\"color: rgba(242, 154, 58, 1)\">Hermes</strong> é o Deus Olímpico do <strong>Comércio</strong>, da <strong>Trapaça</strong> e das <strong>Viagens</strong>, além de ser o mensageiro dos deuses. Ele trabalha com Caronte para guiar as almas ao seu lugar adequado no Submundo, com Hermes entregando as almas a Caronte, para que ele as transporte pelo rio Estige até o destino final. Ele oferece bênçãos que aumentam a velocidade de Zagreus de várias maneiras, incluindo a velocidade de ataque e a velocidade do golpe especial. Suas bênçãos também podem melhorar a recuperação do dash e do lançamento de Zagreus.",
    image: "./images/characters/hermes.webp",
    voice: "./sounds/hermes_voice.mp3"
  },
  {
    name: "dionísio",
    subtitle: "DEUS DO VINHO",
    description: "<strong style=\"color: rgba(162, 37, 204, 1)\">Dionísio</strong> é o Deus Olímpico do <strong>Vinho</strong> e da <strong>loucura</strong>, além de primo de Zagreus. Ele oferece bênçãos a Zagreus que giram em torno de sua maldição característica, a Ressaca, que desacelera e atordoa os inimigos, além de várias bênçãos temáticas de bebida.",
    image: "./images/characters/dionysus.webp",
    voice: "./sounds/dionysus_voice.mp3"
  },
  {
    name: "deméter",
    subtitle: "DEUSA DAS ESTAÇÕES",
    description: "<strong style=\"color: rgba(170, 184, 220, 1)\">Deméter</strong> é a Deusa Olímpica das <strong>Estações</strong> e mãe de Perséfone.<br>Muitas das bênçãos que ela oferece a Zagreus aplicam sua maldição característica, o <strong>Frio</strong>, que faz com que os inimigos desacelerem e, possivelmente, se quebrem, espalhando a maldição. Além disso, ela oferece o segundo maior aumento percentual de dano bruto. Suas outras bênçãos variam entre ajudar na sobrevivência com cura, aumentar o dano ou melhorar suas diferentes bênçãos ao longo do tempo, aumentando sua raridade.",
    image: "./images/characters/demeter.webp",
    voice: "./sounds/demeter_voice.mp3"
  },
  {
    name: "caos",
    subtitle: "ORIGINADOR PRIMORDIAL",
    description: "<strong style=\"color: rgba(181, 174, 151, 1)\">Caos</strong> é a personificação do <strong>vazio primordial</strong> de onde surgiram Nix e os Primordiais. Ele oferece bênçãos a Zagreus que, ao contrário dos aumentos imediatos oferecidos pelos deuses olímpicos, trocam um debuff por um certo número de confrontos em troca de um poder maior mais adiante.",
    image: "./images/characters/chaos.webp",
    voice: "./sounds/chaos_voice.mp3"
  },
  {
    name: "atena",
    subtitle: "DEUSA DA SABEDORIA",
    description: "<strong style=\"color: rgba(251, 252, 177, 1)\">Atena</strong> é a Deusa Olímpica da <strong>Sabedoria</strong> e da <strong>guerra estratégica</strong>. Ela oferece bênçãos a Zagreus que fazem com que suas habilidades desviem ataques inimigos. Além disso, ela também oferece bênçãos que reduzem o dano ou aumentam outras opções defensivas.",
    image: "./images/characters/athena.webp",
    voice: "./sounds/athena_voice.mp3"
  },
  {
    name: "ártemis",
    subtitle: "DEUSA DA CAÇA",
    description: "<strong style=\"color: rgba(106, 135, 89, 1)\">Ártemis</strong> é a Deusa Olímpica da <strong>Caça</strong> e irmã gêmea mais velha de Apolo. Ela oferece bênçãos a Zagreus que dão às suas habilidades a chance de causar dano Crítico. Além disso, ela também oferece bênçãos que melhoram as habilidades de Lançamento.",
    image: "./images/characters/artemis.webp",
    voice: "./sounds/artemis_voice.mp3"
  },
  {
    name: "ares",
    subtitle: "DEUS DA GUERRA",
    description: "<strong style=\"color: rgba(255, 35, 35, 1)\">Ares</strong> é o Deus Olímpico da <strong>Guerra</strong>. Diferente da Atena, que é mais voltada para a estratégia, o domínio de Ares abrange os aspectos físicos, violentos e indomáveis da guerra.",
    image: "./images/characters/ares.webp",
    voice: "./sounds/ares_voice.mp3"
  },
  {
    name: "afrodite",
    subtitle: "DEUSA DO AMOR",
    description: "<strong style=\"color: rgba(204,128, 129, 1)\">Afrodite</strong> é a Deusa Olímpica do <strong>Amor</strong> e da <strong>Beleza</strong>. Ela oferece bênçãos a Zagreus que aplicam sua fraqueza, tornando os inimigos mais suscetíveis a danos.",
    image: "./images/characters/afrodite.webp",
    voice: "./sounds/afrodite_voice.mp3"
  },
  {
    name: "hades",
    subtitle: "DEUS DOS MORTOS",
    description: "<strong style=\"color: rgba(200, 1, 0, 1)\">Hades</strong> é o Deus ctônico do Submundo e das riquezas minerais da terra, senhor e mestre da Casa de Hades, além de pai de Zagreus e Melinoë. Ele é responsável por manter a ordem no <strong>Submundo</strong>, determinando os destinos e punições dos mortos, e ouvindo as petições das sombras que vêm até ele.",
    image: "./images/characters/hades.webp",
    voice: "./sounds/hades_voice.mp3"
  }
];

let currentCharacterIndex = 0;

const charVoice = document.getElementById('voice-audio');
const characterImage = document.querySelector('.character-image'); 
const playVolumeButton = document.querySelector('.play-volume-button'); 
const charName = document.querySelector('.charName'); 
const charSubtitle = document.querySelector('.char-subtitle'); 
const charDescription = document.querySelector('.char-description'); 

function UpdateCharacter() {
  characterImage.src = characters[currentCharacterIndex].image;
  characterImage.alt = characters[currentCharacterIndex].name;
  charVoice.src = characters[currentCharacterIndex].voice;
  charName.textContent = characters[currentCharacterIndex].name;
  charSubtitle.textContent = characters[currentCharacterIndex].subtitle;
  charDescription.innerHTML = characters[currentCharacterIndex].description;
}

function fadeOut(audio, duration) {
  let targetVolume = 0;
  let step = (audio.volume - targetVolume) / (duration / 100);
  let fade = setInterval(function() {
    if (audio.volume > targetVolume) {
      audio.volume = Math.max(targetVolume, audio.volume - step);
    } else {
      clearInterval(fade);
      audio.pause();
    }
  }, 100);
}

function fadeIn(audio, duration) {
  let targetVolume = 0.3;
  audio.volume = 0;
  audio.play();
  let step = targetVolume / (duration / 400);
  let fade = setInterval(function() {
    if (audio.volume < targetVolume) {
      audio.volume = Math.min(targetVolume, audio.volume + step);
    } else {
      clearInterval(fade); 
    }
  }, 100);
}

document.querySelector('.container-sound-button').addEventListener('click', () => {
  fadeOut(backgroundMusic, 1000);
  charVoice.play()

  charVoice.addEventListener('ended', () => {
    fadeIn(backgroundMusic, 1000);
  });
});

document.getElementById('left-button').addEventListener('click', () => {
  if (backgroundMusic.paused) {
    fadeIn(backgroundMusic, 1000);
  }
  currentCharacterIndex = (currentCharacterIndex - 1 + characters.length) % characters.length;
  UpdateCharacter();
});

document.getElementById('right-button').addEventListener('click', () => {
  if (backgroundMusic.paused) {
    fadeIn(backgroundMusic, 1000);
  }
  currentCharacterIndex = (currentCharacterIndex + 1) % characters.length;
  UpdateCharacter();
});

playVolumeButton.addEventListener('click', function(e) {
  e.preventDefault();
  audioPlayer.play();
});
