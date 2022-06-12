const {bookSelection} = require('./bookSelection');
const {expect} = require('chai');

describe("Tests bookSelection", () => {
    describe("isGenreSuitable", () => {
        it("unsuatable", () => {
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.be
                .equal(`Books with Thriller genre are not suitable for kids at 12 age`);
            expect(bookSelection.isGenreSuitable('Horror', 12)).to.be
                .equal(`Books with Horror genre are not suitable for kids at 12 age`)
            expect(bookSelection.isGenreSuitable('Thriller', -1)).to.be
                .equal(`Books with Thriller genre are not suitable for kids at -1 age`)
        });

        it("suatable", () => {
            expect(bookSelection.isGenreSuitable('Hello', 12)).to.be
                .equal(`Those books are suitable`);
            expect(bookSelection.isGenreSuitable('Comics', 12)).to.be
                .equal(`Those books are suitable`)
            expect(bookSelection.isGenreSuitable('TreeHold', -1)).to.be
                .equal(`Those books are suitable`)
        });
    });

    describe('isItAffordable', () => {
        it("unsuatable", () => {
            expect(bookSelection.isItAffordable(15, 5)).to.be.equal("You don't have enough money");
            expect(bookSelection.isItAffordable(1, 0)).to.be.equal("You don't have enough money");
            expect(bookSelection.isItAffordable(2, 1)).to.be.equal("You don't have enough money");
        });

        it("suatable", () => {
            expect(bookSelection.isItAffordable(5, 15)).to.be.equal(`Book bought. You have ${15 - 5}$ left`);
            expect(bookSelection.isItAffordable(1, 2)).to.be.equal(`Book bought. You have ${2 - 1}$ left`);
            expect(bookSelection.isItAffordable(0, 2)).to.be.equal(`Book bought. You have ${2 - 0}$ left`);
            expect(bookSelection.isItAffordable(2.5, 5)).to.be.equal(`Book bought. You have ${5 - 2.5}$ left`);
            expect(bookSelection.isItAffordable(12.21, 22.32)).to.be.equal(`Book bought. You have ${22.32 - 12.21}$ left`);
        });


        it('exceptions expected', () => {
            expect(() => bookSelection.isItAffordable(undefined, 2)).to.throw("Invalid input");
            expect(() => bookSelection.isItAffordable(undefined, undefined)).to.throw("Invalid input");
            expect(() => bookSelection.isItAffordable(2, undefined)).to.throw("Invalid input");
            expect(() => bookSelection.isItAffordable([], {})).to.throw("Invalid input");
            expect(() => bookSelection.isItAffordable({}, [])).to.throw("Invalid input");
            expect(() => bookSelection.isItAffordable(null, null)).to.throw("Invalid input");
        })

    })

    describe("suitableTitles", () => {
        it("suatable", () => {
            expect(bookSelection.suitableTitles([{title: "H", genre: "H"}], 'H')).to.be.length(1);
            expect(bookSelection.suitableTitles([{title: "H", genre: "H"}, {
                title: "H",
                genre: "H"
            }], 'H')).to.be.length(2);
            expect(bookSelection.suitableTitles([{title: "H", genre: "H"}, {
                title: "H",
                genre: "H"
            }, {
                title: "H",
                genre: "H"
            }, {
                title: "H",
                genre: "H"
            }], 'H')).to.be.length(4);


        });


        it('exceptions expected', () => {
            expect(() => bookSelection.suitableTitles(undefined, 2)).to.throw("Invalid input");
            expect(() => bookSelection.suitableTitles(undefined, undefined)).to.throw("Invalid input");
            expect(() => bookSelection.suitableTitles(2, undefined)).to.throw("Invalid input");
            expect(() => bookSelection.suitableTitles([], {})).to.throw("Invalid input");
            expect(() => bookSelection.suitableTitles({}, [])).to.throw("Invalid input");
            expect(() => bookSelection.suitableTitles(null, null)).to.throw("Invalid input");
        })
    });


});
