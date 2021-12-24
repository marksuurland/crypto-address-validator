import { keccak256Checksum } from './crypto/utils';
const cnBase58 = require('./crypto/externals/cnBase58');

const DEFAULT_NETWORK_TYPE = 'prod'
const addressRegTest = new RegExp(
  '^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{95}$'
)
const integratedAddressRegTest = new RegExp(
  '^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{106}$'
)

function validateNetwork(decoded: string, currency: any, networkType: string, addressType: string) {
  let network = currency.addressTypes
  if (addressType === 'integrated') {
    network = currency.iAddressTypes
  }
  const at = parseInt(decoded.substr(0, 2), 16).toString()

  switch (networkType) {
    case 'prod':
      return network.prod.indexOf(at) >= 0
    case 'testnet':
      return network.testnet.indexOf(at) >= 0
    case 'stagenet':
      return network.stagenet.indexOf(at) >= 0
    case 'both':
      return network.prod.indexOf(at) >= 0 || network.testnet.indexOf(at) >= 0 || network.stagenet.indexOf(at) >= 0
    default:
      return false
  }
}

function hextobin(hex: string): Uint8Array | null {
  if (hex.length % 2 !== 0) return null;
  const res = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length / 2; ++i) {
    res[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16);
  }
  return res;
}


export function isValidAddress(address: any, currency: any, opts: any = {}) {
  const { networkType = DEFAULT_NETWORK_TYPE} = opts;
  let addressType = 'standard'
  if (!addressRegTest.test(address)) {
    if (integratedAddressRegTest.test(address)) {
      addressType = 'integrated'
    } else {
      return false
    }
  }

  const decodedAddrStr = cnBase58.decode(address)
  if (!decodedAddrStr) return false

  if (!validateNetwork(decodedAddrStr, currency, networkType, addressType)) return false

  const addrChecksum = decodedAddrStr.slice(-8)
  const hashChecksum = keccak256Checksum(hextobin(decodedAddrStr.slice(0, -8)))

  return addrChecksum === hashChecksum;
}
