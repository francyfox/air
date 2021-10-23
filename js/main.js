"use strict";

/**
 * Кнопки увеличить кол-во и уменьшить
 * @param {Element} item
 */
function changeCount(item) {
  const plus = item.querySelector(".plus");
  const minus = item.querySelector(".minus");
  plus.addEventListener("click", function (e) {
    e.preventDefault();
    const input = this.parentElement.parentElement.querySelector("input");
    input.value++;
  });
  minus.addEventListener("click", function (e) {
    e.preventDefault();
    const input = this.parentElement.parentElement.querySelector("input");
    input.value--;
  });
}
/**
 * Задает одинаковую высоту
 */

function setRowAutoHeight() {
  const products = document.querySelectorAll(".products .item");
  const parentWidth = products[0].parentElement.offsetWidth;
  const itemWidth = products[0].offsetWidth;
  const rowCount = Math.round(parentWidth / itemWidth);
  let maxHeight = products[0].children[0].offsetHeight;

  for (
    let CHILD_INDEX = 0;
    CHILD_INDEX < products[0].children.length;
    CHILD_INDEX++
  ) {
    for (let index = 0; index < products.length; index++) {
      if (maxHeight < products[index].children[CHILD_INDEX].offsetHeight) {
        maxHeight = products[index].children[CHILD_INDEX].offsetHeight;
      }

      products[index].children[CHILD_INDEX].style.height = `${maxHeight}px`;

      if (index % rowCount === 1 && index !== 1) {
        console.log(index);
        maxHeight = 0;
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const products = document.querySelectorAll(".products .item");
  for (let i = 0; i < products.length; i++) {
    changeCount(products[i]);
  }
  setRowAutoHeight();
});
