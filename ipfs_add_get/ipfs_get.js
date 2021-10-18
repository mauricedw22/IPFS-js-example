const IPFS = require('ipfs');
const all = require('it-all');

(async () => {
  const node = await IPFS.create();

  const cid = 'QmaFZwobsKcvhmLeKcxXvQyKoohkYyV5T2Ahb7kadExf23';

  const data = Buffer.concat(await all(node.cat(cid)));

  console.log(data.toString());
})();
