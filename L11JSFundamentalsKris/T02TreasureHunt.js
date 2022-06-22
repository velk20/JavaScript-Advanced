function treasureHunt(chest) {
    let itemsArray = chest[0].split('|');

    for (let i = 1; i < chest.length; i++) {
        let bigShaize = chest[i].split(' ');

        if (bigShaize[0] == 'Yohoho!') {
            break;
        }

        if (bigShaize[0] === 'Loot') {
            for (let j = 1; j < bigShaize.length; j++) {
                if (!itemsArray.find(n => n === bigShaize[j])) {
                    itemsArray.unshift(bigShaize[j]);
                }
            }
        } else if (bigShaize[0] === 'Drop') {
            let index = Number(bigShaize[1]);
            let eatMyAss = itemsArray[index];
            if (eatMyAss) {
                itemsArray.splice(index, 1);
                itemsArray.push(eatMyAss);
            }

        } else if (bigShaize[0] === 'Steal') {
            let count = Number(bigShaize[1]);
            let stealedItems = [];

            if (itemsArray.length < count) {
                stealedItems.concat(itemsArray);
            } else {
                while (count > 0) {
                    stealedItems.push(itemsArray.pop());
                    count--;
                }
            }


            stealedItems.reverse();
            console.log(stealedItems.join(', '));
        }
    }

    if (itemsArray.length === 0) {
        console.log("Failed treasure hunt.");
    } else {
        let sum = itemsArray.reduce((sum, n) => sum + n.length, 0);
        console.log(`Average treasure gain: ${(sum / itemsArray.length).toFixed(2)} pirate credits.`)
    }


}

treasureHunt(["Gold|Silver|Bronze|Medallion|Cup", "Loot Wood Gold Coins",
    "Loot Silver Pistol", "Drop 3", "Steal 3", "Yohoho!"]);