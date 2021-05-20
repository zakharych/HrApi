const table = document.querySelector(".table");
(async () => {
  let DB = await (await fetch("./js/timetable.txt")).json();

  createTable(DB);
})();

function createTable(element) {
  // console.log(element[`tableHeaders`]);
  element[`DayTable`].forEach((dayTable) => {
    // console.log(dayTable);
    const tableInner = document.createElement("div");
    tableInner.className = "table__inner";
    table.append(tableInner);

    const tableHeader = document.createElement("div");
    tableHeader.className = "table__header";
    tableHeader.innerText = `${dayTable.tableHeader}`;
    tableInner.append(tableHeader);

    // console.log(dayTable.tableLines);
    dayTable.tableLines.forEach((tableLines) => {
      const tableInnerTable = document.createElement("div");
      tableInnerTable.className = "table__inner-table";
      tableInner.append(tableInnerTable);

      const tableInnerHeader = document.createElement("div");
      tableInnerHeader.className = "table__inner-header";

      tableInnerHeader.innerText = `${tableLines.tableLIneHeader}`;
      tableInnerTable.append(tableInnerHeader);

      tableLines.tableLideSchedule.forEach((slot) => {
        // console.log(slot);
        const tableRow = document.createElement("div");
        tableRow.className = "table__row";
        tableInnerTable.append(tableRow);

        const time = document.createElement("div");
        time.className = "table__item table__time";
        time.innerText = `${slot.time}`;
        tableRow.append(time);

        if (slot.theme) {
          console.log(slot.theme);
          const theme = document.createElement("a");
          theme.className = "table__item table__theme";

          theme.innerText = `${slot.theme}`;
          if (slot.themeLink) {
            theme.classList.add('table__link')
            theme.href = `${slot.themeLink}`;
          }
          tableRow.append(theme);

          const speaker = document.createElement("div");
          speaker.className = "table__item table__speaker";
          tableRow.append(speaker);

          const speakerName = document.createElement("div");
          speakerName.className = "table__speaker-name";
          speakerName.innerText = `${slot.speaker["name"]}`;
          speaker.append(speakerName);

          const speakerLocation = document.createElement("div");
          speakerLocation.className = "table__speaker-location";
          speakerLocation.innerText = `${slot.speaker["location"]}`;
          speaker.append(speakerLocation);

          const speakerPosition = document.createElement("div");
          speakerPosition.className = "table__speaker-position";
          speakerPosition.innerText = `${slot.speaker["position"]}`;
          speaker.append(speakerPosition);

          const speakerCompany = document.createElement("div");
          speakerCompany.className = "table__speaker-company";
          speakerCompany.innerText = `${slot.speaker["company"]}`;
          speaker.append(speakerCompany);
        } else {
          console.log(slot.noSpeakerLine);
          const breaking = document.createElement("div");
          breaking.className = "table__item table__break";
          breaking.innerText = `${slot.noSpeakerLine}`;
          tableRow.append(breaking);
        }
      });
    });
  });

  // const speakerItem = document.createElement("li");
  // speakerItem.className = "pk__item";
  // speakersList.append(speakerItem);

  // const speakerLink = document.createElement("a");
  // speakerLink.className = "pk__link";
  // speakerLink.href = element.url;
  // speakerLink.target = "_blank";
  // speakerItem.append(speakerLink);

  // const speakerPic = document.createElement("div");
  // speakerPic.className = "pk__img";
  // speakerLink.append(speakerPic);

  // const speakerImg = document.createElement("img");
  // speakerImg.className = "pk__avatar";
  // speakerImg.src = element.avatar;
  // speakerPic.append(speakerImg);

  // const speakerTitle = document.createElement("div");
  // speakerTitle.className = "pk__title";
  // speakerLink.append(speakerTitle);

  // const speakersName = document.createElement("p");
  // speakersName.className = "pk__name";
  // const speakerNameStr = element.name.split(" ").join("\n");
  // speakersName.textContent = speakerNameStr;
  // speakerTitle.append(speakersName);

  // const speakersSity = document.createElement("p");
  // speakersSity.className = "pk__city";
  // speakersSity.textContent = element.location;
  // speakerTitle.append(speakersSity);

  // const speakersPosition = document.createElement("p");
  // speakersPosition.className = "pk__position";
  // speakersPosition.textContent = element.position;
  // speakerTitle.append(speakersPosition);

  // const speakersCompany = document.createElement("p");
  // speakersCompany.className = "pk__company";
  // speakersCompany.textContent = element.company;
  // speakerTitle.append(speakersCompany);
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
