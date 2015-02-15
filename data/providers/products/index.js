module.exports = function(provider) {
  for (var i=0; i < 3; i++) {
    provider.create(i, {
      global: [
        [ 'resource',   'someResource' ],
        [ 'title',      'Provider' + i ],
        [ 'route',      '/provider-' + i ],
        [ 'body',       new Date().toISOString() ],
      ]
    });
  }
};
