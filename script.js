const button = document.getElementsByClassName("sounds");

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function (e) {
    let audio;
    if (i > 3) {
      if (i === 4) {
        audio = new Audio(`kick-bass.mp3`);
      } else if (i === 5) {
        audio = new Audio(`crash.mp3`);
      } else {
        audio = new Audio(`snare.mp3`);
      }
    } else {
      audio = new Audio(`tom-${i + 1}.mp3`);
    }
    e.target.classList.add("touch");

    audio.play().then(() => {
      e.target.classList.remove("touch");
    });
  });
}
