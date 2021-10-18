const IPFS = require('ipfs');

(async () => {
  const node = await IPFS.create();

  const data = 'Wasup, MDog!';

  const cid = await node.add(data);

  console.log(cid.path);
})();
