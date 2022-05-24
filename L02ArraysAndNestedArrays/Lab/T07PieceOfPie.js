    function solve(arr,str,end) {

        return arr.slice(arr.indexOf(str),arr.indexOf( end )+1);
    }



    console.log(solve(['Apple Crisp',
            'Mississippi Mud Pie',
            'Pot Pie',
            'Steak and Cheese Pie',
            'Butter Chicken Pie',
            'Smoked Fish Pie'],
        'Pot Pie',
        'Smoked Fish Pie'
    ));
