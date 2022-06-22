function solve() {
  // all lists
  let listOfMails = document.getElementById('list');
  let sentList = document.querySelector('.sent-list');
  let deleteList = document.querySelector('.delete-list');

  //form inputs
  let recipient = document.getElementById('recipientName');
  let title = document.getElementById('title');
  let message = document.getElementById('message');

  let addToList = document.getElementById('add');
  addToList.addEventListener('click', addToListFunc);

  function addToListFunc(e) {
    e.preventDefault();

    let recipientText = recipient.value;
    let tileText = title.value;
    let messageText = message.value;

    if (recipient.value != '' && title.value != '' && message.value != '') {
      let liElement = el('li', '', listOfMails);
      let titleElement = el('h4', `Title: ${title.value}`, liElement);
      let recipientElement = el(
        'h4',
        `Recipient Name: ${recipient.value}`,
        liElement
      );
      let messageElement = el('span', `${message.value}`, liElement);

      let divElementWithButtons = el('div', '', liElement);
      divElementWithButtons.id = 'list-action';

      let btnSend = el('button', 'Send', divElementWithButtons);
      btnSend.type = 'submit';
      btnSend.id = 'send';
      btnSend.addEventListener('click', sendMails);

      function sendMails(event) {
        event.preventDefault();
        listOfMails.removeChild(liElement);

        let mailLiElement = el('li', '', sentList);
        let spanToElement = el('span', `To: ${recipientText}`, mailLiElement);
        let spanTitleElement = el('span', `Title: ${tileText}`, mailLiElement);

        let divBtn = el('div', '', mailLiElement);
        divBtn.classList.add('btn');

        let btnDeleteFromSentMails = el('button', 'Delete', divBtn);
        btnDeleteFromSentMails.type = 'submit';
        btnDeleteFromSentMails.classList.add('delete');
        btnDeleteFromSentMails.addEventListener('click', deleteMails);
      }

      let btnDelete = el('button', 'Delete', divElementWithButtons);
      btnDelete.type = 'submit';
      btnDelete.id = 'delete';
      btnDelete.addEventListener('click', deleteMails);
      function deleteMails(event) {
        event.preventDefault();

        let divs = event.currentTarget.parentElement;
        divs.parentElement.remove(liElement);

        liElement.textContent = '';
        let deleteLiSpanTo = el('span', `To: ${recipientText}`, liElement);
        let deleteLiSpanTitle = el('span', `Title: ${tileText}`, liElement);

        deleteList.appendChild(liElement);
      }

      resetInputs();
    }
  }

  let resetForm = document.getElementById('reset');
  resetForm.addEventListener('click', (e) => {
    e.preventDefault();
    resetInputs();
  });

  function resetInputs() {
    recipient.value = '';
    title.value = '';
    message.value = '';
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
solve();
