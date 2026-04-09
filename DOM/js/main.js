const arr = [65, 85, 21, 6, 33, 41, 74, 21, 58, 63, 24, 12];
let res = document.createElement("div");
res.style.display = "flex";
for (let i = 0; i < arr.length; i++) {
  let newElement = document.createElement("p");
  newElement.style.width = "100%";
  newElement.style.height = "45px";
  newElement.style.textAlign = "center";
  newElement.style.margin = "3px";
  newElement.style.padding = "5px";
  newElement.style.color = "beige";
  newElement.style.fontSize = "26px";
  newElement.style.backgroundColor = "blueviolet";
  let newText = document.createTextNode(arr[i]);
  newElement.appendChild(newText);
  res.appendChild(newElement);
}

document.body.appendChild(res);

document.getElementById("main").appendChild(res);

console.log(res);

let srtRes = document.createElement("div");
srtRes.style.display = "flex";

for (let i = 0; i < arr.length; i++) {
  let srtElement = document.createElement("p");

  srtElement.style.order = arr[i];

  srtElement.style.width = "100%";
  srtElement.style.height = "45px";
  srtElement.style.textAlign = "center";
  srtElement.style.margin = "3px";
  srtElement.style.padding = "5px";
  srtElement.style.color = "beige";
  srtElement.style.fontSize = "26px";
  srtElement.style.backgroundColor = "blueviolet";

  let newText = document.createTextNode(arr[i]);
  srtElement.appendChild(newText);
  srtRes.appendChild(srtElement);
}

document.body.appendChild(srtRes);

document.getElementById("main").appendChild(srtRes);

console.log(srtRes);
