module.exports = function(collection, options) {
  options = options || {};
  var pageStart = parseInt(options.start, 10) || 0;
  var pageLimit = parseInt(options.limit, 10) || 10;

  var start = pageStart * pageLimit;
  var stop = start + pageLimit;

  var getColKey = 'length' in collection ? function(index) { return index; } : function(index) { return Object.keys(collection)[index]; };
  var colLen = 'length' in collection ? collection.length : Object.keys(collection).length;

  var totalPages = Math.ceil(colLen / pageLimit);
  var items = [];

  for (var i=start; i < colLen && i < stop; i++) {
    var item = collection[getColKey(i)];
    // console.log('iterating', item);
    items.push(item);
  }

  var previous = pageStart - 1
    , next = pageStart + 1;

  if (next >= totalPages) {
    next = null;
  }

  if (previous < 1) {
    previous = null;
  }

  return {
      current: pageStart
    , previous: previous
    , next: next
    , total: totalPages
    , isMulti: totalPages > 1
    , items: items
  };
};
