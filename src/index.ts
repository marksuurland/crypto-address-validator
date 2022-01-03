import { getAll, getByNameOrSymbol } from './currencies';
import { Options } from './types/types';

export function validate(address: string, currencyNameOrSymbol: string, opts: Options) {
    var currency = getByNameOrSymbol(currencyNameOrSymbol);

    if (currency && currency.validator) {
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
