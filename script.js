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
});

