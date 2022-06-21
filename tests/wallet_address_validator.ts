import { describe } from 'mocha';
import { expect } from 'chai';
import { validate } from '../src/index';

function valid(address, currency, networkType) {
    var valid = validate(address, currency, networkType);
    expect({ address, currency, valid }).to.deep.equal({ address, currency, valid: true });
}

function invalid(address, currency, networkType) {
    var valid = validate(address, currency, networkType);
    expect({ address, currency, valid }).to.deep.equal({ address, currency, valid: false });
}

describe('validate', function () {
    describe('valid results', function () {
        it('should return true for correct bitcoin addresses', function () {
            valid('12KYrjTdVGjFMtaxERSk3gphreJ5US8aUP', 'bitcoin', null);
            valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'bitcoin', null);
            valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'BTC', null);
            valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'Bitcoin', null);
            valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'btc', null);
            valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'btc', { networkType: 'prod' });
            valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'btc', { networkType: 'both' });
            valid('15uwigGExiNQxTNr1QSZYPXJMp9Px2YnVU', 'btc', { networkType: 'prod' });
            valid('3FyVFsEyyBPzHjD3qUEgX7Jsn4tcHNZFkn', 'btc', { networkType: 'prod' });
            valid('38mKdURe1zcQyrFqRLzR8PRao3iLGEPVsU', 'btc', { networkType: 'prod' });
            valid('mptPo5AvLzJXi4T82vR6g82fT5uJ6HsQCu', 'btc', { networkType: 'both' });
            valid('1oNLrsHnBcR6dpaBpwz3LSwutbUNkNSjs', 'bitcoin', null);
            valid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'bitcoin', { networkType: 'testnet' });
            valid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'bitcoin', { networkType: 'both' });
            valid('1HVDCg2KrPBH1Mg5SK9fGjAR9KVqyMMdBC', 'btc', null);

            valid('1SQHtwR5oJRKLfiWQ2APsAd9miUc4k2ez', 'bitcoin', null);
            valid('116CGDLddrZhMrTwhCVJXtXQpxygTT1kHd', 'bitcoin', null);

            // p2sh addresses
            valid('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'bitcoin', null);
            valid('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'bitcoin', null);
            valid('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'bitcoin', { networkType: 'testnet' });

            // regtest
            valid('GSa5espVLNseXEfKt46zEdS6jrPkmFghBU', 'bitcoin', { networkType: 'testnet' });

            // segwit addresses
            valid('BC1QW508D6QEJXTDG4Y5R3ZARVARY0C5XW7KV8F3T4', 'bitcoin', null);
            valid('bc1q2t63ewm3mvh0ztmnmezxm7s0tefknenxlrlwrk', 'bitcoin', null);

            valid('tb1qrp33g0q5c5txsp9arysrx4k6zdkfs4nce4xj0gdcccefvpysxf3q0sl5k7', 'bitcoin', { networkType: 'testnet' });
            valid('tb1qqqqqp399et2xygdj5xreqhjjvcmzhxw4aywxecjdzew6hylgvsesrxh6hy', 'bitcoin', { networkType: 'testnet' });

            invalid("tc1qw508d6qejxtdg4y5r3zarvary0c5xw7kg3g4ty", 'bitcoin', null);
            invalid('bc1pw508d6qejxtdg4y5r3zarvary0c5xw7kw508d6qejxtdg4y5r3zarvary0c5xw7k7grplx', 'bitcoin', null);
            invalid('BC1SW50QA3JX3S', 'bitcoin', null);
            invalid('bc1zw508d6qejxtdg4y5r3zarvaryvg6kdaj', 'bitcoin', null);
            invalid("bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t5", 'bitcoin', null);
            invalid("BC13W508D6QEJXTDG4Y5R3ZARVARY0C5XW7KN40WF2", 'bitcoin', null);
            invalid("bc1rw5uspcuh", 'bitcoin', null);
            invalid("bc10w508d6qejxtdg4y5r3zarvary0c5xw7kw508d6qejxtdg4y5r3zarvary0c5xw7kw5rljs90", 'bitcoin', null);
            invalid("BC1QR508D6QEJXTDG4Y5R3ZARVARYV98GJ9P", 'bitcoin', null);
            invalid("tb1qrp33g0q5c5txsp9arysrx4k6zdkfs4nce4xj0gdcccefvpysxf3q0sL5k7", 'bitcoin', null);
            invalid("bc1zw508d6qejxtdg4y5r3zarvaryvqyzf3du", 'bitcoin', null);
            invalid("tb1qrp33g0q5c5txsp9arysrx4k6zdkfs4nce4xj0gdcccefvpysxf3pjxtptv", 'bitcoin', null);
            invalid("bc1gmk9yu", 'bitcoin', null)
        });

        it('should return true for correct bitcoincash addresses', function () {
            valid('12KYrjTdVGjFMtaxERSk3gphreJ5US8aUP', 'bitcoincash', null);
            valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'bitcoincash', null);
            valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'BCH', null);
            valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'Bitcoin', null);
            valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'bch', null);
            valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'bch', { networkType: 'prod' });
            valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'bch', { networkType: 'both' });
            valid('1oNLrsHnBcR6dpaBpwz3LSwutbUNkNSjs', 'bitcoincash', null);
            valid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'bitcoincash', { networkType: 'testnet' });
            valid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'bitcoincash', { networkType: 'both' });

            // p2sh addresses
            valid('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'bitcoincash', null);
            valid('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'bitcoincash', { networkType: 'testnet' });

            valid('bitcoincash:qq4v32mtagxac29my6gwj6fd4tmqg8rysu23dax807', 'bch', null);

        });

        it('should return true for correct litecoin addresses', function () {
            valid('LVg2kJoFNg45Nbpy53h7Fe1wKyeXVRhMH9', 'litecoin', null);
            valid('LVg2kJoFNg45Nbpy53h7Fe1wKyeXVRhMH9', 'LTC', null);
            valid('LTpYZG19YmfvY2bBDYtCKpunVRw7nVgRHW', 'litecoin', null);
            valid('Lb6wDP2kHGyWC7vrZuZAgV7V4ECyDdH7a6', 'litecoin', null);
            valid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'litecoin', { networkType: 'testnet' });

            // p2sh addresses
            valid('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'litecoin', null);
            valid('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'litecoin', { networkType: 'testnet' });
            valid('QW2SvwjaJU8LD6GSmtm1PHnBG2xPuxwZFy', 'litecoin', { networkType: 'testnet' });
            valid('QjpzxpbLp5pCGsCczMbfh1uhC3P89QZavY', 'litecoin', { networkType: 'testnet' });

            // segwit addresses
            valid('ltc1qg42tkwuuxefutzxezdkdel39gfstuap288mfea', 'litecoin', null);
            valid('ltc1qg42tkwuuxefutzxezdkdel39gfstuap288mfea', 'litecoin', { networkType: 'prod' });
            valid('tltc1qu78xur5xnq6fjy83amy0qcjfau8m367defyhms', 'litecoin', { networkType: { networkType: 'testnet' } });
        });

        it('should return true for correct peercoin addresses', function () {
            valid('PHCEsP6od3WJ8K2WKWEDBYKhH95pc9kiZN', 'peercoin', null);
            valid('PSbM1pGoE9dnAuVWvpQqTTYVpKZU41dNAz', 'peercoin', null);
            valid('PUULeHrJL2WujJkorc2RsUAR3SardKUauu', 'peercoin', null);
            valid('PUULeHrJL2WujJkorc2RsUAR3SardKUauu', 'PPC', null);
            valid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'peercoin', { networkType: 'testnet' });

            // p2sh addresses
            valid('pNms4CaWqgZUxbNZaA1yP2gPr3BYnez9EM', 'peercoin', null);
            valid('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'peercoin', { networkType: 'testnet' });
        });

        it('should return true for correct dogecoin addresses', function () {
            valid('DPpJVPpvPNP6i6tMj4rTycAGh8wReTqaSU', 'dogecoin', null);
            valid('DNzLUN6MyYVS5zf4Xc2yK69V3dXs6Mxia5', 'dogecoin', null);
            valid('DPS6iZj7roHquvwRYXNBua9QtKPzigUUhM', 'dogecoin', null);
            valid('DPS6iZj7roHquvwRYXNBua9QtKPzigUUhM', 'DOGE', null);
            //TODO: NEED A DOGECOIN TESTNET ADDRESS

            //p2sh addresses
            valid('A7JjzK9k9x5b2MkkQzqt91WZsuu7wTu6iS', 'dogecoin', null);
            valid('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'dogecoin', { networkType: 'testnet' });
        });

        it('should return true for correct beavercoin addresses', function () {
            valid('BPPtB4EpPi5wCaGXZuNyKQgng8ya579qUh', 'beavercoin', null);
            valid('BC1LLYoE4mTCHTJhVYvLGxhRTwAHyWTQ49', 'beavercoin', null);
            valid('BBuyeg2vjtyFdMNj3LTxuVra4wJMKVAY9C', 'beavercoin', null);
            valid('BBuyeg2vjtyFdMNj3LTxuVra4wJMKVAY9C', 'BVC', null);
            valid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'beavercoin', { networkType: 'testnet' });

            // p2sh addresses
            valid('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'beavercoin', null);
            valid('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'beavercoin', { networkType: 'testnet' });
        });

        it('should return true for correct freicoin addresses', function () {
            valid('1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', 'freicoin', null);
            valid('1oNLrsHnBcR6dpaBpwz3LSwutbUNkNSjs', 'freicoin', null);
            valid('1SQHtwR5oJRKLfiWQ2APsAd9miUc4k2ez', 'freicoin', null);
            valid('1SQHtwR5oJRKLfiWQ2APsAd9miUc4k2ez', 'FRC', null);
            valid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'freicoin', { networkType: 'testnet' });

            // p2sh addresse
            valid('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'freicoin', null);
            valid('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'freicoin', { networkType: 'testnet' });
        });

        it('should return true for correct protoshares addresses', function () {
            valid('PaNGELmZgzRQCKeEKM6ifgTqNkC4ceiAWw', 'protoshares', null);
            valid('Piev8TMX2fT5mFtgxx2TXJaqXP37weMPuD', 'protoshares', null);
            valid('PgsuLoe9ojRKFGJGVpqqk37gAqNJ4ozboD', 'protoshares', null);
            valid('PgsuLoe9ojRKFGJGVpqqk37gAqNJ4ozboD', 'PTS', null);
            valid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'protoshares', { networkType: 'testnet' });

            //p2sh addresses
            valid('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'protoshares', null);
            valid('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'protoshares', { networkType: 'testnet' });
        });

        it('should return true for correct megacoin addresses', function () {
            valid('MWUHaNxjXGZUYTh92i3zuDmsnH1rHSBk5M', 'megacoin', null);
            valid('MSAkrhRyte7bz999Ga5SqYjzypFFYa2oEb', 'megacoin', null);
            valid('MLUTAtDQFcfo1QACWocLuufFq5fBDTpCHE', 'megacoin', null);
            valid('MLUTAtDQFcfo1QACWocLuufFq5fBDTpCHE', 'MEC', null);
            valid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'megacoin', { networkType: 'testnet' });

            //p2sh addresses
            valid('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'megacoin', null);
            valid('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'megacoin', { networkType: 'testnet' });
        });

        it('should return true for correct primecoin addresses', function () {
            valid('AVKeiZ5JadfWdH2EYVgVRfX4ufoyd4ehuM', 'primecoin', null);
            valid('AQXBRPyob4dywUJ21RUKrR1xetQCDVenKD', 'primecoin', null);
            valid('ANHfTZnskKqaBU7oZuSha9SpbHU3YBfeKf', 'primecoin', null);
            valid('AYdiYMKSGYxLcZNDmqB8jNcck7SQibrfiK', 'primecoin', null);
            valid('AYdiYMKSGYxLcZNDmqB8jNcck7SQibrfiK', 'XPM', null);
            valid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'primecoin', { networkType: 'testnet' });

            //p2sh addresses
            valid('af5CvTQq7agDh717Wszb5QDbWb7nT2mukP', 'primecoin', null);
            valid('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'primecoin', { networkType: 'testnet' });
        });

        it('should return true for correct auroracoin addresses', function () {
            valid('ARM3GLZXF1PDTZ5vz3wh5MVahbK9BHTWAN', 'auroracoin', null);
            valid('AUtfc6ThCLb7FuEu7QPrWpJuaXaJRPciDF', 'auroracoin', null);
            valid('AUN1oaj5hjispGnczt8Aruw3TxgGyRqB3V', 'auroracoin', null);
            valid('AXGcBkGX6NiaDXj85C5dCrhTRUgwxSkKDK', 'auroracoin', null);
            valid('AXGcBkGX6NiaDXj85C5dCrhTRUgwxSkKDK', 'AUR', null);
            valid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'auroracoin', { networkType: 'testnet' });

            //p2sh addresses
            valid('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'auroracoin', null);
            valid('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'auroracoin', { networkType: 'testnet' });
        });

        it('should return true for correct namecoin addresses', function () {
            valid('NEpeRmS775fnti8TDgJA28m8KLEfNNRZvT', 'namecoin', null);
            valid('MyJ691bGJ48RBK2LS8n1U57wcFLFScFXxi', 'namecoin', null);
            valid('NFY9aw1RXLGtWpeqgNQXprnUcZXyKNinTh', 'namecoin', null);
            valid('NCPPc7Pzb75CpRPJQPRRh6ouJTq7BCy1H4', 'namecoin', null);
            valid('NCPPc7Pzb75CpRPJQPRRh6ouJTq7BCy1H4', 'NMC', null);
        });

        it('should return true for correct BioCoin addresses', function () {
            valid('B7xseoLGk7hEpMDDeSvZDKmmiAMHWiccok', 'biocoin', null);
            valid('B8zjmYFGhWmiaQSJshfrnefE72xCapCkvo', 'biocoin', null);
            valid('muH8LL42DiMs8GEQ6Grfi8KUw2uFvuKr1J', 'biocoin', { networkType: 'testnet' });
            valid('muH8LL42DiMs8GEQ6Grfi8KUw2uFvuKr1J', 'BIO', { networkType: 'testnet' });
            valid('B8zjmYFGhWmiaQSJshfrnefE72xCapCkvo', 'BIO', null);
        });

        it('should return true for correct Garlicoin addresses', function () {
            valid('GU2NtcNotWFiZjTp2Vdgf5CjeMfgsWYCua', 'garlicoin', null);
            valid('GNWeWaoQ6rv21ZFjJWT9vb91hXUzFTLkru', 'garlicoin', null);
            valid('mjKbQTkgwzmsL3J86tdVzhyW9pc4NePqTb', 'garlicoin', { networkType: 'testnet' });
            valid('mnYp36NuyRavMKQ9Q9Q6oGqoorAs9p3zYn', 'GRLC', { networkType: 'testnet' });
            valid('GU2NtcNotWFiZjTp2Vdgf5CjeMfgsWYCua', 'GRLC', null);
        });

        it('should return true for correct Vertcoin addresses', function () {
            valid('3PgeyhEJEnS5CeBu3iFcu3JHVKemeHx1AW', 'VTC', null);
            valid('353nERPQKhGj4WGzoiWcareA76TPgRCVNA', 'VTC', null);
            valid('376g4TmL8uQKFYsRFrbv5iz9srmb5bocEt', 'VTC', null);
            valid('3AMtM4Zk5oNHu9i4jDiwKB6Kg5YEReBsav', 'VTC', null);

            valid('VmoMjGf3zgZLy8sk3PMKd3xikZHXWvnYi7', 'vertcoin', null);
            valid('VmhHwXr3J8xMZpy62WuBGpu3xVvThWzcTQ', 'vertcoin', null);
            valid('mvww6DEJ18dbyQUukpVQXvLgrNDJazZn1Y', 'vertcoin', { networkType: 'testnet' });
            valid('mn3mdEE6cf1snxVsknNz4GRTdSrWXqYp7c', 'VTC', { networkType: 'testnet' });
            valid('Vri6Q4GgNFfdtcpxD961TotJwaSaYQCaL5', 'VTC', null);
        });

        it('should return true for correct BitcoinGold addresses', function () {
            valid('GW3JrQyHtoVfEFES3Y9JagiX3VSKQStLwj', 'bitcoingold', null);
            valid('GUDWdeMyAXQbrNFFivAhkJQ1GfBCFdc7JF', 'bitcoingold', null);
            valid('mvww6DEJ18dbyQUukpVQXvLgrNDJazZn1Y', 'bitcoingold', { networkType: 'testnet' });
            valid('mn3mdEE6cf1snxVsknNz4GRTdSrWXqYp7c', 'BTG', { networkType: 'testnet' });
            valid('GSNFPRsdaM3MXrU5HW1AxgFwmUQC8HXK9F', 'BTG', null);
        });

        it('should return true for correct Decred addresses', function () {
            valid('Dsesax2GJnMN4wwmWo5rJGq73dDK217Rh85', 'DCR', null);
            valid('DsYuxtvGRfN8rncXAndtLUpJm55F77K17RA', 'decred', null);
            valid('DsaXDG2NrJW8g4tFAb8n9MNx81Sn3Qc8AEV', 'decred', null);
            valid('TsijUgejaRnLKF5WAbpUxNtwKGUiKVeXLr7', 'decred', { networkType: 'testnet' });
            valid('TsZ9QmAoadF12hGvyALp6qvaF4be3BmLqG9', 'dcr', { networkType: 'testnet' });
        });

        it('should return true for correct Digibyte addresses', function () {
            valid('DG2rM2orU2JH5i4ACh3AKNpRTNESdv5xf8', 'DGB', null);
            valid('DBR2Lj1F17eHGHXgbpae2Wb4m39bDyA1qo', 'DGB', null);
            valid('D9TDZTR9Z9Mx2NoDJnhqhnYhDLKRAmsL9n', 'digibyte', null);
            valid('DHRzA1YHA1kFWpz2apRckZJy6KZRyGq4EV', 'digibyte', null);
            valid('DJ53hTyLBdZp2wMi5BsCS3rtEL1ioYUkva', 'digibyte', null);
            valid('dgb1q00002724tefpjkpn8mp233uyqwd8hnny55e0zg', 'DGB', { networkType: 'prod' })
            valid('SiEgX2mSYJjVN9YGuC23uckE6BS1ZSHcGD', 'DGB', { networkType: 'prod' })
        });

        it('should return true for correct Ethereum addresses', function () {
            valid('0xE37c0D48d68da5c5b14E5c1a9f1CFE802776D9FF', 'ethereum', null);
            valid('0xa00354276d2fC74ee91e37D085d35748613f4748', 'ethereum', null);
            valid('0xAff4d6793F584a473348EbA058deb8caad77a288', 'ETH', null);
            valid('0xc6d9d2cd449a754c494264e1809c50e34d64562b', 'ETH', null);
            valid('0x52908400098527886E0F7030069857D2E4169EE7', 'ETH', null);
            valid('0x8617E340B3D01FA5F11F306F4090FD50E238070D', 'ETH', null);
            valid('0xde709f2102306220921060314715629080e2fb77', 'ETH', null);
            valid('0x27b1fdb04752bbc536007a920d24acb045561c26', 'ETH', null);
            valid('0x5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed', 'ETH', null);
            valid('0xfB6916095ca1df60bB79Ce92cE3Ea74c37c5d359', 'ETH', null);
            valid('0xdbF03B407c01E7cD3CBea99509d93f8DDDC8C6FB', 'ETH', null);
            valid('0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb', 'ETH', null);

            valid('0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb', 'ethereumclassic', null);
            valid('0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb', 'ETC', null);
            valid('0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb', 'etherzero', null);
            valid('0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb', 'ETZ', null);
            valid('0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb', 'callisto', null);
            valid('0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb', 'CLO', null);
        });

        it('should return true for correct Ripple addresses', function () {
            valid('rG1QQv2nh2gr7RCZ1P8YYcBUKCCN633jCn', 'ripple', null);
            valid('rG1QQv2nh2gr7RCZ1P8YYcBUKCCN633jCn', 'XRP', null);
            valid('r3kmLJN5D28dHuH8vZNUZpMC43pEHpaocV', 'XRP', null);
            valid('rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh', 'XRP', null);
            valid('rDTXLQ7ZKZVKz33zJbHjgVShjsBnqMBhmN', 'XRP', null);
        });

        it('should return true for correct Binance Coin Mainnet addresses', function () {
            valid('0xE37c0D48d68da5c5b14E5c1a9f1CFE802776D9FF', 'binance coin mainnet', null);
            valid('0xa00354276d2fC74ee91e37D085d35748613f4748', 'binance coin mainnet', null);
            valid('0xAff4d6793F584a473348EbA058deb8caad77a288', 'BNB', null);
            valid('0xc6d9d2cd449a754c494264e1809c50e34d64562b', 'bnb', null);
            valid('0x52908400098527886E0F7030069857D2E4169EE7', 'BNB', null);
            valid('0x8617E340B3D01FA5F11F306F4090FD50E238070D', 'bnb', null);
        });

        it('should return true for correct Baby Ripple addresses', function () {
            valid('rG1QQv2nh2gr7RCZ1P8YYcBUKCCN633jCn', 'babyxrp', null);
            valid('rG1QQv2nh2gr7RCZ1P8YYcBUKCCN633jCn', 'babyxrp', null);
            valid('r3kmLJN5D28dHuH8vZNUZpMC43pEHpaocV', 'babyxrp', null);
            valid('rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh', 'babyxrp', null);
            valid('rDTXLQ7ZKZVKz33zJbHjgVShjsBnqMBhmN', 'babyxrp', null);
        });

        it('should return true for correct dash addresses', function () {
            valid('Xx4dYKgz3Zcv6kheaqog3fynaKWjbahb6b', 'dash', null);
            valid('XcY4WJ6Z2Q8w7vcYER1JypC8s2oa3SQ1b1', 'DASH', null);
            valid('XqMkVUZnqe3w4xvgdZRtZoe7gMitDudGs4', 'dash', null);
            valid('yPv7h2i8v3dJjfSH4L3x91JSJszjdbsJJA', 'dash', { networkType: 'testnet' });
            valid('XoAAqv3oUYZ6xRjX3brfbf9PotrGanS6Th', 'dash', null);
            valid('yP5oXZQXBfBf9FyfZDpFiKDypxuNUKUV2E', 'dash', { networkType: 'testnet' });
        });

        it('should return true for correct neo addresses', function () {
            valid('AR4QmqYENiZAD6oXe7ftm6eDcwtHk7rVTT', 'neo', null);
            valid('AKDVzYGLczmykdtRaejgvWeZrvdkVEvQ1X', 'NEO', null);
        });

        it('should return true for correct neo gas addresses', function () {
            valid('AR4QmqYENiZAD6oXe7ftm6eDcwtHk7rVTT', 'neogas', null);
        });

        it('should return true for correct qtum addresses', function () {
            valid('QNjUiD3bVVZwYTc5AhpeQbS1mfb2guyWhe', 'qtum', null);
            valid('QVZnSrMwKp6AL4FjUPPnfFgsma6j1DXQXu', 'QTUM', null);
            valid('MCgyroQse81wuv5RwPpY5DXDNxeafzLFJ8', 'QTUM', null);
            valid('QQYySVc5WEe3g6PnNFYmspqG5CfSG8rnma', 'QTUM', null);
            valid('MSvJQBJMZs1dhxz7UAWa2si4iyMD2FHQd5', 'QTUM', null);

            valid('qcSLSxN1sngCWSrKFZ6UC7ri4hhVSdq9SU', 'qtum', { networkType: 'testnet' });
            valid('qJnbEdrm9ybjVqDCaX5SWNBHmZy2X7YbPT', 'qtum', { networkType: 'testnet' });
            valid('qchBPDUYswobzpDmY5DsTStt74sTYQtaQv', 'qtum', { networkType: 'testnet' });
        });

        it('should return true for correct votecoin addresses', function () {
            valid('t1U9yhDa5XEjgfnTgZoKddeSiEN1aoLkQxq', 'votecoin', null);
            valid('t3Vz22vK5z2LcKEdg16Yv4FFneEL1zg9ojd', 'VOT', null);
            valid('t2UNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'votecoin', { networkType: 'testnet' });
        });

        it('should return true for correct bitcoinz addresses', function () {
            valid('t1U9yhDa5XEjgfnTgZoKddeSiEN1aoLkQxq', 'bitcoinz', null);
            valid('t3Vz22vK5z2LcKEdg16Yv4FFneEL1zg9ojd', 'BTCZ', null);
            valid('t2UNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'bitcoinz', { networkType: 'testnet' });
        });

        it('should return true for correct zclassic addresses', function () {
            valid('t1U9yhDa5XEjgfnTgZoKddeSiEN1aoLkQxq', 'zclassic', null);
            valid('t3Vz22vK5z2LcKEdg16Yv4FFneEL1zg9ojd', 'ZCL', null);
            valid('t2UNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'zclassic', { networkType: 'testnet' });
        });

        it('should return true for correct hush addresses', function () {
            valid('t1U9yhDa5XEjgfnTgZoKddeSiEN1aoLkQxq', 'hush', null);
            valid('t3Vz22vK5z2LcKEdg16Yv4FFneEL1zg9ojd', 'HUSH', null);
            valid('t2UNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'hush', { networkType: 'testnet' });
        });

        it('should return true for correct zcash addresses', function () {
            valid('t1U9yhDa5XEjgfnTgZoKddeSiEN1aoLkQxq', 'zcash', null);
            valid('t3Vz22vK5z2LcKEdg16Yv4FFneEL1zg9ojd', 'ZEC', null);
            valid('t2UNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'zcash', { networkType: 'testnet' });
        });

        it('should return true for correct bitcoinprivate addresses', function () {
            valid('b1M4XXPFhwMb1SP33yhzn3h9qWXjujkgep4', 'bitcoinprivate', null);
        });

        it('should return true for correct snowgem addresses', function () {
            valid('s1fx7WBkjB4UH6qQjPp6Ysmtr1C1JiTK2Yw', 'snowgem', null);
            valid('s3d27MhkBRt3ha2UuxhjXaYF4DCnttTMnL1', 'SNG', null);
            valid('t2UNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'snowgem', { networkType: 'testnet' });
        });

        it('should return true for correct zencash addresses', function () {
            valid('znhiGGfYRepxkBjXYvA2kFrXiC351i9ta4z', 'zencash', null);
            valid('zssEdGnZCQ9G86LZFtbynMn1hYTVhn6eYCL', 'ZEN', null);
            valid('ztmWMDLWjbruCJxKmmfAZiT6QAQdiv5F291', 'zencash', { networkType: 'testnet' });
        });

        it('should return true for correct komodo addresses', function () {
            valid('R9R5HirAzqDcWrWGiJEL115dpV3QB3hobH', 'komodo', null);
            valid('RAvj2KKVUohTu3hVdNJ4U6hQi7TNawpacH', 'KMD', null);
        });

        it('should return true for correct Bankex addresses', function () {
            valid('0xeac39e1bc802baae3d4b9cb518f3f60374bbad6c', 'bankex', null);
            valid('0x45245bc59219eeaaf6cd3f382e078a461ff9de7b', 'BKX', null);
            valid('0xf40d80FCfa5cdEa0bB1E570c2D52132ac9bC6aEC', 'bankex', { networkType: 'testnet' });
            valid('0x8A7395f281EeCf2B471B689E87Cf4C7fa8bb957d', 'BKX', { networkType: 'testnet' });
        });


        it('should return true for correct Cardano addresses', function () {
            valid('Ae2tdPwUPEYzs5BRbGcoS3DXvK8mwgggmESz4HqUwMyaS9eNksZGz1LMS9v', 'ada', null);
            valid('Ae2tdPwUPEYxYNJw1He1esdZYvjmr4NtPzUsGTiqL9zd8ohjZYQcwu6kom7', 'cardano', null);
            valid('DdzFFzCqrhsfdzUZxvuBkhV8Lpm9p43p9ubh79GCTkxJikAjKh51qhtCFMqUniC5tv5ZExyvSmAte2Du2tGimavSo6qSgXbjiy8qZRTg', 'ada', null);
            valid('Ae2tdPwUPEZKmwoy3AU3cXb5Chnasj6mvVNxV1H11997q3VW5ihbSfQwGpm', 'ada', null);
            valid('4swhHtxKapQbj3TZEipgtp7NQzcRWDYqCxXYoPQWjGyHmhxS1w1TjUEszCQT1sQucGwmPQMYdv1FYs3d51KgoubviPBf', 'cardano', null);

            valid('addr1qxy3w62dupy9pzmpdfzxz4k240w5vawyagl5m9djqquyymrtm3grn7gpnjh7rwh2dy62hk8639lt6kzn32yxq960usnq9pexvt', 'cardano', null);
            valid('addr1skemppwfevyk0lshu2w8j34707s3t3t58a04xcx5ccevrcmvpmxg2qt4pk0', 'cardano', { networkType: 'testnet' });
        });

        it('should return true for correct erc20 addresses', function () {
            valid('0xdbF03B407c01E7cD3CBea99509d93f8DDDC8C6FB', 'usdc', null);
            valid('0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb', 'usdc', null);

        });

        it('should return true for correct monacoin addresses', function () {
            valid('MMN1Q1aRVUzanmg9DJjcRYzQSJQoBeQPui', 'mona', null);
            valid('PFMzNYnBm5X4c9qJkJPkfgdCyd9fuuy2vT', 'mona', null);
            valid('PCtN7VUYHW8w4g59BaphrfPs8g7pNgAzxn', 'mona', null);
            valid('MXCcYFGRmsd4d3CcQugFiqG8uarj5tVu76', 'mona', null);
            valid('MNK1pGsBf9WdoE54fZM9VFhkeYHW6VUf2u', 'mona', null);
        });

        it('should return true for correct pivx addresses', function () {
            valid('DJXFW9oJJBUX7QKrG6GKvmTs63MYKzwtpZ', 'pivx', null);
            valid('DEaYb8EHQgyKvX6VXDS3DZQautJrHBmK3T', 'pivx', null);
            valid('DDeCGR3QSgqsBxVR23bJvteiyYE34ZmxAc', 'pivx', null);
            valid('DSqQM8DPpBHHoZXHgRdwmaf6hZPEoZcFkh', 'pivx', null);
        });

        it('should return true for correct solarcoin addresses', function () {
            valid('8VxVLzwB26E2YZZ82o1NcQe96QSM2z6GwW', 'slr', null);
            valid('8YW5qcTjeyqX5kESsqu2BUdXiedgssegtQ', 'SolarCoin', null);
        });

        it('should return true for correct tap addresses', function () {
            valid('0x9ec7d40d627ec59981446a6e5acb33d51afcaf8a', 'xtp', null);
            valid('0x9ec7d40d627ec59981446a6e5acb33d51afcaf8a', 'tap', null);
        });

        it('should return true for correct tether addresses', function () {
            valid('3MbYQMMmSkC3AgWkj9FMo5LsPTW1zBTwXL', 'usdt', null);
            valid('1KdXaqcBeoMAFVAPwTmYvDbEq6RnvNPF6J', 'tether', null);
            valid('0xF6f6ebAf5D78F4c93Baf856d3005B7395CCC272e', 'usdt', null);
            valid('0x9ec7d40d627ec59981446a6e5acb33d51afcaf8a', 'tether', null);
            valid('3MbYQMMmSkC3AgWkj9FMo5LsPTW1zBTwXL', 'usdt', { chainType: 'omni' });
            valid('0x9ec7d40d627ec59981446a6e5acb33d51afcaf8a', 'tether', { chainType: 'erc20' });
        });

        it('should return false for incorrect tether addresses', function () {
            invalid('1KdXaqcBeoMAFVAPwTmYvDbEq6RnvNPF6Jp', 'tether', null);
            invalid('0xF6f6ebAf5D78F4c93Baf856d3005B7395CCC272eT', 'usdt', null);
            invalid('3MbYQMMmSkC3AgWkj9FMo5LsPTW1zBTwXL', 'usdt', { chainType: 'erc20' });
            invalid('0x9ec7d40d627ec59981446a6e5acb33d51afcaf8a', 'tether', { chainType: 'omni' });
        });

        it('should return true for correct expanse addresses', function () {
            valid('0xbab463743603a253bdf1f84975b1a9517505ae05', 'exp', null);
            valid('0x5d0777cb5d6977873904864c6ab531f4b3261f0b', 'expanse', null);
        });

        it('should return true for correct waves addresses', function () {
            valid('3P93mVrYnQ4ahaRMYwA2BeWY32eDxTpLVEs', 'waves', null);
            valid('3P4eeU7v1LMHQFwwT2GW9W99c6vZyytHajj', 'waves', null);

            valid('3Myrq5QDgRq3nBVRSSv9UYrP36xTtpJND5y', 'waves', { networkType: 'testnet' });
            valid('3My3KZgFQ3CrVHgz6vGRt8687sH4oAA1qp8', 'waves', { networkType: 'testnet' });
        });

        it('should return true for correct nano addresses', function () {
            valid('xrb_3t6k35gi95xu6tergt6p69ck76ogmitsa8mnijtpxm9fkcm736xtoncuohr3', 'nano', null);
            valid('xrb_13ezf4od79h1tgj9aiu4djzcmmguendtjfuhwfukhuucboua8cpoihmh8byo', 'nano', null);
            valid('xrb_35jjmmmh81kydepzeuf9oec8hzkay7msr6yxagzxpcht7thwa5bus5tomgz9', 'nano', null);
            valid('xrb_1111111111111111111111111111111111111111111111111111hifc8npp', 'nano', null);
            valid('xrb_1ipx847tk8o46pwxt5qjdbncjqcbwcc1rrmqnkztrfjy5k7z4imsrata9est', 'nano', null);
            valid('xrb_3wm37qz19zhei7nzscjcopbrbnnachs4p1gnwo5oroi3qonw6inwgoeuufdp', 'nano', null);
            valid('xrb_3arg3asgtigae3xckabaaewkx3bzsh7nwz7jkmjos79ihyaxwphhm6qgjps4', 'nano', null);
            valid('xrb_1f5e4w33ndqbkx4bw5jtp13kp5xghebfxcmw9hdt1f7goid1s4373w6tjmgu', 'nano', null);
            valid('xrb_1q79ahdr36uqn38p5tp5sqwkn73rnpj1k8obtuetdbjcx37d5gahhd1u9cuh', 'nano', null);
            valid('nano_1q79ahdr36uqn38p5tp5sqwkn73rnpj1k8obtuetdbjcx37d5gahhd1u9cuh', 'nano', null);
        });

        it('should return true for correct siacoin addresses', function () {
            valid(
                'a9b01c85163638682b170d82de02b8bb99ba86092e9ab1b0d25111284fe618e93456915820f1',
                'siacoin',
                null
            )
            valid(
                'a9b01c85163638682b170d82de02b8bb99ba86092e9ab1b0d25111284fe618e93456915820f1',
                'siacoin',
                null
            )
            valid(
                'ab0c327982abfcc6055a6c9551589167d8a73501aca8769f106371fbc937ad100c955c3b7ba9',
                'siacoin',
                null
            )
            valid(
                'ffe1308c044ade30392a0cdc1fd5a4dbe94f9616a95faf888ed36123d9e711557aa497530373',
                'siacoin',
                null
            )
        })

        it('should return true for correct lbry addresses', function () {
            valid('bDb6NmobyDVeNGpizWQQBZkYjKCRQBdKdG', 'lbc', null)
            valid('bTFXPcV3a8iVDezogvHTHezWZ1mZGWpPDc', 'lbc', null)
            valid('bK2uEVn6UuwjCTUZ1Dfj5HhWYi9BtqZDDm', 'lbc', null)
            valid('bNEMVqeUZUqTrYUxud5ehnUhtTAiWDXQ5e', 'lbc', null)
        })

        it('should return true for correct trx addresses', function () {
            valid('TNDzfERDpxLDS2w1q6yaFC7pzqaSQ3Bg3r', 'trx', { networkType: 'prod' });
            valid('27bLJCYjbH6MT8DBF9xcrK6yZnm43vx7MNQ', 'trx', { networkType: 'testnet' });
        });

        it('should return true for correct nem addresses', function () {
            valid('NBZMQO7ZPBYNBDUR7F75MAKA2S3DHDCIFG775N3D', 'xem', null);
            valid('TDWTRGT6GVWCV7GRWFNI45S53PGOJBKNUF3GE6PB', 'xem', { networkType: 'testnet' });
        });

        it('should return true for correct lsk addresses', function () {
            valid('469226551L', 'lsk', null);
            valid('15823701926930889868L', 'lsk', null);
            valid('1657699692452120239L', 'lsk', null);
            valid('555666666999992L', 'lsk', null);
            valid('6853061742992593192L', 'lsk', null);
            valid('530464791801L', 'lsk', null);
        });

        it('should return true for correct bsv addresses', function () {
            valid('qzwryn9fxnpqkf7zt878tp2g9cg8kpl65qh2ml0w0r', 'bsv', null);
            valid('qp65yngy5uds4wxtrkynptal4f76qzmrh52pa3mpaf', 'bsv', null);
            valid('bitcoincash:qq4v32mtagxac29my6gwj6fd4tmqg8rysu23dax807', 'bsv', null);
            valid('qq4v32mtagxac29my6gwj6fd4tmqg8rysu23dax807', 'bsv', null);
            valid('qz97s7ee0rvwlymtxrwafmvs87x6027jwuf3wepug7', 'bsv', null);
            valid('bitcoincash:qpp32ssez340wfspnt79h6c4xds4fzf3m5j0cplx0l', 'bsv', null);
            valid('qqg82u7tq2eahs3gkh9m6kjnmjehr69m5v37alepq4', 'bsv', null);
            valid('bitcoincash:qrwkk9a3es2wu7mdvzh0vekfvjuzysq8tv7r3hcwr5', 'bsv', null);
            valid('1DrNXqCj2B8FKyx66RAWDkiEJhw2yrvhT3', 'bsv', null);
        });

        it('should return true for correct stellar addresses', function () {
            valid('GBBM6BKZPEHWYO3E3YKREDPQXMS4VK35YLNU7NFBRI26RAN7GI5POFBB', 'stellar', null);
            valid('GB7KKHHVYLDIZEKYJPAJUOTBE5E3NJAXPSDZK7O6O44WR3EBRO5HRPVT', 'stellar', null);
            valid('GD6WVYRVID442Y4JVWFWKWCZKB45UGHJAABBJRS22TUSTWGJYXIUR7N2', 'stellar', null);
            valid('GBCG42WTVWPO4Q6OZCYI3D6ZSTFSJIXIS6INCIUF23L6VN3ADE4337AP', 'stellar', null);
            valid('GDFX463YPLCO2EY7NGFMI7SXWWDQAMASGYZXCG2LATOF3PP5NQIUKBPT', 'stellar', null);
            valid('GBXEODUMM3SJ3QSX2VYUWFU3NRP7BQRC2ERWS7E2LZXDJXL2N66ZQ5PT', 'stellar', null);
            valid('GAJHORKJKDDEPYCD6URDFODV7CVLJ5AAOJKR6PG2VQOLWFQOF3X7XLOG', 'stellar', null);
            valid('GACXQEAXYBEZLBMQ2XETOBRO4P66FZAJENDHOQRYPUIXZIIXLKMZEXBJ', 'stellar', null);
            valid('GDD3XRXU3G4DXHVRUDH7LJM4CD4PDZTVP4QHOO4Q6DELKXUATR657OZV', 'stellar', null);
            valid('GDTYVCTAUQVPKEDZIBWEJGKBQHB4UGGXI2SXXUEW7LXMD4B7MK37CWLJ', 'stellar', null);
        });

        it('should return true for correct xtz(tezos) address', function () {
            valid('tz1Lhf4J9Qxoe3DZ2nfe8FGDnvVj7oKjnMY6', 'xtz', null);
            valid('tz1PyxsQ7xVTa5J7gtBeT7pST5Zi5nk5GSjg', 'xtz', null);
            valid('tz1LcuQHNVQEWP2fZjk1QYZGNrfLDwrT3SyZ', 'xtz', null);
            valid('tz1Lhf4J9Qxoe3DZ2nfe8FGDnvVj7oKjnMY6', 'xtz', null);
            valid('tz1RR6wETy9BeXG3Fjk25YmkSMGHxTtKkhpX', 'xtz', null);
            valid('tz1h3rQ8wBxFd8L9B3d7Jhaawu6Z568XU3xY', 'xtz', null);
            valid('KT1EM2LvxxFGB3Svh9p9HCP2jEEYyHjABMbK', 'xtz', null);
        });

        it('should return true for correct eos addresses', function () {
            valid('bittrexacct1', 'eos', null);
            valid('binancecleos', 'eos', null);
            valid('123456789012', 'eos', null);
            valid('12345678.012', 'eos', null);
        });

        it('should return true for correct vet addresses', function () {
            valid('0xa7E43b445cF68CAa143a884AF673121447F29EAe', 'vet', null);
            valid('0x46B8aABa5Eaa84Dc074c350eD57D8b3c35B90E09', 'VeChain', null);
            valid('0x6d57D1697277C9Bb01A5265EC00558A639CA308A', 'VET', null);
        });

        it('should return true for correct dot addresses', function () {
            valid('1iQPKJmghHbrRhUiMt2cNEuxYbR6S9vYtJKqYvE4PNR9WDB', 'dot', null);
            valid('1FRMM8PEiWXYax7rpS6X4XZX1aAAxSWx1CrKTyrVYhV24fg', 'dot', null);
            valid('5CK8D1sKNwF473wbuBP6NuhQfPaWUetNsWUNAAzVwTfxqjfr', 'dot', null);
            valid('CpjsLDC1JFyrhm3ftC9Gs4QoyrkHKhZKtK7YqGTRFtTafgp', 'dot', null);
            valid('15FKUKXC6kwaXxJ1tXNywmFy4ZY6FoDFCnU3fMbibFdeqwGw', 'dot', null);
            valid('CxDDSH8gS7jecsxaRL9Txf8H5kqesLXAEAEgp76Yz632J9M', 'dot', null);
        });

        it('should return true for correct cro addresses', function () {
            valid('cro1yjjlx5qsrj5rxn5xtd5rkm6dcqzlchxkrvsmg6', 'cro', null);
            valid('cro1mwdzawjd27uku0cqf8zngxfcycd292u353xe7v', 'cro', null);
            valid('tcro1mz5rdtf9wufwkh8te2zww7twtmna6rhl2qlhlc', 'cro', { networkType: 'testnet' });
            valid('tcro1mz5rdtf9wufwkh8te2zww7twtmna6rhl2qlhlc', 'cro', { networkType: 'testnet' });

            invalid('bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t4', 'cro', null);
            invalid('cro1mwdzawjd27uku0cqf8zngxfcycd292u353xe77', 'cro', null);
            invalid('tcro1mz5rdtf9wufwkh8te2zww7twtmna6rhl2qlhlc', 'cro', null);
            invalid('cromwdzawjd27uku0cqf8zngxfcycd292u353xe7v1', 'cro', null);
        });

        it('should return true for correct monacoin addresses', function () {
            valid('MMN1Q1aRVUzanmg9DJjcRYzQSJQoBeQPui', 'mona', null);
            valid('PFMzNYnBm5X4c9qJkJPkfgdCyd9fuuy2vT', 'mona', null);
            valid('PCtN7VUYHW8w4g59BaphrfPs8g7pNgAzxn', 'mona', null);
            valid('MXCcYFGRmsd4d3CcQugFiqG8uarj5tVu76', 'mona', null);
            valid('MNK1pGsBf9WdoE54fZM9VFhkeYHW6VUf2u', 'mona', null);
        });

        it('should return true for correct pivx addresses', function () {
            valid('DJXFW9oJJBUX7QKrG6GKvmTs63MYKzwtpZ', 'pivx', null);
            valid('DEaYb8EHQgyKvX6VXDS3DZQautJrHBmK3T', 'pivx', null);
            valid('DDeCGR3QSgqsBxVR23bJvteiyYE34ZmxAc', 'pivx', null);
            valid('DSqQM8DPpBHHoZXHgRdwmaf6hZPEoZcFkh', 'pivx', null);
        });

        it('should return true for correct solarcoin addresses', function () {
            valid('8VxVLzwB26E2YZZ82o1NcQe96QSM2z6GwW', 'slr', null);
            valid('8YW5qcTjeyqX5kESsqu2BUdXiedgssegtQ', 'SolarCoin', null);
        });

        it('should return true for correct tether addresses', function () {
            valid('3MbYQMMmSkC3AgWkj9FMo5LsPTW1zBTwXL', 'usdt', null);
            valid('1KdXaqcBeoMAFVAPwTmYvDbEq6RnvNPF6J', 'tether', null);
        });

        it('should return true for correct expanse addresses', function () {
            valid('0xbab463743603a253bdf1f84975b1a9517505ae05', 'exp', null);
            valid('0x5d0777cb5d6977873904864c6ab531f4b3261f0b', 'expanse', null);
        });

        it('should return true for correct waves addresses', function () {
            valid('3P93mVrYnQ4ahaRMYwA2BeWY32eDxTpLVEs', 'waves', null);
            valid('3P4eeU7v1LMHQFwwT2GW9W99c6vZyytHajj', 'waves', null);

            valid('3Myrq5QDgRq3nBVRSSv9UYrP36xTtpJND5y', 'waves', { networkType: 'testnet' });
            valid('3My3KZgFQ3CrVHgz6vGRt8687sH4oAA1qp8', 'waves', { networkType: 'testnet' });
        });

        it('should return true for correct nano addresses', function () {
            valid('xrb_3t6k35gi95xu6tergt6p69ck76ogmitsa8mnijtpxm9fkcm736xtoncuohr3', 'nano', null);
            valid('xrb_13ezf4od79h1tgj9aiu4djzcmmguendtjfuhwfukhuucboua8cpoihmh8byo', 'nano', null);
            valid('xrb_35jjmmmh81kydepzeuf9oec8hzkay7msr6yxagzxpcht7thwa5bus5tomgz9', 'nano', null);
            valid('xrb_1111111111111111111111111111111111111111111111111111hifc8npp', 'nano', null);
            valid('xrb_1ipx847tk8o46pwxt5qjdbncjqcbwcc1rrmqnkztrfjy5k7z4imsrata9est', 'nano', null);
            valid('xrb_3wm37qz19zhei7nzscjcopbrbnnachs4p1gnwo5oroi3qonw6inwgoeuufdp', 'nano', null);
            valid('xrb_3arg3asgtigae3xckabaaewkx3bzsh7nwz7jkmjos79ihyaxwphhm6qgjps4', 'nano', null);
            valid('xrb_1f5e4w33ndqbkx4bw5jtp13kp5xghebfxcmw9hdt1f7goid1s4373w6tjmgu', 'nano', null);
            valid('xrb_1q79ahdr36uqn38p5tp5sqwkn73rnpj1k8obtuetdbjcx37d5gahhd1u9cuh', 'nano', null);
            valid('nano_1q79ahdr36uqn38p5tp5sqwkn73rnpj1k8obtuetdbjcx37d5gahhd1u9cuh', 'nano', null);
        });

        it('should return true for correct siacoin addresses', function () {
            valid(
                'a9b01c85163638682b170d82de02b8bb99ba86092e9ab1b0d25111284fe618e93456915820f1',
                'siacoin', null
            )
            valid(
                'a9b01c85163638682b170d82de02b8bb99ba86092e9ab1b0d25111284fe618e93456915820f1',
                'siacoin', null
            )
            valid(
                'ab0c327982abfcc6055a6c9551589167d8a73501aca8769f106371fbc937ad100c955c3b7ba9',
                'siacoin', null
            )
            valid(
                'ffe1308c044ade30392a0cdc1fd5a4dbe94f9616a95faf888ed36123d9e711557aa497530373',
                'siacoin', null
            )
        })

        it('should return true for correct lbry addresses', function () {
            valid('bNEMVqeUZUqTrYUxud5ehnUhtTAiWDXQ5e', 'lbc', null)
            valid('bDb6NmobyDVeNGpizWQQBZkYjKCRQBdKdG', 'LBC', null)
            valid('bTFXPcV3a8iVDezogvHTHezWZ1mZGWpPDc', 'lbc', null)
            valid('bK2uEVn6UuwjCTUZ1Dfj5HhWYi9BtqZDDm', 'LBRY Credits', null)
        })

        it('should return true for correct nem addresses', function () {
            valid('NBZMQO7ZPBYNBDUR7F75MAKA2S3DHDCIFG775N3D', 'xem', null);
            valid('TDWTRGT6GVWCV7GRWFNI45S53PGOJBKNUF3GE6PB', 'xem', { networkType: 'testnet' });
        });

        it('should return true for correct lsk addresses', function () {
            valid('469226551L', 'lsk', null);
            valid('15823701926930889868L', 'lsk', null);
            valid('1657699692452120239L', 'lsk', null);
            valid('555666666999992L', 'lsk', null);
            valid('6853061742992593192L', 'lsk', null);
            valid('530464791801L', 'lsk', null);
        });

        it('should return true for correct stellar addresses', function () {
            valid('GBBM6BKZPEHWYO3E3YKREDPQXMS4VK35YLNU7NFBRI26RAN7GI5POFBB', 'stellar', null);
            valid('GB7KKHHVYLDIZEKYJPAJUOTBE5E3NJAXPSDZK7O6O44WR3EBRO5HRPVT', 'stellar', null);
            valid('GD6WVYRVID442Y4JVWFWKWCZKB45UGHJAABBJRS22TUSTWGJYXIUR7N2', 'stellar', null);
            valid('GBCG42WTVWPO4Q6OZCYI3D6ZSTFSJIXIS6INCIUF23L6VN3ADE4337AP', 'stellar', null);
            valid('GDFX463YPLCO2EY7NGFMI7SXWWDQAMASGYZXCG2LATOF3PP5NQIUKBPT', 'stellar', null);
            valid('GBXEODUMM3SJ3QSX2VYUWFU3NRP7BQRC2ERWS7E2LZXDJXL2N66ZQ5PT', 'stellar', null);
            valid('GAJHORKJKDDEPYCD6URDFODV7CVLJ5AAOJKR6PG2VQOLWFQOF3X7XLOG', 'stellar', null);
            valid('GACXQEAXYBEZLBMQ2XETOBRO4P66FZAJENDHOQRYPUIXZIIXLKMZEXBJ', 'stellar', null);
            valid('GDD3XRXU3G4DXHVRUDH7LJM4CD4PDZTVP4QHOO4Q6DELKXUATR657OZV', 'stellar', null);
            valid('GDTYVCTAUQVPKEDZIBWEJGKBQHB4UGGXI2SXXUEW7LXMD4B7MK37CWLJ', 'xlm', null);
            valid('GCCVYKDNQP7NGNTR42SYPMQUZIFTPJUJHXM6JIXQMDLXMCC3ZYOV6AG3', 'xlm', { networkType: 'testnet' });
        });

        it('should return true for correct solana addresses', function () {
            valid('833XorXTTx5iya5B3Tr6iqEs9GbRuvVfwyLCP2vpdzhq', 'solana', null);
            valid('6ZRCB7AAqGre6c72PRz3MHLC73VMYvJ8bi9KHf1HFpNk', 'sol', null);
            valid('HgyXhqapicB8zoyyFQ23oUwwFrBACDyDc7bqUuvnEELM', 'sol', null);
            valid('833XorXTTx5iya5B3Tr6iqEs9GbRuvVfwyLCP2vpdzhq', 'sol', { networkType: 'testnet' });

            valid('69UwBV4LPg7hHUS5JXiXyfgVnESmDKe8KJppsLj8pRU', 'sol', null);
            valid('G4qGCGF4vWGPzYi2pxc2Djvgv3j8NiWaHQMgTVebCX6W', 'sol', null);
        });

        it('should return true for correct iota addresses', function () {
            valid('iota1qpklumdlltn9mkmxmv2j34rtccv06c8eeatqn4fy44a0llzrwzx76t7yjqk', 'miota', null);
            invalid('1qpklumdlltn9mkmxmv2j34rtccv06c8eeatqn4fy44a0llzrwzx76t7yjqk', 'miota', null);
        });

        it('should return true for correct monero addresses', function () {
            invalid('47zQ5LAivg6hNCgijXSEFVLX7mke1bgM6YGLFaANDoJbgXDymcAAZvvMNt2PmMpqEe5qRy2zyfMYXdwpmdyitiFh84xnPG2', 'monero', null);
            invalid('48bWuoDG75CXMDHbmPEvUF2hm1vLDic7ZJ7hqRkL65QR9p13AQAX4eEACXNk4YP115Q4KRVZnAvmMBHrcGfv9FvKPZnH6vH', 'XMR',  null);
            valid('A2be3UvzMtkJtxRYgcCbQt2y7Rp2eLVGqNTWfZeankrWimSMM4y7uMP6B9oAZaHsXTj8KFSerkSkkVRuEuEca9QM8VhxCNU', 'monero', { networkType: 'testnet' });

            //integrated addresses
            invalid('4Gd4DLiXzBmbVX2FZZ3Cvu6fUaWACup1qDowprUCje1kSP4FmbftiJMSfV8kWZXNqmVwj4m52xqtgFNUudVmsmGkGvkLcCibWfVUfUFVB7', 'monero', null);
            invalid('4J5sF94AzXgFgx8LuWc9dcWkJkGkD3cL3L2AuhX6QA9jFvSxxj6QhHqHXqM2b2Go7G8RyDzEbHxYd9G26XUUbuJChipEyBz9fENMU2Ua9b', 'XMR', null);
        });
    });

    describe('invalid results', function () {
        function commonTests(currency) {
            invalid('', currency, null); //reject blank
            invalid('%%@', currency, null); //reject invalid base58 string
            invalid('1A1zP1ePQGefi2DMPTifTL5SLmv7DivfNa', currency, null); //reject invalid address
            invalid('bd839e4f6fadb293ba580df5dea7814399989983', currency, null);  //reject transaction id's
            //testnet
            invalid('', currency, 'testnet'); //reject blank
            invalid('%%@', currency, 'testnet'); //reject invalid base58 string
            invalid('1A1zP1ePQGefi2DMPTifTL5SLmv7DivfNa', currency, { networkType: 'testnet' }); //reject invalid address
            invalid('bd839e4f6fadb293ba580df5dea7814399989983', currency, { networkType: 'testnet' });  //reject transaction id's
        }

        it('should return false for incorrect bitcoin addresses', function () {
            commonTests('bitcoin');
        });

        it('should return false for incorrect bitcoincash addresses', function () {
            commonTests('bitcoincash');

            // bch addresses
            invalid('bc1ql08eyrk03qytqc5pdp5fnwpfh0x3y3k2skauvd', 'bitcoincash', { networkType: 'both' });
        });

        it('should return false for incorrect litecoin addresses', function () {
            commonTests('litecoin');
        });

        it('should return false for incorrect peercoin addresses', function () {
            commonTests('peercoin');
        });

        it('should return false for incorrect dogecoin addresses', function () {
            commonTests('dogecoin');
        });

        it('should return false for incorrect beavercoin addresses', function () {
            commonTests('beavercoin');
        });

        it('should return false for incorrect freicoin addresses', function () {
            commonTests('freicoin');
        });

        it('should return false for incorrect protoshares addresses', function () {
            commonTests('protoshares');
        });

        it('should return false for incorrect megacoin addresses', function () {
            commonTests('megacoin');
        });

        it('should return false for incorrect primecoin addresses', function () {
            commonTests('primecoin');
        });

        it('should return false for incorrect auroracoin addresses', function () {
            commonTests('auroracoin');
        });

        it('should return false for incorrect namecoin addresses', function () {
            commonTests('namecoin');
        });

        it('should return false for incorrect biocoin addresses', function () {
            commonTests('biocoin');
        });

        it('should return false for incorrect garlicoin addresses', function () {
            commonTests('garlicoin');
        });

        it('should return false for incorrect vertcoin addresses', function () {
            commonTests('vertcoin');
        });

        it('should return false for incorrect bitcoingold addresses', function () {
            commonTests('bitcoingold');
        });

        it('should return false for incorrect decred addresses', function () {
            commonTests('decred');
        });

        it('should return false for incorrect monacoin addresses', function () {
            commonTests('mona');
        });

        it('should return false for incorrect solarcoin addresses', function () {
            commonTests('slr');
        });

        it('should return false for incorrect tether addresses', function () {
            commonTests('usdt');
        });

        it('should return false for incorrect expanse addresses', function () {
            commonTests('exp');
        });

        it('should return false for incorrect usdt addresses', function () {
            commonTests('usdt');
        });

        it('should return false for incorrect bankex addresses', function () {
            invalid('1SQHtwR5oJRKLfiWQ2APsAd9miUc4k2ez', 'bankex', null);
            invalid('116CGDLddrZhMrTwhCVJXtXQpxygTT1kHd', 'BKX', null);
            invalid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'bankex', { networkType: 'testnet' });
            invalid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'BKX', { networkType: 'testnet' });
        });

        it('should return false for incorrect digibyte addresses', function () {
            commonTests('digibyte');
        });

        it('should return false for incorrect eip55 addresses', function () {
            invalid('6xAff4d6793F584a473348EbA058deb8caad77a288', 'ethereum', null);
            invalid('0x02fcd51aAbB814FfFe17908fbc888A8975D839A5', 'ethereum', null);
            invalid('0XD1220A0CF47C7B9BE7A2E6BA89F429762E7B9ADB', 'ethereum', null);
            invalid('aFf4d6793f584a473348ebA058deb8caad77a2885', 'ethereum', null);
            invalid('0xff4d6793F584a473', 'ethereum', null);

            invalid('0x02fcd51aAbB814FfFe17908fbc888A8975D839A5', 'ethereumclassic', null);
            invalid('0x02fcd51aAbB814FfFe17908fbc888A8975D839A5', 'etherzero', null);
            invalid('0x02fcd51aAbB814FfFe17908fbc888A8975D839A5', 'callisto', null);
        });

        it('should return false for incorrect ripple addresses', function () {
            invalid('rG1QQv2nh2gr7RCZ1P8YYcBUKCCN633jCN', 'ripple', null);
            invalid('rDTXLQ7ZKZVKz33zJbHjgVShjsBnqMBhMN', 'XRP', null);
            invalid('6xAff4d6793F584a473348EbA058deb8ca', 'ripple', null);
            invalid('DJ53hTyLBdZp2wMi5BsCS3rtEL1ioYUkva', 'ripple', null);
        });

        it('should return false for incorrect dash addresses', function () {
            commonTests('dash');
        });

        it('should return false for incorrect neo addresses', function () {
            commonTests('neo');
            invalid('AR4QmqYENiZAD6oXe7ftm6eDcwtHk7rVTa', 'neo', null);
            invalid('AKDVzYGLczmykdtRaejgvWeZrvdkVEvQ10', 'NEO', null);
        });

        it('should return false for incorrect qtum addresses', function () {
            commonTests('qtum');
            invalid('QNPhBbVhDghASxcUh2vHotQUgNeLRFTcfb', 'qtum', null);
            invalid('QOPhBbVhDghASxcUh2vHotQUgNeLRFTcfa', 'QTUM', null);
        });

        it('should return false for incorrect votecoin addresses', function () {
            commonTests('votecoin');
            invalid('t1Y9yhDa5XEjgfnTgZoKddeSiEN1aoLkQxq', 'votecoin', null);
            invalid('t3Yz22vK5z2LcKEdg16Yv4FFneEL1zg9ojd', 'VOT', null);
            invalid('t2YNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'votecoin', { networkType: 'testnet' });
        });

        it('should return false for incorrect bitcoinz addresses', function () {
            commonTests('bitcoinz');
            invalid('t1Y9yhDa5XEjgfnTgZoKddeSiEN1aoLkQxq', 'bitcoinz', null);
            invalid('t3Yz22vK5z2LcKEdg16Yv4FFneEL1zg9ojd', 'BTCZ', null);
            invalid('t2YNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'bitcoinz', { networkType: 'testnet' });
        });

        it('should return false for incorrect zclassic addresses', function () {
            commonTests('zclassic');
            invalid('t1Y9yhDa5XEjgfnTgZoKddeSiEN1aoLkQxq', 'zclassic', null);
            invalid('t3Yz22vK5z2LcKEdg16Yv4FFneEL1zg9ojd', 'ZCL', null);
            invalid('t2YNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'zclassic', { networkType: 'testnet' });
        });

        it('should return false for incorrect hush addresses', function () {
            invalid('t1Y9yhDa5XEjgfnTgZoKddeSiEN1aoLkQxq', 'hush', null);
            invalid('t3Yz22vK5z2LcKEdg16Yv4FFneEL1zg9ojd', 'HUSH', null);
            invalid('t2YNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'hush', { networkType: 'testnet' });
        });

        it('should return false for incorrect zcash addresses', function () {
            commonTests('zcash');
            invalid('t1Y9yhDa5XEjgfnTgZoKddeSiEN1aoLkQxq', 'zcash', null);
            invalid('t3Yz22vK5z2LcKEdg16Yv4FFneEL1zg9ojd', 'ZEC', null);
            invalid('t2YNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'zcash', { networkType: 'testnet' });
        });

        it('should return false for incorrect bitcoinprivate addresses', function () {
            commonTests('bitcoinprivate');
            invalid('b1Y4XXPFhwMb1SP33yhzn3h9qWXjujkgep4', 'bitcoinprivate', null);
        });

        it('should return false for incorrect snowgem addresses', function () {
            commonTests('snowgem');
            invalid('s1Yx7WBkjB4UH6qQjPp6Ysmtr1C1JiTK2Yw', 'snowgem', null);
            invalid('s3Y27MhkBRt3ha2UuxhjXaYF4DCnttTMnL1', 'SNG', null);
            invalid('t2YNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'snowgem', { networkType: 'testnet' });
        });

        it('should return false for incorrect zencash addresses', function () {
            commonTests('zencash');
            invalid('znYiGGfYRepxkBjXYvA2kFrXiC351i9ta4z', 'zencash', null);
            invalid('zsYEdGnZCQ9G86LZFtbynMn1hYTVhn6eYCL', 'ZEN', null);
            invalid('ztYWMDLWjbruCJxKmmfAZiT6QAQdiv5F291', 'zencash', { networkType: 'testnet' });
        });

        it('should return false for incorrect komodo addresses', function () {
            commonTests('komodo');
            invalid('R9Y5HirAzqDcWrWGiJEL115dpV3QB3hobH', 'komodo', null);
            invalid('RAYj2KKVUohTu3hVdNJ4U6hQi7TNawpacH', 'KMD', null);
            invalid('t2YNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'komodo', { networkType: 'testnet' });
        });

        it('should return false for incorrect cardano addresses', function () {
            commonTests('cardano');
            invalid('Ae2tdPwUPEYxYNJw1He1esdZYvjmr4NtPzUsGTiqL9zd8ohjZYQcwu6lom7', 'cardano', null);
            invalid('DdzFFzCqrhsfdzUZxvuBkhV8Lpm9p43p9ubh79GCTkxJikAjKh51qhtCFMqUniC5tv5ZExyvSmAte2Du2tGimavSo6qSgXbjiy8qZRTg1', 'cardano', null);
            invalid('DdzFFzCqrhsfdzUZxvuBkhV8Lpm9p43p9ubh79GCTkxJikAjKh51qhtCFMqUniC5tv5ZExyvSmAte2Du2tGimavSo6qSgXbjiy8qZRT', 'ada', null);

            invalid('adrr1qxy3w62dupy9pzmpdfzxz4k240w5vawyagl5m9djqquyymrtm3grn7gpnjh7rwh2dy62hk8639lt6kzn32yxq960usnq9pexvt', 'cardano', null);
            invalid('addr2qxy3w62dupy9pzmpdfzxz4k240w5vawyagl5m9djqquyymrtm3grn7gpnjh7rwh2dy62hk8639lt6kzn32yxq960usnq9pexvt', 'cardano', { networkType: 'prod' });
            invalid('addr1skemppmfevyk0lshu2w8j34707s3t3t58a04xcx5ccevrcmvpmxg2qt4pk0', 'cardano', { networkType: 'testnet' });

        });

        it('should return false for incorrect waves addresses', function () {
            commonTests('waves');
            invalid('3P93mVrYnQ4ahaRMYwA2BeWY32eDxTpLVEs1', 'waves', null);
            invalid('3P4eeU7v1LMHQFwwT2GW9W99c6vZyytHaj', 'waves', null);
            invalid('2P93mVrYnQ4ahaRMYwA2BeWY32eDxTpLVEs', 'waves', null);

            invalid('3Myrq5QDgRq3nBVRSSv9UYRP36xTtpJND5y', 'waves', { networkType: 'testnet' });
            invalid('3My3KZgFQ3CrVHgz6vGRt8787sH4oAA1qp8', 'waves', { networkType: 'testnet' });
        });

        it('should return false for incorrect nano addresses', function () {
            commonTests('nano');
            invalid('xrb_1f5e4w33ndqbkx4bw5jtp13kp5xghebfxcmw9hdt1f7goid1s4373w6tjdgu', 'nano', null);
            invalid('nano_1f5e4w33ndqbkx4bw5jtp13kp5xghebfxcmw9hdt1f7goid1s4373w6tjdgu', 'nano', null);
            invalid('xrb_1111111112111111111111111111111111111111111111111111hifc8npp', 'nano', null);
            invalid('nano_111111111111111111111111111111111111111111111111111hifc8npp', 'nano', null);
        });

        it('should return false for incorrect siacoin addresses', function () {
            commonTests('siacoin')
            invalid(
                'ffe1308c044ade30392a0cdc1fd5a4dbe94f9616a95faf888ed36123d9e711557aa497530372',
                'siacoin', null
            )
        })

        it('should return false for incorrect lbry addresses', function () {
            commonTests('lbc')
            invalid('ffe1308c044ade30392a0cdc1fd5a4dbe94f9616a95faf888ed36123d9e711557aa497530372', 'lbc', null)
        })

        it('should return false for incorrect tron addresses', function () {
            commonTests('trx');
            invalid('xrb_1111111112111111111111111111111111111111111111111111hifc8npp', 'trx', null);
            invalid('TNDzfERDpxLDS2w1q6yaFC7pzqaSQ3Bg31', 'trx', null);
        });

        it('should return false for incorrect nem addresses', function () {
            commonTests('nem');
            invalid('xrb_1111111112111111111111111111111111111111111111111111hifc8npp', 'nem', null);
            invalid('TNDzfERDpxLDS2w1q6yaFC7pzqaSQ3Bg31', 'nem', null);

            invalid('3Myrq5QDgRq3nBVRSSv9UYRP36xTtpJND5y', 'nem', { networkType: 'testnet' });
            invalid('3My3KZgFQ3CrVHgz6vGRt8787sH4oAA1qp8', 'nem', { networkType: 'testnet' });
        });

        it('should return false for incorrect lsk addresses', function () {
            commonTests('lsk');
            invalid('xrb_1111111112111111111111111111111111111111111111111111hifc8npp', 'lsk', null);
            invalid('TNDzfERDpxLDS2w1q6yaFC7pzqaSQ3Bg31', 'lsk', null);

            invalid('158237019269308898689L', 'lsk', null);
            invalid('158237A192B930C898689L', 'lsk', null);
        });

        it('should return false for incorrect bsv addresses', function () {
            commonTests('bsv');
            invalid('xrb_1111111112111111111111111111111111111111111111111111hifc8npp', 'bsv', null);
            invalid('TNDzfERDpxLDS2w1q6yaFC7pzqaSQ3Bg31', 'bsv', null);

            invalid('158237019269308898689L', 'bsv', null);
            invalid('158237A192B930C898689L', 'bsv', null);
            invalid('bitcoin:qzpuefrpg3kl2ykQe52rxn96pd3Kp4qudywr5pyrsf', 'bsv', null);
            invalid('pzuefrpg3kl2ykqe52rxn96pd3kp4qudywr5py', 'bsv', null);
            invalid('rlt2c2wuxr644encp3as0hygtj9djrsaumku3cex5', 'bsv', null);
            invalid('qra607y4wnkmnpy3wcmrxmltzkrxywcq85c7watpdx09', 'bsv', null);
        });

        it('should return false for incorrect stellar addresses', function () {
            commonTests('stellar');
            invalid('SBGWKM3CD4IL47QN6X54N6Y33T3JDNVI6AIJ6CD5IM47HG3IG4O36XCU', 'stellar', null);
            invalid('GBPXX0A5N4JYPESHAADMQKBPWZWQDQ64ZV6ZL2S3LAGW4SY7NTCMWIVL', 'stellar', null);
            invalid('GCFZB6L25D26RQFDWSSBDEYQ32JHLRMTT44ZYE3DZQUTYOL7WY43PLBG++', 'stellar', null);
            invalid('GADE5QJ2TY7S5ZB65Q43DFGWYWCPHIYDJ2326KZGAGBN7AE5UY6JVDRRA', 'stellar', null);
            invalid('GB6OWYST45X57HCJY5XWOHDEBULB6XUROWPIKW77L5DSNANBEQGUPADT2', 'stellar', null);
            invalid('GB6OWYST45X57HCJY5XWOHDEBULB6XUROWPIKW77L5DSNANBEQGUPADT2T', 'stellar', null);
            invalid('GDXIIZTKTLVYCBHURXL2UPMTYXOVNI7BRAEFQCP6EZCY4JLKY4VKFNLT', 'stellar', null);
            invalid('SAB5556L5AN5KSR5WF7UOEFDCIODEWEO7H2UR4S5R62DFTQOGLKOVZDY', 'stellar', null);
            invalid('gWRYUerEKuz53tstxEuR3NCkiQDcV4wzFHmvLnZmj7PUqxW2wt', 'stellar', null);
            invalid('g4VPBPrHZkfE8CsjuG2S4yBQNd455UWmk', 'stellar', null);
        });

        it('should return false for incorrect xtz(tezos) address', function () {
            commonTests('xtz');
            invalid('SBGWKM3CD4IL47QN6X54N6Y33T3JDNVI6AIJ6CD5IM47HG3IG4O36XCU', 'xtz', null);
            invalid('GBPXX0A5N4JYPESHAADMQKBPWZWQDQ64ZV6ZL2S3LAGW4SY7NTCMWIVL', 'xtz', null);
            invalid('GCFZB6L25D26RQFDWSSBDEYQ32JHLRMTT44ZYE3DZQUTYOL7WY43PLBG', 'xtz', null);
            invalid('tz1RR6wy9BeXG3Fjk25YmkSMGHxTtKkhpX', 'xtz', null);
            invalid('tz1h3rQ8wBxFd8L9B3d7JhaPQawu6Z568XU3xY', 'xtz', null);
            invalid('tz1Lhf4J9Qxoe4DZ2nfe8FGDnvVj7oKjnMY6', 'xtz', null);
            invalid('KT1E2LvxxFGB3Svh9p9HCP2jEEYyHjABMbK', 'xtz', null);

        });

        it('should return false for incorrect eos addresses', function () {
            commonTests('eos');
            invalid('1234567890123', 'eos', null);
            invalid('12345678901', 'eos', null);
            invalid('12345678901@', 'eos', null);
        });

        it('should return false for incorrect solana addresses', function () {
            invalid('833XQoXTx05iya53Tr6iqEs9GbRuvVfwyLCP2vpdzhq', 'solana', null);
            invalid('833XorXTTx5iya5B3Tr6iqEs9GbRuvVfwyLCP2vpdz', 'solana', null);
            invalid('bc1qwqdg6squsna38e46795at95yu9atm8azzmyvckulcc7kytlcckxswvvzej', 'sol', null);
            invalid('Ae2tdPwUPEZKmwoy3AU3cXb5Chnasj6mvVNxV1H11997q3VW5ihbSfQwGpm', 'sol', null);
            invalid('addr1skemppmfevyk0lshu2w8j34707s3t3t58a04xcx5ccevrcmvpmxg2qt4pk0', 'sol', { networkType: 'testnet' });
        });

        it('should return false for incorrect monero addresses', function () {
            commonTests('monero');
            invalid('4AWygwA3hHNE4e4Yr9PtRWJiorXTjZkCi57g4ExYzfXDFFQ8DRFEFyui1dLqVknpqQjGUBdTMbgaFAZaDbrVHdk3GAKBZ3E', 'monero', null);
            invalid('44643dtxcxjgMWEQLo6mh1c4d9Zxx9GbgK9hEj9iGSiFEryCkbwHyJ3JqxZJRqeC3Hb7ZBLKq5NkaJwR1x95EYnR1bTgN6d', 'xmr', null);
            invalid('A17N9ztrxjQD3v3JJtHGvHVnq6BAbujDNEuensB6PFwBYFpkjAicih8hDtX76HBuEag5NeaCuMZmRMe6eE5NMRGxFTQn8nJ', 'monero', { networkType: 'testnet' });

            //integrated
            invalid('4LNSCKNSTPNbJYkyAEgL966eHJHLDHiq1PpwKoiFBybcSqNGYfLBJApC62uQEeGAFxfYEd29uXBBrJFo7DhKqFVNi3GhmN79EtD5dgycYz', 'monero', null);
            invalid('4JpzTwf3i1GeCV76beVr19179oa8j1L8xNSC1bXMtAxxdf4aTTLqubL8EvXfQmUGKt9MMigFtKy91VtoTTSfg1LU7LocPruT6KcGC9RKJV', 'xmr', null);
        });
    });

});

describe('invalid results', function () {
    function commonTests(currency) {
        invalid('', currency, null); //reject blank
        invalid('%%@', currency, null); //reject invalid base58 string
        invalid('1A1zP1ePQGefi2DMPTifTL5SLmv7DivfNa', currency, null); //reject invalid address
        invalid('bd839e4f6fadb293ba580df5dea7814399989983', currency, null);  //reject transaction id's
        //testnet
        invalid('', currency, { networkType: 'testnet' }); //reject blank
        invalid('%%@', currency, { networkType: 'testnet' }); //reject invalid base58 string
        invalid('1A1zP1ePQGefi2DMPTifTL5SLmv7DivfNa', currency, { networkType: 'testnet' }); //reject invalid address
        invalid('bd839e4f6fadb293ba580df5dea7814399989983', currency, { networkType: 'testnet' });  //reject transaction id's
    }

    it('should return false for incorrect bitcoin addresses', function () {
        commonTests('bitcoin');
    });

    it('should return false for incorrect bitcoincash addresses', function () {
        commonTests('bitcoincash');
    });

    it('should return false for incorrect litecoin addresses', function () {
        commonTests('litecoin');
    });

    it('should return false for incorrect peercoin addresses', function () {
        commonTests('peercoin');
    });

    it('should return false for incorrect dogecoin addresses', function () {
        commonTests('dogecoin');
    });

    it('should return false for incorrect beavercoin addresses', function () {
        commonTests('beavercoin');
    });

    it('should return false for incorrect freicoin addresses', function () {
        commonTests('freicoin');
    });

    it('should return false for incorrect protoshares addresses', function () {
        commonTests('protoshares');
    });

    it('should return false for incorrect megacoin addresses', function () {
        commonTests('megacoin');
    });

    it('should return false for incorrect primecoin addresses', function () {
        commonTests('primecoin');
    });

    it('should return false for incorrect auroracoin addresses', function () {
        commonTests('auroracoin');
    });

    it('should return false for incorrect namecoin addresses', function () {
        commonTests('namecoin');
    });

    it('should return false for incorrect biocoin addresses', function () {
        commonTests('biocoin');
    });

    it('should return false for incorrect garlicoin addresses', function () {
        commonTests('garlicoin');
    });

    it('should return false for incorrect vertcoin addresses', function () {
        commonTests('vertcoin');
    });

    it('should return false for incorrect bitcoingold addresses', function () {
        commonTests('bitcoingold');
    });

    it('should return false for incorrect decred addresses', function () {
        commonTests('decred');
    });

    it('should return false for incorrect monacoin addresses', function () {
        commonTests('mona');
    });

    it('should return false for incorrect solarcoin addresses', function () {
        commonTests('slr');
    });

    it('should return false for incorrect tether addresses', function () {
        commonTests('usdt');
    });

    it('should return false for incorrect expanse addresses', function () {
        commonTests('exp');
    });

    it('should return false for incorrect usdt addresses', function () {
        commonTests('usdt');
    });

    it('should return false for incorrect bankex addresses', function () {
        invalid('1SQHtwR5oJRKLfiWQ2APsAd9miUc4k2ez', 'bankex', null);
        invalid('116CGDLddrZhMrTwhCVJXtXQpxygTT1kHd', 'BKX', null);
        invalid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'bankex', { networkType: 'testnet' });
        invalid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'BKX', { networkType: 'testnet' });
    });

    it('should return false for incorrect digibyte addresses', function () {
        commonTests('digibyte');
    });

    it('should return false for incorrect eip55 addresses', function () {
        invalid('6xAff4d6793F584a473348EbA058deb8caad77a288', 'ethereum', null);
        invalid('0x02fcd51aAbB814FfFe17908fbc888A8975D839A5', 'ethereum', null);
        invalid('0XD1220A0CF47C7B9BE7A2E6BA89F429762E7B9ADB', 'ethereum', null);
        invalid('aFf4d6793f584a473348ebA058deb8caad77a2885', 'ethereum', null);
        invalid('0xff4d6793F584a473', 'ethereum', null);

        invalid('0x02fcd51aAbB814FfFe17908fbc888A8975D839A5', 'ethereumclassic', null);
        invalid('0x02fcd51aAbB814FfFe17908fbc888A8975D839A5', 'etherzero', null);
        invalid('0x02fcd51aAbB814FfFe17908fbc888A8975D839A5', 'callisto', null);
    });

    it('should return false for incorrect ripple addresses', function () {
        invalid('rG1QQv2nh2gr7RCZ1P8YYcBUKCCN633jCN', 'ripple', null);
        invalid('rDTXLQ7ZKZVKz33zJbHjgVShjsBnqMBhMN', 'XRP', null);
        invalid('6xAff4d6793F584a473348EbA058deb8ca', 'ripple', null);
        invalid('DJ53hTyLBdZp2wMi5BsCS3rtEL1ioYUkva', 'ripple', null);
    });

    it('should return false for incorrect baby ripple addresses', function () {
        invalid('rG1QQv2nh2gr7RCZ1P8YYcBUKCCN633jCN', 'babyxrp', null);
        invalid('rDTXLQ7ZKZVKz33zJbHjgVShjsBnqMBhMN', 'babyxrp', null);
        invalid('6xAff4d6793F584a473348EbA058deb8ca', 'babyxrp', null);
        invalid('DJ53hTyLBdZp2wMi5BsCS3rtEL1ioYUkva', 'babyxrp', null);
    });

    it('should return false for incorrect dash addresses', function () {
        commonTests('dash');
    });

    it('should return false for incorrect neo addresses', function () {
        commonTests('neo');
        invalid('AR4QmqYENiZAD6oXe7ftm6eDcwtHk7rVTa', 'neo', null);
        invalid('AKDVzYGLczmykdtRaejgvWeZrvdkVEvQ10', 'NEO', null);
    });

    it('should return false for incorrect qtum addresses', function () {
        commonTests('qtum');
        invalid('QNPhBbVhDghASxcUh2vHotQUgNeLRFTcfb', 'qtum', null);
        invalid('QOPhBbVhDghASxcUh2vHotQUgNeLRFTcfa', 'QTUM', null);
    });

    it('should return false for incorrect votecoin addresses', function () {
        commonTests('votecoin');
        invalid('t1Y9yhDa5XEjgfnTgZoKddeSiEN1aoLkQxq', 'votecoin', null);
        invalid('t3Yz22vK5z2LcKEdg16Yv4FFneEL1zg9ojd', 'VOT', null);
        invalid('t2YNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'votecoin', { networkType: 'testnet' });
    });

    it('should return false for incorrect bitcoinz addresses', function () {
        commonTests('bitcoinz');
        invalid('t1Y9yhDa5XEjgfnTgZoKddeSiEN1aoLkQxq', 'bitcoinz', null);
        invalid('t3Yz22vK5z2LcKEdg16Yv4FFneEL1zg9ojd', 'BTCZ', null);
        invalid('t2YNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'bitcoinz', { networkType: 'testnet' });
    });

    it('should return false for incorrect zclassic addresses', function () {
        commonTests('zclassic');
        invalid('t1Y9yhDa5XEjgfnTgZoKddeSiEN1aoLkQxq', 'zclassic', null);
        invalid('t3Yz22vK5z2LcKEdg16Yv4FFneEL1zg9ojd', 'ZCL', null);
        invalid('t2YNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'zclassic', { networkType: 'testnet' });
    });

    it('should return false for incorrect hush addresses', function () {
        invalid('t1Y9yhDa5XEjgfnTgZoKddeSiEN1aoLkQxq', 'hush', null);
        invalid('t3Yz22vK5z2LcKEdg16Yv4FFneEL1zg9ojd', 'HUSH', null);
        invalid('t2YNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'hush', { networkType: 'testnet' });
    });

    it('should return false for incorrect zcash addresses', function () {
        commonTests('zcash');
        invalid('t1Y9yhDa5XEjgfnTgZoKddeSiEN1aoLkQxq', 'zcash', null);
        invalid('t3Yz22vK5z2LcKEdg16Yv4FFneEL1zg9ojd', 'ZEC', null);
        invalid('t2YNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'zcash', { networkType: 'testnet' });
    });

    it('should return false for incorrect bitcoinprivate addresses', function () {
        commonTests('bitcoinprivate');
        invalid('b1Y4XXPFhwMb1SP33yhzn3h9qWXjujkgep4', 'bitcoinprivate', null);
    });

    it('should return false for incorrect snowgem addresses', function () {
        commonTests('snowgem');
        invalid('s1Yx7WBkjB4UH6qQjPp6Ysmtr1C1JiTK2Yw', 'snowgem', null);
        invalid('s3Y27MhkBRt3ha2UuxhjXaYF4DCnttTMnL1', 'SNG', null);
        invalid('t2YNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'snowgem', { networkType: 'testnet' });
    });

    it('should return false for incorrect zencash addresses', function () {
        commonTests('zencash');
        invalid('znYiGGfYRepxkBjXYvA2kFrXiC351i9ta4z', 'zencash', null);
        invalid('zsYEdGnZCQ9G86LZFtbynMn1hYTVhn6eYCL', 'ZEN', null);
        invalid('ztYWMDLWjbruCJxKmmfAZiT6QAQdiv5F291', 'zencash', { networkType: 'testnet' });
    });

    it('should return false for incorrect komodo addresses', function () {
        commonTests('komodo');
        invalid('R9Y5HirAzqDcWrWGiJEL115dpV3QB3hobH', 'komodo', null);
        invalid('RAYj2KKVUohTu3hVdNJ4U6hQi7TNawpacH', 'KMD', null);
        invalid('t2YNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'komodo', { networkType: 'testnet' });
    });

    it('should return false for incorrect cardano addresses', function () {
        commonTests('cardano');
        invalid('Ae2tdPwUPEYxYNJw1He1esdZYvjmr4NtPzUsGTiqL9zd8ohjZYQcwu6lom7', 'cardano', null);
        invalid('DdzFFzCqrhsfdzUZxvuBkhV8Lpm9p43p9ubh79GCTkxJikAjKh51qhtCFMqUniC5tv5ZExyvSmAte2Du2tGimavSo6qSgXbjiy8qZRTg1', 'cardano', null);
        invalid('DdzFFzCqrhsfdzUZxvuBkhV8Lpm9p43p9ubh79GCTkxJikAjKh51qhtCFMqUniC5tv5ZExyvSmAte2Du2tGimavSo6qSgXbjiy8qZRT', 'ada', null);
    });

    it('should return false for incorrect waves addresses', function () {
        commonTests('waves');
        invalid('3P93mVrYnQ4ahaRMYwA2BeWY32eDxTpLVEs1', 'waves', null);
        invalid('3P4eeU7v1LMHQFwwT2GW9W99c6vZyytHaj', 'waves', null);
        invalid('2P93mVrYnQ4ahaRMYwA2BeWY32eDxTpLVEs', 'waves', null);

        invalid('3Myrq5QDgRq3nBVRSSv9UYRP36xTtpJND5y', 'waves', { networkType: 'testnet' });
        invalid('3My3KZgFQ3CrVHgz6vGRt8787sH4oAA1qp8', 'waves', { networkType: 'testnet' });
    });

    it('should return false for incorrect nano addresses', function () {
        commonTests('nano');
        invalid('xrb_1f5e4w33ndqbkx4bw5jtp13kp5xghebfxcmw9hdt1f7goid1s4373w6tjdgu', 'nano', null);
        invalid('nano_1f5e4w33ndqbkx4bw5jtp13kp5xghebfxcmw9hdt1f7goid1s4373w6tjdgu', 'nano', null);
        invalid('xrb_1111111112111111111111111111111111111111111111111111hifc8npp', 'nano', null);
        invalid('nano_111111111111111111111111111111111111111111111111111hifc8npp', 'nano', null);
    });

    it('should return false for incorrect siacoin addresses', function () {
        commonTests('siacoin')
        invalid(
            'ffe1308c044ade30392a0cdc1fd5a4dbe94f9616a95faf888ed36123d9e711557aa497530372',
            'siacoin', null
        )
    })

    it('should return false for incorrect lbry addresses', function () {
        commonTests('lbc')
        invalid('ffe1308c044ade30392a0cdc1fd5a4dbe94f9616a95faf888ed36123d9e711557aa497530372', 'lbc', null)
    })

    it('should return false for incorrect nem addresses', function () {
        commonTests('nem');
        invalid('xrb_1111111112111111111111111111111111111111111111111111hifc8npp', 'nem', null);
        invalid('TNDzfERDpxLDS2w1q6yaFC7pzqaSQ3Bg31', 'nem', null);

        invalid('3Myrq5QDgRq3nBVRSSv9UYRP36xTtpJND5y', 'nem', { networkType: 'testnet' });
        invalid('3My3KZgFQ3CrVHgz6vGRt8787sH4oAA1qp8', 'nem', { networkType: 'testnet' });
    });
    //15823701926930889868L
    it('should return false for incorrect lsk addresses', function () {
        commonTests('lsk');
        invalid('xrb_1111111112111111111111111111111111111111111111111111hifc8npp', 'lsk', null);
        invalid('TNDzfERDpxLDS2w1q6yaFC7pzqaSQ3Bg31', 'lsk', null);

        invalid('158237019269308898689L', 'lsk', null);
        invalid('158237A192B930C898689L', 'lsk', null);
    });

    it('should return false for incorrect bsv addresses', function () {
        commonTests('bsv');
        invalid('xrb_1111111112111111111111111111111111111111111111111111hifc8npp', 'bsv', null);
        invalid('TNDzfERDpxLDS2w1q6yaFC7pzqaSQ3Bg31', 'bsv', null);

        invalid('158237019269308898689L', 'bsv', null);
        invalid('158237A192B930C898689L', 'bsv', null);
        invalid('bitcoin:qzpuefrpg3kl2ykQe52rxn96pd3Kp4qudywr5pyrsf', 'bsv', null);
        invalid('pzuefrpg3kl2ykqe52rxn96pd3kp4qudywr5py', 'bsv', null);
        invalid('rlt2c2wuxr644encp3as0hygtj9djrsaumku3cex5', 'bsv', null);
        invalid('qra607y4wnkmnpy3wcmrxmltzkrxywcq85c7watpdx09', 'bsv', null);
    });

    it('should return false for incorrect stellar addresses', function () {
        commonTests('stellar');
        invalid('SBGWKM3CD4IL47QN6X54N6Y33T3JDNVI6AIJ6CD5IM47HG3IG4O36XCU', 'stellar', null);
        invalid('GBPXX0A5N4JYPESHAADMQKBPWZWQDQ64ZV6ZL2S3LAGW4SY7NTCMWIVL', 'stellar', null);
        invalid('GCFZB6L25D26RQFDWSSBDEYQ32JHLRMTT44ZYE3DZQUTYOL7WY43PLBG++', 'stellar', null);
        invalid('GADE5QJ2TY7S5ZB65Q43DFGWYWCPHIYDJ2326KZGAGBN7AE5UY6JVDRRA', 'stellar', null);
        invalid('GB6OWYST45X57HCJY5XWOHDEBULB6XUROWPIKW77L5DSNANBEQGUPADT2', 'stellar', null);
        invalid('GB6OWYST45X57HCJY5XWOHDEBULB6XUROWPIKW77L5DSNANBEQGUPADT2T', 'stellar', null);
        invalid('GDXIIZTKTLVYCBHURXL2UPMTYXOVNI7BRAEFQCP6EZCY4JLKY4VKFNLT', 'stellar', null);
        invalid('SAB5556L5AN5KSR5WF7UOEFDCIODEWEO7H2UR4S5R62DFTQOGLKOVZDY', 'stellar', null);
        invalid('gWRYUerEKuz53tstxEuR3NCkiQDcV4wzFHmvLnZmj7PUqxW2wt', 'stellar', null);
        invalid('g4VPBPrHZkfE8CsjuG2S4yBQNd455UWmk', 'stellar', null);
    });

    it('should return false for incorrect vet addresses', function () {
        commonTests('vet');
        invalid('SBGWKM3CD4IL47QN6X54N6Y33T3JDNVI6AIJ6CD5IM47HG3IG4O36XCU', 'vet', null);
        invalid('Ox46B8aABa5Eaa84Dc074c350eD57D8b3c35B90E09', 'vet', null);
        invalid('0x46b8aABa5Eaa84Dc074c350eD57D8b3c35B90E09', 'vet', null);
    });

    it('should return false for incorrect dot addresses', function () {
        commonTests('dot');
        invalid('1jQPKJmghHbrRhUiMt2cNEuxYbR6S9vYtJKqYvE4PNR9WDB', 'dot', null);
        invalid('1FRMM8PEiWXYax7rpS6X4XZX1aAAxSWx1CrKTyrVYhV24fh', 'dot', null);
        invalid('5CK8D1sKNwF473wbuBP6NuhQfPaWUetNsWUNAAzVwTfxqjf', 'dot', null);
        invalid('pjsLDC1JFyrhm3ftC9Gs4QoyrkHKhZKtK7YqGTRFtTafgp', 'dot', null);
        invalid('15FKUKXC6kwaXxJ1tNywmFy4ZY6FoDFCnU3fMbibFdeqwGw', 'dot', null);
        invalid('CxDDSH8gS7jecsxaRL8Txf8H5kqesLXAEAEgp76Yz632J9M', 'dot', null);
    });


});


