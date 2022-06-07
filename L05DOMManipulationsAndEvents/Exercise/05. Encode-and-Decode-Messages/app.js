function encodeAndDecodeMessages() {
    /*
     document.getElementById('main').addEventListener('click', onClick);
    const text = document.getElementsByTagName('textarea');

    function onClick(e) {
        if (e.target.tagName == 'BUTTON') {
            if (e.target.textContent.includes('Encode')) {
                const message = [...text[0].value].map(l => String.fromCharCode(l.charCodeAt(0) + 1));
                text[0].value = '';
                text[1].value = message.join('');

            } else if (e.target.textContent.includes('Decode')) {
                const message = [...text[1].value].map(l => String.fromCharCode(l.charCodeAt(0) - 1));
                text[1].value = message.join('');
            }
        }
    }*/

    const mainElement = document.querySelectorAll('#main');
    Array.from(mainElement).forEach(e => e.addEventListener('click', decodeAndEncode));
    const text = document.getElementsByTagName('textarea');


    function decodeAndEncode(event) {
        const button = event.target;
        if (button.tagName === 'BUTTON') {

            if (button.textContent === 'Encode and send it') {


                let currentText = text[0].value;
                let encodedText = '';
                for (let i = 0; i < currentText.length; i++) {
                    encodedText += String.fromCharCode(currentText.charCodeAt(i) + 1);
                }
                text[0].value = '';
                text[1].textContent = encodedText;
            } else {
                const textAreaElement = button.parentElement.querySelector('textarea');
                let text = textAreaElement.value;
                let encodedText = '';
                for (let i = 0; i < text.length; i++) {
                    encodedText += String.fromCharCode(text.charCodeAt(i) - 1);
                }
                textAreaElement.value = encodedText;
            }
        }

    }
}