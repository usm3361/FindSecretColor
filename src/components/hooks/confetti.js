  export function createConfetti() {
    for (let i = 0; i < 30; i++) {
      const confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.style.left = Math.random() * 100 + "%";
      confetti.style.animationDuration = Math.random() * 2 + 1 + "s";
      confetti.style.background = [
        "#FFD700",
        "#FF6347",
        "#4169E1",
        "#32CD32",
        "#FF69B4",
      ][Math.floor(Math.random() * 5)];

      document.body.appendChild(confetti);

      setTimeout(() => {
        confetti.remove();
      }, 3000);
    }
  }