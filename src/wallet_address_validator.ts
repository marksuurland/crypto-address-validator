import { getAll, getByNameOrSymbol } from './currencies';
import { Options } from './types/types';

const DEFAULT_CURRENCY_NAME = 'bitcoin';

export function validate(address: string, currencyNameOrSymbol: string, opts: Options) {
    var currency = getByNameOrSymbol(currencyNameOrSymbol || DEFAULT_CURRENCY_NAME);

    if (currency && currency.validator) {
        // if (opts && typeof opts === 'string') {
        //     return currency.validator.isValidAddress(address, currency, { networkType: Options });
        // }
        return currency.validator(address, currency, opts);
    }

    throw new Error('Missing validator for currency: ' + currencyNameOrSymbol);
}
    
export function getCurrencies() {
    return getAll();
}

export function findCurrency(symbol: string) {
    return getByNameOrSymbol(symbol) || null ;
}
