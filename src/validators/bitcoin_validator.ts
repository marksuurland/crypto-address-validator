import { Currency, Options } from "../types/types";

var base58 = require('../crypto/externals/base58');
var segwit = require('../crypto/externals/segwit_addr');
import * as cryptoUtils from '../crypto/utils';

var DEFAULT_NETWORK_TYPE = 'prod';

function getDecoded(address: string) {
    try {
        return base58.decode(address);
    } catch (e) {
        // if decoding fails, assume invalid address
        return null;
    }
}

function getChecksum(hashFunction: string, payload: string) {
    // Each currency may implement different hashing algorithm
    switch (hashFunction) {
        // blake then keccak hash chain
        case 'blake256keccak256':
            var blake = cryptoUtils.blake2b256(payload);
            return cryptoUtils.keccak256Checksum(Buffer.from(blake, 'hex'));
        case 'blake256':
            return cryptoUtils.blake256Checksum(payload);
        case 'keccak256':
            return cryptoUtils.keccak256Checksum(payload);
        case 'sha256':
        default:
            return cryptoUtils.sha256Checksum(payload);
    }
}

function getAddressType(address: string, currency: Currency): any {
    // should be 25 bytes per btc address spec and 26 decred
    var expectedLength = currency.expectedLength || 25;
    var hashFunction = currency.hashFunction || 'sha256';
    var decoded = getDecoded(address);

    if (decoded) {
        var length = decoded.length;

        if (length !== expectedLength) {
            return null;
        }

        var checksum = cryptoUtils.toHex(decoded.slice(length - 4, length)),
            body = cryptoUtils.toHex(decoded.slice(0, length - 4)),
            goodChecksum = getChecksum(hashFunction, body);

        return checksum === goodChecksum ? cryptoUtils.toHex(decoded.slice(0, expectedLength - 24)) : null;
    }

    return null;
}

function isValidP2PKHandP2SHAddress(address: string, currency: Currency, opts: Options): boolean {
    const networkType = opts ? opts.networkType : DEFAULT_NETWORK_TYPE;

    let correctAddressTypes: string[];
    const addressType = getAddressType(address, currency);

    if (addressType) {
        if (networkType === 'prod' || networkType === 'testnet') {
            correctAddressTypes = currency.addressTypes![networkType];
        } else if (currency.addressTypes) {
            correctAddressTypes = currency.addressTypes.prod.concat(currency.addressTypes.testnet);
        } else {
            return false;
        }

        return correctAddressTypes.indexOf(addressType) >= 0;
    }

    return false;
}

export function isValidAddress(address: string, currency: Currency, opts: Options): boolean {
    return isValidP2PKHandP2SHAddress(address, currency, opts) || segwit.isValidAddress(address, currency, opts);
}

