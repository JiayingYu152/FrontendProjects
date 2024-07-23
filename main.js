document.addEventListener("DOMContentLoaded", function () {
  const contentDivs = document.querySelectorAll(".main-page-single-content");

  contentDivs.forEach((div) => {
    div.addEventListener("click", function () {
      this.classList.toggle("clicked");
    });
  });
});
