const table = document.querySelector(".table");
const minHeight = 5; //10 мин высота строки грида
(async () => {
  let DB = await (await fetch("./js/timetable.txt")).json();
  createTable(DB);
})();

function createTable(element) {
  let alltime = 0;
  element[`DayTable`].forEach((dayTable, i) => {
    const tableInner = document.createElement("div");
    tableInner.className = "table__inner";
    table.append(tableInner);

    const tableHeader = document.createElement("div");
    tableHeader.className = "table__header";
    tableHeader.style.gridColumnEnd = "span 2";
    tableHeader.innerText = `${dayTable.tableHeader}`;
    tableInner.append(tableHeader);

    dayTable.tableLines.forEach((tableLines, i) => {

      const tableInnerHeader = document.createElement("div");
      tableInnerHeader.className = "table__inner-header";
      tableInnerHeader.innerText = `${tableLines.tableLIneHeader}`;
      tableInner.append(tableInnerHeader);
      let temAlltime = 0;
      let line = i;
      let plug = false;

      const firstLineTime =
        dayTable.tableLines[0].tableLideSchedule[0].time.substring(0, 3);
      const secondLineTime =
        dayTable.tableLines[1].tableLideSchedule[0].time.substring(0, 3);

      if (firstLineTime !== secondLineTime) {
        plugTiming = (secondLineTime - firstLineTime).toFixed(2) * 100;
        temAlltime += plugTiming;
        plug = true;
      }

      tableLines.tableLideSchedule.forEach((slot, i, array) => {

        if (i === 0 && plug === true && line === 1) {
          console.log(slot);
          const tableRow = document.createElement("div");
          tableRow.className = "plug-row";
          tableRow.style.gridRow = `span ${plugTiming / minHeight}`;
          tableInner.append(tableRow);
        }
        
        temAlltime += slot.timing;

        const tableRow = document.createElement("div");
        tableRow.className = "table__row";
        tableRow.style.gridRow = `span ${slot.timing / minHeight}`;
        tableInner.append(tableRow);

        const time = document.createElement("div");
        time.className = "table__item table__time";
        time.innerText = `${slot.time}`;
        tableRow.append(time);

        const slotInner = document.createElement("div");
        slotInner.className = "table__slot-inner";
        tableRow.append(slotInner);

        if (slot.theme) {
          const theme = document.createElement("a");
          theme.className = "table__item table__theme";
          theme.innerText = `${slot.theme}`;

          if (slot.themeLink) {
            theme.classList.add("table__link");
            theme.href = `${slot.themeLink}`;
          }

          slotInner.append(theme);

          const speakerContainer = document.createElement("div");
          speakerContainer.className = "table__item table__speaker-container";
          slotInner.append(speakerContainer);

          slot.speaker.forEach((speaker) => {
            const speakerItem = document.createElement("div");
            speakerItem.className = "table__speaker";
            speakerContainer.append(speakerItem);

            const speakerName = document.createElement("div");
            speakerName.className = "table__speaker-name";
            speakerName.innerText = `${speaker["name"]}`;
            speakerItem.append(speakerName);

            const speakerLocation = document.createElement("div");
            speakerLocation.className = "table__speaker-location";
            speakerLocation.innerText = `${speaker["location"]}`;
            speakerItem.append(speakerLocation);

            const speakerPosition = document.createElement("div");
            speakerPosition.className = "table__speaker-position";
            speakerPosition.innerText = `${speaker["position"]}`;
            speakerItem.append(speakerPosition);

            const speakerCompany = document.createElement("div");
            speakerCompany.className = "table__speaker-company";
            speakerCompany.innerText = `${speaker["company"]}`;
            speakerItem.append(speakerCompany);
          });
          if (i === array.length - 1 && plug === true && line === 0) {
            console.log(slot);
            const tableRow = document.createElement("div");
            tableRow.className = "plug-row";

            tableRow.style.gridRow = `span ${plugTiming / minHeight}`;
            tableInner.append(tableRow);
          }
        } else {
          const breaking = document.createElement("div");
          breaking.className = "table__item table__break";
          breaking.innerText = `${slot.noSpeakerLine}`;
          slotInner.append(breaking);
        }
      });
      if (temAlltime > alltime) {
        alltime = temAlltime;
      }
    });
    tableInner.style.gridTemplateRows = `repeat(${
      alltime / minHeight + 2
    }, auto)`;
    alltime = 0;
  });
}
