function matches(cd, artist, title) {
    return cd.artist == artist && cd.title == title;
}

function search(catalogue, artist, title) {
    return catalogue.find((cd) => matches(cd, artist, title));
}

module.exports = search;