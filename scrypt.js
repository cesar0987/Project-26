const COOKIES = document.querySelector(".cookies");
function acceptCookies() {
  COOKIES.classList.add("cookiesExtra");
}

function alertPag() {
  alert("Loading weather report");
}

function converFar(convertirElemento) {
  let convercion = Math.round((convertirElemento * 9) / 5 + 32);
  return convercion;
}
function converCel(convertirElemento) {
  let convercion = Math.round(((convertirElemento - 32) * 5) / 9);
  return convercion;
}
function converTodo(element) {
  let cambioTemperatura=element
  if (cambioTemperatura === "celsius") {
    for (i = 1; i < 9; i++) {
      let converTemp = document.querySelector("#temp" + i);
      let numToConv = converTemp.textContent;
      let numTemp = parseInt(numToConv);
      converTemp.textContent = converCel(numTemp) + "°";
    }
  }else if (cambioTemperatura === "fahrenheit") {
    for (i = 1; i < 9; i++) {
      let converTemp = document.querySelector("#temp" + i);
      let numToConv = converTemp.textContent;
      let numTemp = parseInt(numToConv);
      converTemp.textContent = converFar(numTemp) + "°";
    }
  }

  
}
function changeTemp(element) {
  let tipo = element.value;
  converTodo(tipo);
}
