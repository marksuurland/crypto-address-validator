import {blake2b} from '../crypto/utils';
var isEqual = require('lodash.isequal');

function hexToBytes(hex: string) {
  let bytes = []
  for (var c = 0; c < hex.length; c += 2) {
    bytes.push(parseInt(hex.substr(c, 2), 16))
  }
  return bytes
}

export function isValidAddress(address: string) {
  if (address.length !== 76) {
    // Check if it has the basic requirements of an address
    return false
  }

  // Otherwise check each case
  return verifyChecksum(address)
}

export function verifyChecksum(address: string) {
  const checksumBytes = address.slice(0, 32*2)
  const check = address.slice(32*2, 38*2)
  const blakeHash = blake2b(checksumBytes, 32).slice(0, 6*2)
  return !!isEqual(blakeHash, check)
}
