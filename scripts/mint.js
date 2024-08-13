const AFNinjaToken = artifacts.require("AFNinjaToken");

module.exports = async callback => {
  const instance = await AFNinjaToken.deployed();
  console.log('Minting on contract:', instance.address);
  //const tx = await instance.mint(ADDRESS, TOKEN_ID , "ipfs://QmaSj7kQ9BcSMpzkh8mWfw9nZX7jG9dTDNTUb2SyMBv3Tv");
  callback(tx.tx);
}