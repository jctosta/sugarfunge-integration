const Wrapped1155Factory = artifacts.require("Wrapped1155Factory.sol");
const SugarFungeAsset = artifacts.require("SugarFungeAsset.sol");

module.exports = function (deployer) {
  deployer.deploy(Wrapped1155Factory);
  deployer.deploy(SugarFungeAsset);
};
