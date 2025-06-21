// JavaScript Document

const videos = [
	 "C:/Users/SCSM11/Documents/PART2 MC112/NMC302/website 60%/gmbr/meme1.mp4",
	 "C:/Users/SCSM11/Documents/PART2 MC112/NMC302/website 60%/gmbr/meme2.mp4",
	 "C:/Users/SCSM11/Documents/PART2 MC112/NMC302/website 60%/gmbr/meme3.mp4",
	 "C:/Users/SCSM11/Documents/PART2 MC112/NMC302/website 60%/gmbr/meme4.mp4",
  	 "C:/Users/SCSM11/Documents/PART2 MC112/NMC302/website 60%/gmbr/meme5.mp4"
];

function triggerChaos() {
  const video = videos[Math.floor(Math.random() * videos.length)];
  const videoEl = document.getElementById("meme-video");

  videoEl.src = video;
  videoEl.style.display = "block";
  videoEl.play();

  // Optional: remove video when it ends
  videoEl.onended = () => {
    videoEl.style.display = "none";
    videoEl.src = "";
  };

  // Optional: also shake the screen
  document.body.classList.add("shake");

  setTimeout(() => {
    document.body.classList.remove("shake");
  }, 3000);
}

document.getElementById("meme-button").addEventListener("click", triggerChaos);
