import * as BTCValidator from './bitcoin_validator';
import * as ETHValidator from './ethereum_validator';
import { Currency, Options } from './types/types';

export function isValidAddress(address: string, currency: Currency, opts: Options) {
    if (opts) {
        if (opts.chainType === 'erc20') {
            return ETHValidator.isValidAddress(address);
        } else if (opts.chainType === 'omni') {
            return BTCValidator.isValidAddress(address, currency, opts);
        }
    }
    return checkBothValidators(address, currency, opts);
}

function checkBothValidators(address: string, currency: Currency, opts: Options) {
    var result = BTCValidator.isValidAddress(address, currency, opts);
    return result ? result :
        ETHValidator.isValidAddress(address);
}