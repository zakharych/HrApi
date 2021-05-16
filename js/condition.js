const openItem = (item) => {
  const container = item.closest(".ticket");
  const contentBlock = container.find(".condition__item-info");
  const textBlock = contentBlock.find(".condition__item-titleblock");
  const reqHeight = textBlock.height();
  container.addClass("active");
  contentBlock.height(reqHeight);
  console.log(reqHeight);
};

const closeEveryItem = (container) => {
  const item = container.find(".condition__item-info");
  const itemContainer = container.find(".ticket");

  itemContainer.removeClass("active");
  item.height(0);
};

$(".condition__button").click((e) => {
  const $this = $(e.currentTarget);
  const container = $this.closest(".tickets");
  const elemContainer = $this.closest(".ticket");

  if (elemContainer.hasClass("active")) {
    closeEveryItem(container);
  } else {
    closeEveryItem(container);
    openItem($this);
  }
});


