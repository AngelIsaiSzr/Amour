$(document).ready(function () {
  $(".container")
    .mouseenter(function () {
      $(".card").stop().animate(
        {
          top: "-90px",
        },
        "slow"
      );
    })
    .mouseleave(function () {
      $(".card").stop().animate(
        {
          top: 0,
        },
        "slow"
      );
    });
});

function openPage() {
  const container = document.querySelector('.container');
  container.classList.add('fade-out');

  setTimeout(() => {
    window.location.href = 'main.html';
  }, 600);
}
