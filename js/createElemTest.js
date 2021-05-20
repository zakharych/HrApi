const table = document.querySelector(".table");
console.log( table);

const minHeight = 7; //высота миунты слота
(async () => {
  let DB = await (await fetch("./js/timetable.txt")).json();
  createTable(DB);
})();

function createDomNode(elemParams) {
  const nodeElem = document.createElement(elemParams.tag || "div");
  nodeElem.className = elemParams.className;

  if (elemParams.href) {
    nodeElem.href = elemParams.href;
  }

  if (elemParams.innerText) {
    nodeElem.innerText = elemParams.innerText;
  }

  elemParams.parent.append(nodeElem);
  return nodeElem;
}

function createTable(element) {
  element[`DayTable`].forEach((dayTable) => {
    const tableInner = createDomNode({
      className: "table__inner",
      parent: table,
    });

    createDomNode({
      className: "table__header",
      innerText: `${dayTable.tableHeader}`,
      parent: tableInner,
    });

    dayTable.tableLines.forEach((tableLines) => {
      const tableInnerTable = createDomNode({
        className: "table__inner-table",
        parent: tableInner,
      });

      const tableInnerHeader = createDomNode({
        className: "table__inner-header",
        innerText: `${tableLines.tableLIneHeader}`,
        parent: tableInnerTable,
      });

      tableLines.tableLideSchedule.forEach((slot) => {
        const tableRow = document.createElement("div");
        tableRow.className = "table__row";
        tableRow.style.minHeight = `${minHeight * slot.timing}px`;
        tableInnerTable.append(tableRow);

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
        } else {
          const breaking = document.createElement("div");
          breaking.className = "table__item table__break";
          breaking.innerText = `${slot.noSpeakerLine}`;
          slotInner.append(breaking);
        }
      });
    });
  });
}
