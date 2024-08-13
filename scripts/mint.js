const AFNinjaToken = artifacts.require("AFNinjaToken");

module.exports = async callback => {
  const instance = await AFNinjaToken.deployed();
  console.log('Minting on contract:', instance.address);
  //const tx = await instance.mint(ADDRESS, TOKEN_ID , METADATA_URI);
  const tx = await instance.mint(RECEPIENT_ADDRESS, TOKEN_ID , "ipfs://QmXGUrktc4tWwV31Zqwaj9XvP3QpJyUw3Fs9A2gGjJ87at");

  callback(tx.tx);
}