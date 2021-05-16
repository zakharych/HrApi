const speakersList = document.querySelector(".speakers__list");
(async () => {
  let DB = await (await fetch("./js/spikers.txt")).json();

  DB.forEach((element) => {
    createListItem(element);
  });
  runSpicersSlider();
})();

function createListItem(element) {
  const speakerItem = document.createElement("li");
  speakerItem.className = "pk__item";
  speakersList.append(speakerItem);

  const speakerLink = document.createElement("a");
  speakerLink.className = "pk__link";
  speakerLink.href = element.url;
  speakerLink.target = "_blank";
  speakerItem.append(speakerLink);

  const speakerPic = document.createElement("div");
  speakerPic.className = "pk__img";
  speakerLink.append(speakerPic);

  const speakerImg = document.createElement("img");
  speakerImg.className = "pk__avatar";
  speakerImg.src = element.avatar;
  speakerPic.append(speakerImg);

  const speakerTitle = document.createElement("div");
  speakerTitle.className = "pk__title";
  speakerLink.append(speakerTitle);

  const speakersName = document.createElement("p");
  speakersName.className = "pk__name";
  const speakerNameStr = element.name.split(" ").join("\n");
  speakersName.textContent = speakerNameStr;
  speakerTitle.append(speakersName);

  const speakersSity = document.createElement("p");
  speakersSity.className = "pk__city";
  speakersSity.textContent = element.location;
  speakerTitle.append(speakersSity);

  const speakersPosition = document.createElement("p");
  speakersPosition.className = "pk__position";
  speakersPosition.textContent = element.position;
  speakerTitle.append(speakersPosition);

  const speakersCompany = document.createElement("p");
  speakersCompany.className = "pk__company";
  speakersCompany.textContent = element.company;
  speakerTitle.append(speakersCompany);
}

function resizeSlideHeight() {
  const slider = document.querySelector(".speakers__list");
  slides = slider.querySelectorAll(".slick-slide");
  let maxHeight = 0;
  slides.forEach((element) => {
    const firstSlideOffset = element.querySelector(".pk__item").offsetHeight;
    if (firstSlideOffset > maxHeight) {
      maxHeight = firstSlideOffset;
    }
  });
  slides.forEach((element) => {
    element.querySelector(".pk__item").style.minHeight = `${maxHeight}px`;
    if (element.lastChild.querySelector(".pk__link")) {
      element.lastChild.querySelector(".pk__link").style.marginBottom = 0;
    }
  });
}

function runSpicersSlider() {
  $(".speakers__list").slick({
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    rows: 2,
    dots: false,
  });
  resizeSlideHeight();
}
