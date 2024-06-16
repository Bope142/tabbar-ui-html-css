const removeClass = (tabItemsList) => {
  tabItemsList.forEach((tabItem) =>
    tabItem.classList.remove("tab__item_active")
  );
};

const addClass = (tabItem) => {
  tabItem.classList.add("tab__item_active");
};

const eventTabStyle1 = () => {
  const allItems = document.querySelectorAll("#tabstyle1 .tab__item");
  allItems.forEach((tabItem) => {
    tabItem.addEventListener("click", () => {
      removeClass(allItems);

      addClass(tabItem);
    });
  });
};

const eventTabStyle2 = () => {
  const allItems = document.querySelectorAll("#tabstyle2 .tab__item");
  allItems.forEach((tabItem) => {
    tabItem.addEventListener("click", () => {
      removeClass(allItems);

      addClass(tabItem);
    });
  });
};

const eventTabStyle3 = () => {
  const allItems = document.querySelectorAll("#tabstyle3 .tab__item");
  allItems.forEach((tabItem) => {
    tabItem.addEventListener("click", () => {
      removeClass(allItems);

      addClass(tabItem);
    });
  });
};
window.addEventListener("DOMContentLoaded", () => {
  eventTabStyle1();
  eventTabStyle2();
  eventTabStyle3();
});
