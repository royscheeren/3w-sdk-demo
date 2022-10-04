import { ChainOrRpc, ThirdwebSDK } from '@thirdweb-dev/sdk'
import { ethers } from 'ethers'

let ethProvider = null
let signer = null

if (typeof window !== "undefined") {
  console.log(window.ethereum)
  ethProvider = new ethers.providers.Web3Provider(window.ethereum)
  signer = ethProvider.getSigner()
} 

const chain = 'goerli'
export const sdk = ThirdwebSDK.fromSigner(signer, chain)

sdk
  .getSignatureDrop('0x3C9A5EeB4D7126D759B64B9129C23012CF802313')
  .then(response => response.getAll())
  // .then(response => response.getOwnedTokenIds('0x2768d5eEb9EdDA74ece88E02C971e59585651E45'))
  .then(console.log)
  .catch(console.log)
