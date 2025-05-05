function openLetter() {
    const envelope = document.querySelector(".envelope");
    const flap = document.querySelector(".flap");
    const message = document.getElementById("loveMessage");
  
    // Animación de apertura
    flap.style.transform = "rotateX(-180deg)";
    envelope.style.transform = "translateY(-200px) scale(0.8)";
    setTimeout(() => {
      envelope.style.display = "none";
      message.classList.remove("hidden");
    }, 1500);
  }
  