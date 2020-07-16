const assert = require('assert');
const search = require('../search');

describe("Search for a CD", () => {
    it("finds a match", () => {
        const artist = "Peter Gabriel";
        const title = "So";
        const cd = {artist: artist, title: title};
        const catalogue = [cd];
        assert.deepEqual(search(catalogue, artist, title), cd);
    });

    it("finds no match", () => {
        const artist = "Peter Gabriel";
        const title = "So";
        const cd = {artist: artist, title: title};
        const catalogue = [cd];
        assert.equal(search(catalogue, "Kate Bush", "Lionheart"), null);
    });

})