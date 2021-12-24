var baseX = require('base-x');
var crc = require('crc');
import {numberToHex, toHex} from './crypto/utils';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';

const base32 = baseX(ALPHABET);
const regexp = new RegExp('^[' + ALPHABET + ']{56}$');
const ed25519PublicKeyVersionByte = (6 << 3);

export function isValidAddress(address: string) {
    if (regexp.test(address)) {
        return verifyChecksum(address);
    }

    return false;
}

function swap16(n: number) {
    const lower = n & 0xFF;
    const upper = (n >> 8) & 0xFF;
    return (lower << 8) | upper;
}

function verifyChecksum(address: string) {
    // based on https://github.com/stellar/js-stellar-base/blob/master/src/strkey.js#L126
    const bytes = base32.decode(address);
    if (bytes[0] !== ed25519PublicKeyVersionByte) {
        return false;
    }

    const computedChecksum = numberToHex(swap16(crc.crc16xmodem(bytes.slice(0, -2))), 4);
    const checksum = toHex(bytes.slice(-2));

    return computedChecksum === checksum
}
