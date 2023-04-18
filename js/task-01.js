const categories = document.querySelectorAll(".item");

// 1 part

const lengthOfCategories = categories.length;
console.log("Number of categories: ", lengthOfCategories);

// 2 part

categories.forEach(function (element) {
  console.log(`Category:`, element.querySelector("h2").textContent);
  console.log(`Elements:`, element.querySelectorAll("li").length);
});
