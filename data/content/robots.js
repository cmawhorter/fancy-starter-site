var robotstxt = {
  development: 'User-agent: *\nDisallow: /',
  production: 'User-agent: *\nDisallow:'
};

Properties.append('route', '/robots.txt');
Properties.append('contentType', 'text/plain');
Properties.append('body', robotstxt[Env.NODE_ENV] || robotstxt['production']);
