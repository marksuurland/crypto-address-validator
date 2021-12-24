import {toHex, keccak256Checksum} from './crypto/utils';
const base32 = require('./crypto/externals/base32');

export function isValidAddress(_address: string): boolean {
    const address = _address.toString().toUpperCase().replace(/-/g, '');
    if (!address || address.length !== 40) {
        return false;
    }
    const decoded = toHex(base32.b32decode(address));
    const stepThreeChecksum = keccak256Checksum(Buffer.from(decoded.slice(0, 42), 'hex'));

    return stepThreeChecksum === decoded.slice(42);
}
