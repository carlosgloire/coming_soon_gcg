    // Countdown Timer with Persistent Storage
    let countDownDate;

    if (localStorage.getItem("countDownDate")) {
      countDownDate = new Date(localStorage.getItem("countDownDate"));
    } else {
      countDownDate = new Date();
      countDownDate.setDate(countDownDate.getDate() + 7); // Set countdown for 7 days
      localStorage.setItem("countDownDate", countDownDate);
    }

    const countdownFunction = setInterval(function() {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("days").innerText = days.toString().padStart(2, '0');
      document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
      document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
      document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');

      if (distance < 0) {
        clearInterval(countdownFunction);
        document.querySelector(".countdown-container").innerText = "Launched!";
        localStorage.removeItem("countDownDate");
      }
    }, 1000);