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

    // Dark mode toggle
    const darkToggle = document.getElementById('dark-toggle');
    darkToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });