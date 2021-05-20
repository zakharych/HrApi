const table = document.querySelector(".table");
(async () => {
  let DB = await (await fetch("./js/timetable.txt")).json();
  createTable(DB);
})();

function createTable(element) {
  element[`DayTable`].forEach((dayTable) => {
    const tableInner = document.createElement("div");
    tableInner.className = "table__inner";
    table.append(tableInner);

    const tableHeader = document.createElement("div");
    tableHeader.className = "table__header";
    tableHeader.innerText = `${dayTable.tableHeader}`;
    tableInner.append(tableHeader);

    dayTable.tableLines.forEach((tableLines) => {
      const tableInnerTable = document.createElement("div");
      tableInnerTable.className = "table__inner-table";
      tableInner.append(tableInnerTable);

      const tableInnerHeader = document.createElement("div");
      tableInnerHeader.className = "table__inner-header";

      tableInnerHeader.innerText = `${tableLines.tableLIneHeader}`;
      tableInnerTable.append(tableInnerHeader);

      tableLines.tableLideSchedule.forEach((slot) => {
        const tableRow = document.createElement("div");
        tableRow.className = "table__row";
        tableInnerTable.append(tableRow);

        const time = document.createElement("div");
        time.className = "table__item table__time";
        time.innerText = `${slot.time}`;
        tableRow.append(time);

        if (slot.theme) {
          const theme = document.createElement("a");
          theme.className = "table__item table__theme";

          theme.innerText = `${slot.theme}`;
          if (slot.themeLink) {
            theme.classList.add("table__link");
            theme.href = `${slot.themeLink}`;
          }
          tableRow.append(theme);
          const speakerContainer = document.createElement("div");
          speakerContainer.className = "table__item table__speaker-container";

          tableRow.append(speakerContainer);

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
        } else {
          const breaking = document.createElement("div");
          breaking.className = "table__item table__break";
          breaking.innerText = `${slot.noSpeakerLine}`;
          tableRow.append(breaking);
        }
      });
    });
  });
}
