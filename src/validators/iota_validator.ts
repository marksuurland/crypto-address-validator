var base32 = require('../crypto/externals/base32');
// var bech32 = require('../crypto/externals/bech32');
import { Currency, Options } from '../types/types';
import * as BIP173Validator from './bip173_validator';


export function isValidAddress(address: string, currency: Currency, opts: Options) {
    return BIP173Validator.isValidAddress(address, currency, opts);
}
