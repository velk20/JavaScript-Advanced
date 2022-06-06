function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {
        let text = JSON.parse(document.querySelector('#inputs textarea').value);
        let avgSalary = 0;
        let totalSalary = 0;
        let currAvgSalary = 0;
        let bestName = '';
        let output = {};
        for (const textElement of text) {
            let restaurantInfo = textElement.split(' - ');
            let restaurantName = restaurantInfo.shift();

        }
    }
}