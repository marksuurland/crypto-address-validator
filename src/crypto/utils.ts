import * as jsSHA from 'jssha';
import * as jsSha512 from 'js-sha512';
import * as sha3 from 'js-sha3';
var Blake256 = require('./externals/blake256');
var Blake2B = require('./externals/blake2b');
var BigNum = require('browserify-bignum');

export function numberToHex(number: any, length?: any) {
    let hex = number.toString(16);
    if (hex.length % 2 === 1) {
        hex = '0' + hex;
    }
    return hex.padStart(length, '0');
}

function isHexChar(c: any) {
    if ((c >= 'A' && c <= 'F') ||
        (c >= 'a' && c <= 'f') ||
        (c >= '0' && c <= '9')) {
        return 1;
    }
    return 0;
}

/* Convert a hex char to value */
function hexChar2byte(c: any) {
    let d = 0;
    if (c >= 'A' && c <= 'F') {
        d = c.charCodeAt(0) - 'A'.charCodeAt(0) + 10;
    }
    else if (c >= 'a' && c <= 'f') {
        d = c.charCodeAt(0) - 'a'.charCodeAt(0) + 10;
    }
    else if (c >= '0' && c <= '9') {
        d = c.charCodeAt(0) - '0'.charCodeAt(0);
    }
    return d;
}

/* Convert a byte to string */
function byte2hexStr(byte: any) {
    const hexByteMap = "0123456789ABCDEF";
    let str = "";
    str += hexByteMap.charAt(byte >> 4);
    str += hexByteMap.charAt(byte & 0x0f);
    return str;
}

export function byteArray2hexStr(byteArray: any) {
    let str = "";
    for (var i = 0; i < (byteArray.length - 1); i++) {
        str += byte2hexStr(byteArray[i]);
    }
    str += byte2hexStr(byteArray[i]);
    return str;
}

export function hexStr2byteArray(str: any) {
    const byteArray = Array();
    let d = 0;
    let i = 0;
    let j = 0;
    let k = 0;

     for (i = 0; i < str.length; i++) {
        const c = str.charAt(i);
        if (isHexChar(c)) {
            d <<= 4;
            d += hexChar2byte(c);
            j++;
            if (0 === (j % 2)) {
                byteArray[k++] = d;
                d = 0;
            }
        }
    }
    return byteArray;
}

export function toHex(arrayOfBytes: any) {
    let hex = '';
    for (let i = 0; i < arrayOfBytes.length; i++) {
        hex += numberToHex(arrayOfBytes[i]);
    }
    return hex;
}

export function sha256(payload: any, format = 'HEX') {
    const sha = new jsSHA('SHA-256', format);
    sha.update(payload);
    return sha.getHash(format);
}

export function sha256x2(buffer: any, format = 'HEX') {
    return sha256(sha256(buffer, format), format);
}

export function sha256Checksum(payload: any) {
    return sha256(sha256(payload)).substr(0, 8);
}

export function sha512_256(payload: any) {
    const hash = jsSha512.sha512_256.create()
    hash.update(Buffer.from(payload, "hex"))
    return hash.hex().toUpperCase();
}

export function blake256(hexString: any) {
    return new Blake256().update(hexString, 'hex').digest('hex');
}

export function blake256Checksum(payload: any) {
    return blake256(blake256(payload)).substr(0, 8);
}

export function blake2b(hexString: any, outlen: any) {
    return new Blake2B(outlen).update(Buffer.from(hexString, 'hex')).digest('hex');
}

export function keccak256Checksum (payload: any) {
    return sha3.keccak256(payload).toString().substr(0, 8);
}

export function blake2b256 (hexString: any) {
    return new Blake2B(32).update(Buffer.from(hexString, 'hex'), 32).digest('hex');
}

export function bigNumberToBuffer(bignumber: any, size: any){
    return new BigNum(bignumber).toBuffer({ size, endian: 'big' });
}
