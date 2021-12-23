import { sha256, hexStr2byteArray, byteArray2hexStr } from './crypto/utils';
const base58 = require('./crypto/externals/base58');

function decodeBase58Address(base58Sting: any) {
    if (typeof (base58Sting) !== 'string') {
        return false;
    }
    if (base58Sting.length <= 4) {
        return false;
    }

    try {
        var address = base58(base58Sting);
    } catch (e) {
        return false
    }

    /*if (base58Sting.length <= 4) {
        return false;
    }*/
    const len = address.length;
    const offset = len - 4;
    const checkSum = address.slice(offset);
    address = address.slice(0, offset);
    const hash0 = sha256(byteArray2hexStr(address));
    const hash1 = hexStr2byteArray(sha256(hash0));
    const checkSum1 = hash1.slice(0, 4);
    if (checkSum[0] === checkSum1[0] && checkSum[1] === checkSum1[1] && checkSum[2]
        === checkSum1[2] && checkSum[3] === checkSum1[3]
    ) {
        return address;
    }

    return false;
}

function getEnv(currency: any, networkType: any) {
    let evn = networkType || 'prod';

    if (evn !== 'prod' && evn !== 'testnet') evn = 'prod';

    return currency.addressTypes[evn][0]
}

export function isValidAddress(mainAddress: any, currency: any, opts: any) {
    const networkType = opts ? opts.networkType : '';
    const address = decodeBase58Address(mainAddress);

    if (!address) {
        return false;
    }

    if (address.length !== 21) {
        return false;
    }

    return getEnv(currency, networkType) === address[0];
}

