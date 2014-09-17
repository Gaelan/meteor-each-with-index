Template.eachWithIndex.indexify = function indexify(array) {
    return _.map(array, function(item, index) {
        if (item.index != undefined) {
            throw "You can't use eachWithIndex on objects with an index attribute."
        }
        item.index = index;
        return item;
    })
}
