Package.describe({
  summary: "Provides an {{eachWithIndex}} helper for templates.",
  version: "1.0.0",
  git: "https://github.com/Gaelan/meteor-each-with-index.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.1.1');
  api.use('templating');
  api.use('handlebars');
  api.addFiles('gaelan:each-with-index.js');
  api.addFiles('gaelan:each-with-index.html')
});
