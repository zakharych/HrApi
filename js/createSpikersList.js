const speakersList = document.querySelector(".speakers__list");
console.log(speakersList);
(async () => {
  let DB = await (await fetch("./js/spikers.txt")).json();

  DB.forEach((element) => {
    createListItem(element);
  });
})();

function createListItem(element) {
  const speakerItem = document.createElement("li");
  speakerItem.className = "pk__item";
  speakersList.append(speakerItem);

  const speakerPic = document.createElement("div");
  speakerPic.className = "pk__img";
  speakerItem.append(speakerPic);

  const speakerImg = document.createElement("img");
  speakerImg.className = "pk__avatar";
  speakerImg.src = element.avatar;
  speakerPic.append(speakerImg);

  const speakerTitle = document.createElement("div");
  speakerTitle.className = "pk__title";
  speakerItem.append(speakerTitle);

  const speakersName = document.createElement("p");
  speakersName.className = "pk__name";
  speakersName.textContent = element.name;
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
