const dateElem = document.querySelectorAll(".date__post");
const dataNow = new Date();
const curentMount = dataNow.getMonth();
const curentYear = dataNow.getFullYear();

const copyData = document.querySelector(".footer-menu__copy--data");
copyData.innerText = curentYear;

const tableString = document.querySelectorAll(".price__table-row");

for (let i = 0; i < dateElem.length; i++) {
  const metaData = dateElem[i].getAttribute("meta-date");
  let metaDataprev = 0;
  if (i >= 1) {
    metaDataprev = Date.parse(`${dateElem[i - 1].getAttribute("meta-date")}`);
  }
  const metaDataString = Date.parse(`${metaData}`);
  const metaMounth = new Date(metaDataString).getMonth();

  if (metaDataString > Date.now() && metaDataprev < Date.now()) {
    dateElem[i].classList.add("date__post--active");
    dateElem[i].nextElementSibling.classList.add("dot__active");
    for (let j = 0; j < tableString.length; j++) {
      tableString[j].children[i + 1].classList.add("price__table-col--active");
    }
  }
}

const ticketPrice = document.querySelectorAll(".tickets__price-summ");
const tablePrice = document.querySelectorAll(".price__table-col--active");

for (let i = 0; i < ticketPrice.length - 1; i++) {
  ticketPrice[i].innerText = tablePrice[i].innerText.slice(
    0,
    tablePrice[i].innerText.length - 2
  );
}
