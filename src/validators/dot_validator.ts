import { byteArray2hexStr, blake2b } from '../crypto/utils';
import { Currency, Options } from '../types/types';
const base58 = require('../crypto/externals/base58');

// from https://github.com/paritytech/substrate/wiki/External-Address-Format-(SS58)
const addressFormats = [
    { addressLength: 3, accountIndexLength: 1, checkSumLength: 1 },
    { addressLength: 4, accountIndexLength: 2, checkSumLength: 1 },
    { addressLength: 5, accountIndexLength: 2, checkSumLength: 2 },
    { addressLength: 6, accountIndexLength: 4, checkSumLength: 1 },
    { addressLength: 7, accountIndexLength: 4, checkSumLength: 2 },
    { addressLength: 8, accountIndexLength: 4, checkSumLength: 3 },
    { addressLength: 9, accountIndexLength: 4, checkSumLength: 4 },
    { addressLength: 10, accountIndexLength: 8, checkSumLength: 1 },
    { addressLength: 11, accountIndexLength: 8, checkSumLength: 2 },
    { addressLength: 12, accountIndexLength: 8, checkSumLength: 3 },
    { addressLength: 13, accountIndexLength: 8, checkSumLength: 4 },
    { addressLength: 14, accountIndexLength: 8, checkSumLength: 5 },
    { addressLength: 15, accountIndexLength: 8, checkSumLength: 6 },
    { addressLength: 16, accountIndexLength: 8, checkSumLength: 7 },
    { addressLength: 17, accountIndexLength: 8, checkSumLength: 8 },
    { addressLength: 34, accountIndexLength: 32, checkSumLength: 2 },
];


export function isValidAddress(address: string, currency: Currency, opts: Options): boolean {
    return verifyChecksum(address)
}

function verifyChecksum(address: string): boolean {
    try {
        const preImage = '53533538505245';

        const decoded = base58.decode(address);
        const addressType = byteArray2hexStr(decoded.slice(0, 1));
        const addressAndChecksum = decoded.slice(1);

        // get the address format
        const addressFormat = addressFormats.find(af => af.addressLength === addressAndChecksum.length);

        if (!addressFormat) {
            throw new Error('Invalid address length');
        }

        const decodedAddress = byteArray2hexStr(addressAndChecksum.slice(0, addressFormat.accountIndexLength));
        const checksum = byteArray2hexStr(addressAndChecksum.slice(-addressFormat.checkSumLength));

        const calculatedHash = blake2b(preImage + addressType + decodedAddress, 64)
            .substr(0, addressFormat.checkSumLength * 2)
            .toUpperCase();

        return calculatedHash == checksum;
    } catch(err) {
        return false;
    }
}

