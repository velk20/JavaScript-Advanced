function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {
        const regex = /"(.+?)"/g;
        let text = document.querySelector('#inputs textarea').value.slice(1, -1).match(regex).map(e => e.slice(1, -1));
        let restaurants = {};

        for (const textElement of text) {
            const [restaurantName, workers] = textElement.split(' - ');
            const employees = workers.split(', ');
            for (const employee of employees) {
                const [nameWorker, salary] = employee.split(', ');
                console.log(nameWorker, salary)
                if (!restaurants[restaurantName]) {
                    restaurants[restaurantName] = {
                        name: nameWorker,
                        salary: salary
                    }
                } else {

                }
            }
        }

        console.log(restaurants);


    }
}