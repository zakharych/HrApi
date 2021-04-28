function sliderWidthMonipulation() {
  const list = document.querySelector(".history__list");
  let innerWidth = 0;
  let a = 0;
  for (let i = 0; i < list.children.length; i++) {
    innerWidth +=
      list.children[i].offsetWidth +
      Number(
        getComputedStyle(list.children[i]).marginRight.slice(
          0,
          getComputedStyle(list.children[i]).marginRight.length - 2
        )
      );
    a += list.children[i].offsetWidth;
  }
  if (innerWidth > list.offsetWidth) {
    list.classList.add("history__list--width");
  }
}

$(document).ready(function () {
  const history__list = document.querySelector(".history__list");
  sliderWidthMonipulation();
  $(".history__list").slick({
    infinite: false,
    slidesToShow: 11,
    slidesToScroll: 1,
    draggable: false,
  });
});
