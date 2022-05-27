function solve(name,population,treasury) {
    return {
        name,
        population,
        treasury,
        taxRate :10,
        collectTaxes(){
            this.treasury+= this.population*this.taxRate|0;
        },

        applyGrowth(per){
            this.population += per / 100 *  this.population |0;
        },

        applyRecession(percentage){
            this.treasury -= percentage / 100 *  this.treasury |0;

        }
    }
}



const city =
    solve('Tortuga',
        7000,
        15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);



