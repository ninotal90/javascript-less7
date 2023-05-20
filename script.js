`use strict`;
1;
let requist = new XMLHttpRequest();
requist.addEventListener("load", function () {
let  getInfo = requist.responseText;
let   getInfoJs = JSON.parse(getInfo);

  let ulElement = document.createElement("ul");

  getInfoJs.data.forEach((element) => {
    let liElement = document.createElement("li");
    liElement.textContent = element.name;
    console.log(liElement);
    liElement.textContent = `${element.name} + ${element.color}.`;
    ulElement.appendChild(liElement);
    divElement.appendChild(ulElement);
  });
});
let divElement = document.querySelector(".object");
requist.open("get", "https://reqres.in/api/unknown");
requist.send();


2;
let xmlElement = new XMLHttpRequest();
xmlElement.addEventListener("load", function () {
  let getElement = xmlElement.responseText;
  let getElementjs = JSON.parse(getElement);
  console.log(getElementjs);

  let ulItem = document.createElement("ul");

  getElementjs.data.forEach((item) => {
    let liItem = document.createElement("li");
    liItem.textContent = `${item.first_name}  ${item.last_name} / ${item.email}.`;
    console.log(liItem);
    ulItem.appendChild(liItem);
    divElement2.appendChild(ulItem);
  });
});

let divElement2 = document.querySelector(".object2");

xmlElement.open("get", "https://reqres.in/api/users?page=2");
xmlElement.send();
