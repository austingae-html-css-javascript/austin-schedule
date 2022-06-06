/*
Mission: append items to localStorage
Solution:
1) Create a localStorage.
2) Create a new variable equal to the localStorage.
3) To the new variable, append items (by doing new variable.push(...))
4) Set localStorage equal to the new variable
*/

let foodList = ["apple", "banana", "cake", "donut"];


if (localStorage.getItem("list") == null) { //if list does not exist in localStorage, then...
  localStorage.setItem("list", JSON.stringify(foodList)); //create list in localStorage, and make the list equal to foodList
}
else if (localStorage.getItem("list") != null) { //if list does exist in localStorage, then...
  let temporaryList = JSON.parse(localStorage.getItem("list")); //create a new variable equal to the localStorage

  //to the new variable, remove and append items 
  temporaryList.splice(0,1);
  temporaryList.push("egg");
  temporaryList.push("fish");
  temporaryList.push("granola bar");

  //list now equals temporaryList
  localStorage.setItem("list", temporaryList);
}
