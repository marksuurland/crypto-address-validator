var currencies = require('./currencies');

var DEFAULT_CURRENCY_NAME = 'bitcoin';

export function validate(address: string, currencyNameOrSymbol: string, opts: string) {
    var currency = currencies.getByNameOrSymbol(currencyNameOrSymbol || DEFAULT_CURRENCY_NAME);

    if (currency && currency.validator) {
        if (opts && typeof opts === 'string') {
            return currency.validator.isValidAddress(address, currency, { networkType: opts });
        }
        return currency.validator.isValidAddress(address, currency, opts);
    }

    throw new Error('Missing validator for currency: ' + currencyNameOrSymbol);
}
    
export function getCurrencies() {
    return currencies.getAll();
}

export function findCurrency(symbol: string) {
    return currencies.getByNameOrSymbol(symbol) || null ;
}
