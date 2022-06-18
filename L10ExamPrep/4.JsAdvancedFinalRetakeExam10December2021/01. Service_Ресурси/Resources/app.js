window.addEventListener('load', solve);

function solve() {
  let productType = document.getElementById('type-product');
  let description = document.getElementById('description');
  let clientName = document.getElementById('client-name');
  let clientPhone = document.getElementById('client-phone');
  productType.pare;

  let receivedOrders = document.getElementById('received-orders');
  let completedOrders = document.getElementById('completed-orders');
  let clearBtn = document.querySelector('#completed-orders button');
  clearBtn.addEventListener('click', (event) => {
    let divs = Array.from(
      document.querySelectorAll('#completed-orders .container')
    );
    divs.forEach((element) => {
      event.currentTarget.parentElement.removeChild(element);
    });
  });

  let sendForm = document.querySelector('#right form button');
  sendForm.addEventListener('click', sendFormFunction);

  function sendFormFunction(event) {
    event.preventDefault();

    let product = productType.value;
    let desc = description.value;
    let name = clientName.value;
    let phone = clientPhone.value;

    if (desc != '' && name != '' && phone != '') {
      let divElement = document.createElement('div');
      divElement.classList.add('container');

      let h2Element = document.createElement('h2');
      h2Element.textContent = `Product type for repair: ${product}`;

      let h3Element = document.createElement('h3');
      h3Element.textContent = `Client information: ${name}, ${phone}`;

      let h4Element = document.createElement('h4');
      h4Element.textContent = `Description of the problem: ${desc}`;

      let btnStart = document.createElement('button');
      btnStart.addEventListener('click', () => {
        btnStart.disabled = true;
        btnFinish.disabled = false;
      });
      btnStart.classList.add('start-btn');
      btnStart.textContent = 'Start repair';

      let btnFinish = document.createElement('button');
      btnFinish.addEventListener('click', () => {
        let newDivElement = document.createElement('div');
        newDivElement.classList.add('container');

        let h2Element = document.createElement('h2');
        h2Element.textContent = `Product type for repair: ${product}`;

        let h3Element = document.createElement('h3');
        h3Element.textContent = `Client information: ${name}, ${phone}`;

        let h4Element = document.createElement('h4');
        h4Element.textContent = `Description of the problem: ${desc}`;

        newDivElement.appendChild(h2Element);
        newDivElement.appendChild(h3Element);
        newDivElement.appendChild(h4Element);

        receivedOrders.removeChild(divElement);
        completedOrders.appendChild(newDivElement);
      });
      btnFinish.classList.add('finish-btn');
      btnFinish.textContent = 'Finish repair';
      btnFinish.disabled = true;

      divElement.appendChild(h2Element);
      divElement.appendChild(h3Element);
      divElement.appendChild(h4Element);
      divElement.appendChild(btnStart);
      divElement.appendChild(btnFinish);

      receivedOrders.appendChild(divElement);

      description.value = '';
      clientName.value = '';
      clientPhone.value = '';
    }
  }
}
