document.addEventListener("DOMContentLoaded", () => {
  let playBtn = document.querySelector(".play-button");
  let videoModal = document.querySelector(".video-modal");
  let body = document.querySelector("body");
  let vidoeInner = document.querySelector(".video-modal__inner");

  playBtn.addEventListener("click", (e) => {
    e.preventDefault();
    videoModal.style.display = "flex";
    vidoeInner.innerHTML = `
            <iframe width="860" height="500" autoplay="1" src="https://www.youtube.com/embed/SZEflIVnhH8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    `;
    body.style.overflow = "hidden";
    modalClose();
  });
  function modalClose() {
    videoModal.addEventListener("click", (e) => {
      if (e.target != vidoeInner) {
        videoModal.style.display = "none";
        vidoeInner.innerHTML = ``;
        body.style.overflow = "";
      }
    });
  }
});
