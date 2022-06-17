var cryptoUtils = require('../crypto/utils');
var cnBase58 = require('../crypto/externals/cnBase58');
import { Currency, Options } from '../types/types';

var addressRegTest = new RegExp('^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{95}$');
var integratedAddressRegTest = new RegExp('^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{106}$');

export function isValidAddress(address: string, currency: Currency, opts: Options): boolean {
    const networkType = opts ? opts.networkType : '';
    var addressType = 'standard';
    if(!addressRegTest.test(address)){
        if(integratedAddressRegTest.test(address)){
            addressType = 'integrated';
        }
        else{
            return false;
        }
    }

    var decodedAddrStr = cnBase58.decode(address);
    if(!decodedAddrStr)
        return false;

    if(!validateNetwork(decodedAddrStr, currency, networkType, addressType))
        return false;

    var addrChecksum = decodedAddrStr.slice(-8);
    var hashChecksum = cryptoUtils.keccak256Checksum(hextobin(decodedAddrStr.slice(0, -8)));

    return addrChecksum === hashChecksum;
}

function validateNetwork(decoded: string, currency: any, networkType: string, addressType: string){
    var network = currency.addressTypes;
    if(addressType == 'integrated'){
        network = currency.iAddressTypes;
    }

    switch(networkType){
        case 'prod':
            return parseInt(decoded.substring(0,2), 16) == network.prod[0];
        case 'testnet':
            return parseInt(decoded.substring(0,2), 16) == network.testnet[0];
        case 'both':
            return parseInt(decoded.substring(0,2), 16) == network.prod[0] || parseInt(decoded.substring(0,2), 16) == network.testnet[0];
        default:
            return false;
    }
}

function hextobin(hex: any) {
    if (hex.length % 2 !== 0) return null;
    var res = new Uint8Array(hex.length / 2);
    for (var i = 0; i < hex.length / 2; ++i) {
        res[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16);
    }
    return res;
}
