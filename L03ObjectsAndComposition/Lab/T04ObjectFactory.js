function factory(lib, arr) {
    let result = [];
    for (const arrElement of arr) {
        let obj = Object.assign({}, arrElement.template);
        for (let part of arrElement.parts) {
            obj[part] = lib[part];
        }

        result.push(obj);
    }

    return result;

}

const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};
const orders = [
    {
        template: { name: 'ACME Printer'},
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner'},
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier'},
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo'},
        parts: ['play']
    }
];
const products = factory(library, orders);
console.log(products);
