window.addEventListener("load", solve);

function solve() {
    let publishBtn = document.getElementById('publish-btn');
    let reviewList = document.getElementById('review-list');
    let publishedList = document.getElementById('published-list');

    let clearBtn = document.getElementById('clear-btn');
    clearBtn.addEventListener('click', () => {
        publishedList.innerHTML = '';

    })


    let postForReviews = [];

    publishBtn.addEventListener('click', () => {
        let title = document.getElementById('post-title');
        let category = document.getElementById('post-category');
        let content = document.getElementById('post-content');

        if (title.value !== '' && category.value !== '' && content.value !== '') {
            let liElement = document.createElement('li');
            liElement.classList.add('rpost');

            // * article
            let articleElement = document.createElement('article');
            let h4El = document.createElement('h4');
            h4El.textContent = title.value;

            let pEl1 = document.createElement('p');
            pEl1.textContent = `Category: ${category.value}`;

            let pEl2 = document.createElement('p');
            pEl2.textContent = `Content: ${content.value}`;

            articleElement.appendChild(h4El);
            articleElement.appendChild(pEl1);
            articleElement.appendChild(pEl2);

            liElement.appendChild(articleElement);

            let btnEdit = document.createElement('button');
            btnEdit.classList.add('action-btn');
            btnEdit.classList.add('edit');
            btnEdit.textContent = 'Edit'
            btnEdit.addEventListener('click', edit);

            function edit(event) {
                let liElementForEdit = event.currentTarget.parentElement;
                let currentArticle = liElementForEdit.querySelector('article');

                let titleCurrent = currentArticle.querySelector('h4').textContent;
                let [categoryCurrent, contentCurrent] = currentArticle.querySelectorAll('p');

                reviewList.removeChild(liElementForEdit)

                title.value = titleCurrent;
                category.value = categoryCurrent.textContent;
                content.value = contentCurrent.textContent;
            }


            let btnApprove = document.createElement('button');
            btnApprove.classList.add('action-btn');
            btnApprove.classList.add('approve');
            btnApprove.textContent = 'Approve';
            btnApprove.addEventListener('click', approve);

            function approve(event) {
                let liElementForEdit = event.currentTarget.parentElement;
                reviewList.removeChild(liElementForEdit)

                let btns = liElementForEdit.querySelectorAll('button');
                liElementForEdit.removeChild(btns[0]);
                liElementForEdit.removeChild(btns[1]);

                publishedList.appendChild(liElementForEdit);

            }

            liElement.appendChild(btnEdit);
            liElement.appendChild(btnApprove);

            reviewList.appendChild(liElement);

            postForReviews.push(liElement);

            title.value = '';
            content.value = '';
            category.value = '';
        }
    });

}
