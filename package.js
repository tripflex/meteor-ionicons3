Package.describe({
  name: 'tripflex:ionicons3',
  summary: 'Ionic icons 3 with offline support ',
  version: '3.0.0',
  git: 'https://github.com/tripflex/meteor-ionicons3.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {

    api.addFiles([
        'css/ionicons.css'
    ], 'client' );

    api.addAssets([
        'fonts/ionicons.eot',
        'fonts/ionicons.svg',
        'fonts/ionicons.ttf',
        'fonts/ionicons.woff',
        'fonts/ionicons.woff2'
    ], 'client');
});
