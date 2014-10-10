Package.describe({
  summary: "Bro, do you even?",
  version: "0.0.2",
  git: "https://github.com/fazo96/meteor-brototype"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3.1');
  api.addFiles('brototype.js');
  api.export('Bro','server');
  api.export('Bro','client');
});
