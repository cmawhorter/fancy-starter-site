var http = require('http');

function getRandomWebsite(callback) {
  http.get('http://www.randomwebsite.com/cgi-bin/random.pl', function(res) {
    if (res.statusCode === 302) {
      callback(null, res.headers.location);
    }
    else {
      callback(new Error('Status code incorrect: ' + res.statusCode));
    }
  }).on('error', function(err) {
    callback(err);
  });
}

function buildHtml(links, target) {
  return links.map(function(element) {
    var html = '<a href=';
    html += '"' + element + '"';
    if (target) {
      html += ' target="' + target + '"';
    }
    html += '>Random website</a>';
    return html;
  }).join('<br>');
}

module.exports = function($el, callback) {
  var num = $el.attr('data-links') || 1
    , target = $el.attr('data-target')
    , retrieve = [];
  for (var i=0; i < num; i++) {
    getRandomWebsite(function(err, website) {
      if (err) return callback(err);
      retrieve.push(website);
      if (retrieve.length >= num) {
        var html = buildHtml(retrieve, target);
        // returning html string replaces outer html
        callback(null, '<p>' + html + '</p>');
        // // or replace inner html to leave <fancy-*> tag
        // $el.html(html);
      }
    });
  }
};
