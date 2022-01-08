import { ethers } from "ethers";
import { HeraCollection } from "../../typechain-types/HeraCollection";
import { Marketplace } from "../../typechain-types/Marketplace";
import { marketAddress, nftAddress } from "../../config";
import NFT from "../../artifacts/contracts/HeraCollection.sol/HeraCollection.json";
import Market from "../../artifacts/contracts/Marketplace.sol/Marketplace.json";

export const rpcProvider =
  process.env.NODE_ENV == "production"
    ? new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_ROPSTEN_URL)
    : new ethers.providers.JsonRpcProvider();

export function getMarketContract(signer?: any) {
  let provider = rpcProvider;
  if (signer) {
    provider = signer;
  }
  return new ethers.Contract(marketAddress, Market.abi, provider) as Marketplace;
}

export function getTokenContract(signer?: any) {
  let provider = rpcProvider;
  if (signer) {
    provider = signer;
  }
  return new ethers.Contract(nftAddress, NFT.abi, provider) as HeraCollection;
}