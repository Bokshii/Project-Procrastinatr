window.addEventListener("DOMContentLoaded", function () {
    // Hamburger menu toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    // Fake timer
    const startBtn = document.getElementById('start-btn');
    const minutesDisplay = document.getElementById('minutes');
    const secondsDisplay = document.getElementById('seconds');

    startBtn.addEventListener('click', () => {
        startBtn.innerText = "Focusing…";

        setTimeout(() => {
            const distractions = [
                "Oops. Got distracted by a cat video.",
                "Thinking about snacks...",
                "Almost started... just one more meme.",
                "Wait, was I supposed to be doing something?",
                "Focus? Never heard of her."
            ];
            const msg = distractions[Math.floor(Math.random() * distractions.length)];
            startBtn.innerText = msg;
            minutesDisplay.innerText = "25";
            secondsDisplay.innerText = "00";
        }, 3000);
    });

    const avoidForm = document.getElementById('avoid-form');
    const taskInput = document.getElementById('task-input');
    const response = document.getElementById('response');

    avoidForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = taskInput.value;
        const fakeReplies = [
            `Hmm... that sounds like a tomorrow problem.`,
            `Interesting. We'll get back to you... never.`,
            `Task noted. Ignored. 😎`,
            `Perfect! Now go take a break.`,
            `We've added it to the Eternal Backlog™.`
        ];
        response.innerText = "Analyzing your task...";
        setTimeout(() => {
            const randomMsg = fakeReplies[Math.floor(Math.random() * fakeReplies.length)];
            response.innerText = randomMsg;
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }, 1500);
    });

    // Play sound when the script runs
    document.getElementById('nope-sound').play();
    
    const featureTabs = document.querySelectorAll('.feature-tab');
    const featureTitle = document.getElementById('feature-title');
    const featureDescription = document.getElementById('feature-description');
    
    const featureData = {
        todo: {
            title: "Perma-Todo™ List",
            desc: "Tasks that always stay 'in progress'. Satisfaction not guaranteed."
        },
        timer: {
            title: "Focus Timer (Beta)",
            desc: "Starts in 5...4...okay maybe later."
        },
        graph: {
            title: "Productivity Graph",
            desc: "Beautiful charts showing your steadily declining motivation."
        }
    };
    
    featureTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            featureTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const tabKey = tab.getAttribute('data-tab');
            featureTitle.innerText = featureData[tabKey].title;
            featureDescription.innerText = featureData[tabKey].desc;
        });
    });
  
// I'll Do It Tomorrow button functionality
const ctaButton = document.querySelector('.cta-btn');
let currentAudio = null; // Variable to track the currently playing audio

ctaButton.addEventListener('click', () => {
  // Array of absurd messages
  const messages = [
    "What was I supposed to do again? Oh, right, never mind.",
    "Procrastination level: Infinity.",
    "Did you really expect me to do anything?",
    "Time is an illusion. I’ll do it tomorrow… or not.",
    "I just… I just need a snack.",
    "Maybe in a parallel universe I’ll do it… but this one? Nope.",
    "I’ll do it after the next cat video.",
    "I’m not even sure what I’m procrastinating at this point."
  ];

  // Change the button text to an even worse message
  ctaButton.innerText = messages[Math.floor(Math.random() * messages.length)];

  // Do absolutely nothing else (except making the page look even more pointless)
  const randomPosition = Math.floor(Math.random() * document.body.scrollHeight);
  window.scrollTo(0, randomPosition); // Scroll randomly (making it worse)


  // Play a random sound from MyInstants, but prevent overlap
  const sounds = [
    'https://www.myinstants.com/media/sounds/movie_1.mp3',
    'https://www.myinstants.com//media/sounds/erro.mp3',
    'https://www.myinstants.com/media/sounds/never-gonna-give-you-up.mp3',
    'https://www.myinstants.com/media/sounds/meme-song.mp3',
    'https://www.myinstants.com//media/sounds/tmpauxfo4ff.mp3',
    'https://www.myinstants.com/media/sounds/man-snoring-meme_ctrllNn.mp3'
  ];

  const randomSound = sounds[Math.floor(Math.random() * sounds.length)];

  // Stop the previous sound if it's playing
  if (currentAudio && !currentAudio.paused) {
    currentAudio.pause();
    currentAudio.currentTime = 0; // Reset the audio to the start
  }

  // Create a new audio element and play the random sound
  currentAudio = new Audio(randomSound);
  currentAudio.play();

  // Alert the user for no reason
  alert("Procrastination level: Unmatched. You're winning... at nothing!");
});


});

