const base58 = require('./crypto/external/base58');
import { hexStr2byteArray, sha256x2, byteArray2hexStr } from './crypto/utils';

const prefix = new Uint8Array([6, 161, 159]);

function decodeRaw(buffer: any) {
    const payload = buffer.slice(0, -4);
    const checksum = buffer.slice(-4);
    const newChecksum = hexStr2byteArray(
        sha256x2(byteArray2hexStr(payload))
    );

    if (checksum[0] ^ newChecksum[0] |
        checksum[1] ^ newChecksum[1] |
        checksum[2] ^ newChecksum[2] |
        checksum[3] ^ newChecksum[3])
        return;
    return payload;
}

export function isValidAddress(address: string) {
    try {
        const buffer = base58.decode(address);
        const payload = decodeRaw(buffer);
        if (!payload)
            return false;
        payload.slice(prefix.length);
        return true;
    } catch (e) {
        return false;
    }
}
