import {bigNumberToBuffer} from './crypto/utils';

function verifyAddress(address: string): boolean {
    const BUFFER_SIZE = 8;
    const bigNumber = address.substring(0, address.length - 1);
    const addressBuffer = bigNumberToBuffer(bigNumber, null);
    return Buffer.from(addressBuffer).slice(0, BUFFER_SIZE).equals(addressBuffer);
}

export function isValidAddress(address: string): boolean {
    const regexp = new RegExp('^[0-9]{1,20}L$');
    if (!regexp.test(address)) {
        return false;
    }
    return verifyAddress(address)
}
