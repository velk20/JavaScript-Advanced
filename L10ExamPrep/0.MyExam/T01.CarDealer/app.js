window.addEventListener('load', solve);

function solve() {
  let makeInput = document.getElementById('make');
  let modelInput = document.getElementById('model');
  let productionYearInput = document.getElementById('year');
  let fuelTypeInput = document.getElementById('fuel');
  let originalCostInput = document.getElementById('original-cost');
  let sellingPriceInput = document.getElementById('selling-price');

  let publishBtn = document.getElementById('publish');
  publishBtn.addEventListener('click', publishCarOffer);

  let carsTable = document.getElementById('table-body');
  let sellTable = document.getElementById('cars-list');

  let profit = document.getElementById('profit');

  function publishCarOffer(event) {
    event.preventDefault();

    let makeText = makeInput.value;
    let modelText = modelInput.value;
    let yearText = productionYearInput.value;
    let fuelText = fuelTypeInput.value;
    let originalPriceText = originalCostInput.value;
    let sellPriceText = sellingPriceInput.value;

    if (
      Number(originalPriceText) < Number(sellPriceText) &&
      makeText != '' &&
      modelText != '' &&
      yearText != '' &&
      fuelText != '' &&
      originalPriceText != '' &&
      sellPriceText != ''
    ) {
      let trElement = el('tr', '', carsTable);
      trElement.classList.add('row');
      el('td', `${makeText}`, trElement);
      el('td', `${modelText}`, trElement);
      el('td', `${yearText}`, trElement);
      el('td', `${fuelText}`, trElement);
      el('td', `${originalPriceText}`, trElement);
      el('td', `${sellPriceText}`, trElement);

      let tdElement = el('td', '', trElement);

      let btnEdit = el('button', 'Edit', tdElement);
      btnEdit.classList.add('action-btn');
      btnEdit.classList.add('edit');

      btnEdit.addEventListener('click', editCar);
      function editCar(event) {
        event.preventDefault();
        carsTable.removeChild(trElement);

        makeInput.value = makeText;
        modelInput.value = modelText;
        productionYearInput.value = yearText;
        fuelTypeInput.value = fuelText;
        originalCostInput.value = originalPriceText;
        sellingPriceInput.value = sellPriceText;
      }

      let btnSell = el('button', 'Sell', tdElement);
      btnSell.classList.add('action-btn');
      btnSell.classList.add('sell');
      btnSell.addEventListener('click', sellCar);

      function sellCar(event) {
        event.preventDefault();
        carsTable.removeChild(trElement);

        let liElement = el('li', '', sellTable);
        let price = Number(sellPriceText) - Number(originalPriceText);
        liElement.classList.add('each-list');
        el('span', `${makeText} ${modelText}`, liElement);
        el('span', `${yearText}`, liElement);
        el('span', price, liElement);

        profit.textContent = (
          Number(profit.textContent) + Number(price)
        ).toFixed(2);
      }

      clearInputs();
    }
  }

  function clearInputs() {
    makeInput.value = '';
    modelInput.value = '';
    productionYearInput.value = '';
    fuelTypeInput.value = '';
    originalCostInput.value = '';
    sellingPriceInput.value = '';
  }

  function el(type, content, parent) {
    const element = document.createElement(type);
    element.textContent = content;
    if (parent) {
      parent.appendChild(element);
    }
    return element;
  }
}
