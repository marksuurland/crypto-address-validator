import { blake2b, toHex } from '../crypto/utils';
import * as baseX from 'base-x';

const ALLOWED_CHARS = '13456789abcdefghijkmnopqrstuwxyz';

const codec = baseX(ALLOWED_CHARS);
// https://github.com/nanocurrency/raiblocks/wiki/Accounts,-Keys,-Seeds,-and-Wallet-Identifiers
const regexp = new RegExp('^(xrb|nano)_([' + ALLOWED_CHARS + ']{60})$');

export function isValidAddress(address: string): boolean {
    if (regexp.test(address)) {
        return verifyChecksum(address);
    }
    return false;
}

export function verifyChecksum(address: string): boolean {
    const regexResult = regexp.exec(address);
    if (regexResult === null) {
        return false;
    } else {
        const bytes = codec.decode(regexResult[2]).slice(-37);
        // https://github.com/nanocurrency/raiblocks/blob/master/rai/lib/numbers.cpp#L73
        const computedChecksum = blake2b(toHex(bytes.slice(0, -5)), 5);
        const checksum = toHex(bytes.slice(-5).reverse());

        return computedChecksum === checksum;
    }
}
