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

  //   $('.speakers__list').slick({
  //   infinite: false,
  //   speed: 300,
  //   slidesToShow: 5,
  //   slidesToScroll: 5,
  //   rows: 2,
  //   dots: false,
  //   responsive: [
  //     {
  //       breakpoint: 1060,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: false
  //       }
  //     },
  //     {
  //       breakpoint: 830,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //     // You can unslick at a given breakpoint now by adding:
  //     // settings: "unslick"
  //     // instead of a settings object
  //   ]
  // });
});
