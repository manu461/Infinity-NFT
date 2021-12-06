const infinityNft = artifacts.require('InfinityNft');

module.exports = function (deployer) {
  deployer.deploy(infinityNft);
};
