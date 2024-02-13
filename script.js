document.addEventListener("DOMContentLoaded", function () {
    // Countdown Timer
    const countdownElement = document.getElementById('countdown');
    const hour = document.getElementById('hours');
    const min = document.getElementById('minutes');
    const sec = document.getElementById('seconds');
    let countdownValue = 3800; // 10 minutes in seconds
    
    function updateCountdown() {
        const hours = Math.floor(countdownValue / 3600);
        const minutes = Math.floor((countdownValue % 3600) / 60);
        const seconds = countdownValue % 60;
    
        hour.innerHTML = (hours<10)?0+`${hours}`:`${hours}`;
        min.innerHTML = (minutes<10)?0+`${minutes}`:`${minutes}`;
        sec.innerHTML = (seconds<10)?0+`${seconds}`:`${seconds}`;
    
        countdownValue--;
    
        // Optionally, you can add a condition to stop the countdown at 0
        // if (countdownValue < 0) {
        //     clearInterval(timerInterval);
        //     countdownElement.innerHTML = "Time's up!";
        // }
    }
    
    const timerInterval = setInterval(updateCountdown, 1000);
    

    // Slide-up Form after 15 seconds
    setTimeout(() => {
        document.getElementById('slide-up-form').style.display = 'block';
    }, 1000);
});

const formContainer = document.querySelector('.contact-form-container');
const closeButton = document.querySelector('.close-button');

setTimeout(() => {
  formContainer.style.bottom = '0';
}, 15000); // Change 15000 to adjust the delay in milliseconds

closeButton.addEventListener('click', () => {
  formContainer.style.bottom = '-100%';
});
