const sharp = require('sharp');
sharp('logo.webp')
  .stats()
  .then(stats => {
    console.log("Channels:", stats.channels);
  })
  .catch(err => {
    console.error(err);
  });
