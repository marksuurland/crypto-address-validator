const baseX = require('base-x');
import { sha256Checksum, toHex } from '../crypto/utils';

const ALLOWED_CHARS = 'rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz';

const codec = baseX(ALLOWED_CHARS);
const regexp = new RegExp('^r[' + ALLOWED_CHARS + ']{27,35}$');

export function isValidAddress(address: string) {
    if (regexp.test(address)) {
        return verifyChecksum(address);
    }
    return false;
}

function verifyChecksum(address: string) {
    const bytes = codec.decode(address);
    const computedChecksum = sha256Checksum(toHex(bytes.slice(0, -4)));
    const checksum = toHex(bytes.slice(-4));

    return computedChecksum === checksum
}
