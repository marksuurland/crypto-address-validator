import { Currency, Options } from "./types/types";
const base58 = require('./crypto/externals/base58');

// simple base58 validator.  Just checks if it can be decoded.

export function isValidAddress(address: string, currency: Currency, opts: Options) {
    try {
        if (!address || address.length == 0) {
            return false;
        }

        if (currency.minLength && (address.length < currency.minLength)) {
            return false;
        }

        if (currency.maxLength && (address.length > currency.maxLength)) {
            return false;
        }
        try {
            const decoded = base58.decode(address);
            if (!decoded || !decoded.length) {
                return false;
            }
        } catch (e) {
            // if decoding fails, assume invalid address
            return false;
        }
        return true;
    } catch (e) {
        return false;
    }
}
