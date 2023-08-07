const likes = document.getElementsByClassName("like");

for (let i = 0; i < likes.length; i++) {
  likes[i].addEventListener("click", () => {
    likes[i].classList.toggle("likeActive");
    if (likes[i].classList.contains("likeActive")) {
      likes[i].style.borderColor = "tomato";
      likes[i].style.color = "tomato";
    } else {
      likes[i].style.borderColor = "white";
      likes[i].style.color = "white";
    }
  });
}
