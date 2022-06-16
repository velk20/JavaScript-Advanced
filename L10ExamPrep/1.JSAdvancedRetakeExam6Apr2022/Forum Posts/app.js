window.addEventListener("load", solve);

function solve() {


    let publishedPosts = document.getElementById('published-list');
    let reviewList = document.getElementById('review-list');
    let publishBtn = document.getElementById('publish-btn')

    let title = document.getElementById('post-title');
    let category = document.getElementById('post-category');
    let content = document.getElementById('post-content');

    publishBtn.addEventListener('click', publish);

    document.getElementById('clear-btn').addEventListener('click', () => {
        while (publishedPosts.firstChild != null) {
            publishedPosts.removeChild(publishedPosts.firstChild).remove();
        }
    });

    function publish() {

        let titleText = title.value;
        let categoryText = category.value;
        let contentText = content.value;

        if (!title.value || !category.value || !content.value) {
            return
        }

        let li = el('li', '', reviewList);
        li.className = 'rpost';
        let article = el('article', '', li);
        let h4 = el('h4', `${titleText}`, article);
        let p = el('p', `Category: ${categoryText}`, article);
        let contentP = el('p', `Content: ${contentText}`, article);
        let editBtn = el('button', `Edit`, li);
        editBtn.className = 'action-btn edit';
        let appBtn = el('button', `Approve`, li);
        appBtn.className = 'action-btn approve';


        appBtn.addEventListener('click', (e) => {
            e.target.parentNode.remove();
            li.removeChild(editBtn);
            li.removeChild(appBtn);
            publishedPosts.appendChild(li);
        });

        editBtn.addEventListener('click', () => {
            reviewList.removeChild(li);
            title.value = titleText;
            category.value = categoryText;
            content.value = contentText;
        });

        title.value = '';
        category.value = '';
        content.value = '';
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
