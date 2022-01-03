import { describe } from 'mocha';
import { expect } from 'chai';
import { getCurrencies, findCurrency, validate } from '../src/index';

describe('getCurrencies()', function () {
    it('Should get all currencies', function () {
        var currencies = getCurrencies();
        expect(currencies).to.be.ok;
        expect(currencies.length).to.be.greaterThan(0);
    });

    it('Should find a specific currency by symbol', function() {
        var currency = findCurrency('xrp');
        expect(currency).to.be.ok;
        expect(currency.name).to.equal('Ripple');
        expect(currency.symbol).to.equal('xrp');
    });

    it('Should find a specific currency by name', function() {
        var currency = findCurrency('Ripple');
        expect(currency).to.be.ok;
        expect(currency.name).to.equal('Ripple');
        expect(currency.symbol).to.equal('xrp');
    });

    it('Should return null if currency is not found', function() {
        var currency = findCurrency('random');
        expect(currency).to.be.null;
    });

    it('Should throw exception in case of unknown currency', function() {
        const wrongCurrency = '%%%1312312';
        try {
            validate('123', wrongCurrency, null);
        } catch(e) {
            expect(e.message).to.equal('Missing validator for currency: ' + wrongCurrency);
        }
    })
});
