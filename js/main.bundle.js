"use strict";

/**
 * Кнопки увеличить кол-во и уменьшить
 * @param {Element} item
 */

function changeCount(item) {
  var plus = item.querySelector(".plus");
  var minus = item.querySelector(".minus");
  plus.addEventListener("click", function (e) {
    e.preventDefault();
    var input = this.parentElement.parentElement.querySelector("input");
    input.value++;
  });
  minus.addEventListener("click", function (e) {
    e.preventDefault();
    var input = this.parentElement.parentElement.querySelector("input");
    input.value--;
  });
}
/**
 * Задает одинаковую высоту
 */

function setRowAutoHeight() {
  var products = document.querySelectorAll(".products .item");
  var parentWidth = products[0].parentElement.offsetWidth;
  var itemWidth = products[0].offsetWidth;
  var rowCount = Math.round(parentWidth / itemWidth);
  var maxHeight = products[0].children[0].offsetHeight;

  for (var CHILD_INDEX = 0; CHILD_INDEX < products[0].children.length; CHILD_INDEX++) {
    for (var index = 0; index < products.length; index++) {
      if (maxHeight < products[index].children[CHILD_INDEX].offsetHeight) {
        maxHeight = products[index].children[CHILD_INDEX].offsetHeight;
      }

      products[index].children[CHILD_INDEX].style.height = maxHeight + "px";

      if (index % rowCount === 1 && index !== 1) {
        console.log(index);
        maxHeight = 0;
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var products = document.querySelectorAll(".products .item");
  for (var i = 0; i < products.length; i++) {
    changeCount(products[i]);
  }
  setRowAutoHeight();
});
