const { ethers } = require("ethers");
const bridgeABI = require("../../out/Bridge.json");
const sugarFungeAssetABI = require("../../crates/truffle/build/contracts/SugarFungeAsset.json");

const main = async () => {

    const provider = new ethers.providers.JsonRpcProvider("http://0.0.0.0:8545");
    const signer = provider.getSigner();

    const blockNumber = await provider.getBlockNumber();

    console.log(blockNumber);

    const signerAddress = await signer.getAddress()
    // console.log(signerAddress)
    //
    const bridgeContractFactory = ethers.ContractFactory.fromSolidity(bridgeABI, signer);

    const bridgeContract = bridgeContractFactory.attach("0x62877dDCd49aD22f5eDfc6ac108e9a4b5D2bD88B");

    // console.log(bridgeContract.address)
    //
    const erc1155HandlerAddr = "0x2B6Ab4b880A45a07d83Cf4d664Df4Ab85705Bc07";
    const genericResourceId = "0x000000000000000000000000000000f44be64d2de895454c3467021928e55e01";
    // const MINTER_ROLE = "0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6";
    //
    const sugarFungeAssetAddr = "0x84b141Aada70e2B0C3Ec25d24E81032328ea1b1A";
    const sugarFungeAssetContractFactory = ethers.ContractFactory.fromSolidity(sugarFungeAssetABI, signer);
    const sugarFungeAsset = sugarFungeAssetContractFactory.attach(sugarFungeAssetAddr);

    const minterRole = await sugarFungeAsset.MINTER_ROLE()
    console.log(minterRole);

    const result = await sugarFungeAsset.hasRole(minterRole, signerAddress)
    console.log(result)

    const defaultAdminRole = await bridgeContract.DEFAULT_ADMIN_ROLE()
    console.log(defaultAdminRole);

    const rs = await bridgeContract.hasRole(defaultAdminRole, signerAddress)
    console.log(rs)

    const tx = await sugarFungeAsset.mint(signerAddress, 0, 1, 0x0)
    console.log(tx.hash)
    const txResult = await tx.wait();
    console.log(txResult);
    //
    // console.log(sugarFungeAsset.address)
    // //
    // try {
    //     await bridgeContract.adminSetResource(erc1155HandlerAddr, genericResourceId, sugarFungeAssetAddr);
    // } catch (err) {
    //     console.error(err);
    // }
    // try {
    //     await bridgeContract.adminSetBurnable(erc1155HandlerAddr, sugarFungeAssetAddr);
    // } catch (err) {
    //     console.error(err);
    // }
    // try {
    //     await sugarFungeAsset.grantRole(MINTER_ROLE, erc1155HandlerAddr);
    // } catch (err) {
    //     console.error(err);
    // }
}

main();