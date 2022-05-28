function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const searchWord = document.getElementById('searchField').value;
      document.getElementById('searchField').value = '';


      const items = Array.from(document.querySelectorAll('tbody tr'));
      items.map(e => e.classList.remove('select'));

      console.log(items);
      for (const item of items) {
         let [...arr] = Array.from(item.children);
         for (const element of arr) {
            if (element.textContent.includes(searchWord)) {
               item.classList.add("select");
            }
         }
      }



   }
}