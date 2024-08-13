const AFNinjaToken = artifacts.require("../contracts/tokens/AFNinjaToken.sol");

module.exports = function (deployer) {
  deployer.deploy(AFNinjaToken);
};
