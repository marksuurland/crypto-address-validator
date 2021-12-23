export interface Currency {
    name: string;
    symbol: string;
    validator: (address: string, currency: Currency, opts: Options) => boolean;
    addressTypes?: AddressType;
    iAddressTypes?: AddressType;
    expectedLength?: number;
    maxLength?: number;
    minLength?: number;
    hashFunction?: string;
    regexp?: RegExp;
    bech32Hrp?: AddressType;
}

export interface Options {
    chainType: string;
    networkType: string;
}

interface AddressType {
    prod: string[];
    testnet: string[];
    stagenet?: string[];
}
