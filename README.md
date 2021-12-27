# crypto-address-validator
Simple wallet address validator for validating Bitcoin and other altcoins addresses in **Typescript** can be used in for example an Angular project.

Forked from [christsim/multicoin-address-validator](https://github.com/christsim/multicoin-address-validator).

Which is forked from [ryanralph/altcoin-address](https://github.com/ryanralph/altcoin-address).

## Installation

### NPM
```
npm install crypto-address-validator
```

## API

##### validate (address [, currency = 'bitcoin'[, networkType = 'prod']])

###### Parameters
* address - Wallet address to validate.
* currency - Currency name or symbol, e.g. `'bitcoin'` (default), `'litecoin'` or `'LTC'`
* options - Use `{ networkType: 'prod' }` (default) to enforce standard address, `{ networkType: 'testnet' }` to enforce testnet address and `'{ networkType: 'both' }'` to enforce nothing.

> Returns true if the address (string) is a valid wallet address for the crypto currency specified, see below for supported currencies.

### Supported crypto currencies

* 0x/zrx `'0x'` or `'zrx'`
* Aave Coin/aave `'Aave Coin'` or `'aave'`
* Aavegotchi/ghst `'Aavegotchi'` or `'ghst'`
* Amp/amp `'Amp'` or `'amp'`
* Aragon/ant `'Aragon'` or `'ant'`
* Audius/audio `'Audius'` or `'audio'`
* Augur/rep `'Augur'` or `'rep'`
* AugurV2/repv2 `'AugurV2'` or `'repv2'`
* AuroraCoin/aur `'AuroraCoin'` or `'aur'`
* Axie Infinity/axs `'Axie Infinity'` or `'axs'`
* Badger DAO/badger `'Badger DAO'` or `'badger'`
* Balancer/bal `'Balancer'` or `'bal'`
* Bancor/bnt `'Bancor'` or `'bnt'`
* Bankex/bkx `'Bankex'` or `'bkx'`
* Basic Attention Token/bat `'Basic Attention Token'` or `'bat'`
* BeaverCoin/bvc `'BeaverCoin'` or `'bvc'`
* BioCoin/bio `'BioCoin'` or `'bio'`
* Bitcoin/btc `'Bitcoin'` or `'btc'`
* Bitcoin SV/bsv `'Bitcoin SV'` or `'bsv'`
* BitcoinCash/bch `'BitcoinCash'` or `'bch'`
* BitcoinGold/btg `'BitcoinGold'` or `'btg'`
* BitcoinPrivate/btcp `'BitcoinPrivate'` or `'btcp'`
* BitcoinZ/btcz `'BitcoinZ'` or `'btcz'`
* BlockTrade/btt `'BlockTrade'` or `'btt'`
* Bluzelle/blz `'Bluzelle'` or `'blz'`
* BTU Protocol/btu `'BTU Protocol'` or `'btu'`
* bZx Protocol/bzrx `'bZx Protocol'` or `'bzrx'`
* Callisto/clo `'Callisto'` or `'clo'`
* Cardano/ada `'Cardano'` or `'ada'`
* Celsius/cel `'Celsius'` or `'cel'`
* Chainlink/link `'Chainlink'` or `'link'`
* Civic/cvc `'Civic'` or `'cvc'`
* Compound/comp `'Compound'` or `'comp'`
* Cred/lba `'Cred'` or `'lba'`
* Crypto.com Coin/cro `'Crypto.com Coin'` or `'cro'`
* Curve DAO Token/crv `'Curve DAO Token'` or `'crv'`
* CUSD/cusd `'CUSD'` or `'cusd'`
* Dash/dash `'Dash'` or `'dash'`
* Decentraland/mana `'Decentraland'` or `'mana'`
* Decred/dcr `'Decred'` or `'dcr'`
* Dent/dent `'Dent'` or `'dent'`
* DigiByte/dgb `'DigiByte'` or `'dgb'`
* District0x/dnt `'District0x'` or `'dnt'`
* DogeCoin/doge `'DogeCoin'` or `'doge'`
* Enjin Coin/enj `'Enjin Coin'` or `'enj'`
* Enzyme/mln `'Enzyme'` or `'mln'`
* EOS/eos `'EOS'` or `'eos'`
* Ethereum/eth `'Ethereum'` or `'eth'`
* EthereumClassic/etc `'EthereumClassic'` or `'etc'`
* Ethereum Name Service/ens `'Ethereum Name Service'` or `'ens'`
* Ethernity Chain/ern `'Ethernity Chain'` or `'ern'`
* EtherZero/etz `'EtherZero'` or `'etz'`
* Expanse/exp `'Expanse'` or `'exp'`
* e-Radix/exrd `'e-Radix'` or `'exrd'`
* Fantom/ftt `'Fantom'` or `'ftm'`
* FirmaChain/fct `'FirmaChain'` or `'fct'`
* FreiCoin/frc `'FreiCoin'` or `'frc'`
* FTX Token/ftt `'FTX Token'` or `'ftt'`
* FUNToken/fun `'FreiCoin'` or `'fun'`
* GameCredits/game `'GameCredits'` or `'game'`
* GarliCoin/grlc `'GarliCoin'` or `'grlc'`
* Gnosis/gno `'Gnosis'` or `'gno'`
* Golem/glm `'Gods Unchained'` or `'gods'`
* Golem/glm `'Golem'` or `'glm'`
* Golem (GNT)/gnt `'Golem (GNT)'` or `'gnt'`
* HedgeTrade/hedg `'HedgeTrade'` or `'hedg'`
* Hegic/hegic `'Hegic'` or `'hegic'`
* Hush/hush `'Hush'` or `'hush'`
* HyperSpace/xsc `'HyperSpace'` or `'xsc'`
* iExec RLC/rlc `'iExec RLC'` or `'rlc'`
* Illuvium/ilv `'Illuvium'` or `'ilv'`
* Injective Protocol/inj `'Injective Protocol'` or `'inj'`
* Komodo/kmd `'Komodo'` or `'kmd'`
* KeeperDAO/rook `'KeeperDAO'` or `'rook'`
* Kyber Network Crystal v2/knc `'Kyber Network Crystal v2'` or `'knc'`
* LBRY Credits/lbc `'LBRY Credits'` or `'lbc'`
* Lisk/lsk `'Lisk'` or `'lsk'`
* LiteCoin/ltc `'LiteCoin'` or `'ltc'`
* Loopring/lrc `'Loopring'` or `'lrc'`
* Loom Network/loom `'Loom Network'` or `'loom'`
* Maker/mkr `'Maker'` or `'mkr'`
* Marlin/pond `'Marlin'` or `'pond'`
* Matchpool/gup `'Matchpool'` or `'gup'`
* Matic/matic `'Matic'` or `'matic'`
* MegaCoin/mec `'MegaCoin'` or `'mec'`
* Melon/mln `'Melon'` or `'mln'`
* Metal/mtl `'Metal'` or `'mtl'`
* MonaCoin/mona `'MonaCoin'` or `'mona'`
* Multi-collateral DAI/dai `'Multi-collateral DAI'` or `'dai'`
* NameCoin/nmc `'NameCoin'` or `'nmc'`
* Nano/nano `'Nano'` or `'nano'`
* Nem/xem `'Nem'` or `'xem'`
* Neo/neo `'Neo'` or `'neo'`
* NeoGas/gas `'NeoGas'` or `'gas'`
* Numeraire/nmr `'Numeraire'` or `'nmr'`
* Ocean Protocol/ocean `'Ocean Protocol'` or `'ocean'`
* Odyssey/ocn `'Odyssey'` or `'ocn'`
* OKB/okb `'OKB'` or `'okb'`
* OmiseGO/omg `'OmiseGO'` or `'omg'`
* Orchid/oxt `'Orchid'` or `'oxt'`
* Origin Protocol/ogn `'Origin Protocol'` or `'ogn'`
* Orion Protocol/orn `'Orion Protocol'` or `'orn'`
* Paxos/pax `'Paxos'` or `'pax'`
* PeerCoin/ppc `'PeerCoin'` or `'ppc'`
* Perpetual Protocol/perp `'PeerCoin'` or `'perp'`
* Phala Network/pha `'Phala Network'` or `'pha'`
* PIVX/pivx `'PIVX'` or `'pivx'`
* Polkadot/dot `'Polkadot'` or `'dot'`
* Polymath/poly `'Polymath'` or `'poly'`
* PrimeCoin/xpm `'PrimeCoin'` or `'xpm'`
* ProtoShares/pts `'ProtoShares'` or `'pts'`
* Pundi X/pundix `'Pundi X'` or `'pundix'`
* Qtum/qtum `'Qtum'` or `'qtum'`
* Quant/qnt `'Quant'` or `'qnt'`
* Quantstamp/qsp `'Quantstamp'` or `'qsp'`
* Quantum Resistant Ledger/qrl `'Quantum Resistant Ledger'` or `'qrl'`
* RaiBlocks/xrb `'RaiBlocks'` or `'xrb'`
* Raiden Network Token/rdn `'Raiden Network Token'` or `'rdn'`
* Rarible/rari `'Rarible'` or `'rari'`
* Reef/reef `'Reef'` or `'reef'`
* Reserve Rights/rsr `'Reserve Rights'` or `'rsr'`
* Ripio Credit Network/rcn `'Ripio Credit Network'` or `'rcn'`
* Ripple/xrp `'Ripple'` or `'xrp'`
* Salt/salt `'Salt'` or `'salt'`
* Serum/srm `'Serum'` or `'srm'`
* Serve/serv `'Serve'` or `'serv'`
* SHIBA INU/shib `'SHIBA INU'` or `'shib'`
* Siacoin/sc `'Siacoin'` or `'sc'`
* SingularityNET/agix `'SingularityNET'` or `'agix'`
* SKALE Network/skl `'SKALE Network'` or `'skl'`
* SnowGem/sng `'SnowGem'` or `'sng'`
* SolarCoin/slr `'SolarCoin'` or `'slr'`
* SOLVE/solve `'SOLVE'` or `'solve'`
* Spendcoin/spnd `'Spendcoin'` or `'spnd'`
* Status/snt `'Status'` or `'snt'`
* Stellar/xlm `'Stellar'` or `'xlm'`
* Storj/storj `'Storj'` or `'storj'`
* Storm/storm `'Storm'` or `'storm'`
* StormX/stmx `'StormX'` or `'stmx'`
* SushiSwap/sushi `'SushiSwap'` or `'sushi'`
* Swarm City/swt `'Swarm City'` or `'swt'`
* Swipe/sxp `'Swipe'` or `'sxp'`
* Synthetix Network/snx `'Synthetix Network'` or `'snx'`
* Tap/xtp `'Tap'` or `'xtp'`
* TEMCO/temco `'TEMCO'` or `'temco'`
* Tellor/trb `'Tellor'` or `'trb'`
* TenX/pay `'TenX'` or `'pay'`
* Tether/usdt `'Tether'` or `'usdt'`
* Terra Virtua Kolect/tvk `'Terra Virtua Kolect'` or `'tvk'`
* Tezos/xtz `'Tezos'` or `'xtz'`
* The Graph/grt `'The Graph'` or `'grt'`
* The Sandbox/sand `'The Sandbox'` or `'sand'`
* Tornado Cash/torn `'Tornado Cash'` or `'torn'`
* Tron/trx `'Tron'` or `'trx'`
* TrueUSD/tusd `'TrueUSD'` or `'tusd'`
* Ultra/uos `'Ultra'` or `'uos'`
* Uniswap Coin/uni `'Uniswap Coin'` or `'uni'`
* Universal Market Access/uma `'Universal Market Access'` or `'uma'`
* USD Coin/usdc `'USD Coin'` or `'usdc'`
* VeChain/vet `'VeChain'` or `'vet'`
* VertCoin/vtc `'VertCoin'` or `'vtc'`
* Verasity/vra `'Verasity'` or `'vra'`
* Viberate/vib `'Viberate'` or `'vib'`
* VIDT Datalink/vidt `'VIDT Datalink'` or `'vidt'`
* VoteCoin/vot `'VoteCoin'` or `'vot'`
* Waves/waves `'Waves'` or `'waves'`
* Wings/wings `'Wings'` or `'wings'`
* Wrapped Nexus Mutual/wnxm`'Wrapped Nexus Mutual'` or `'wnxm'`
* ZCash/zec `'ZCash'` or `'zec'`
* Yearn.finance/yfi `'yearn.finance'` or `'yfi'`
* Yield Guild Games/ygg `'Yield Guild Games'` or `'ygg'`
* ZClassic/zcl `'ZClassic'` or `'zcl'`
* ZenCash/zen `'ZenCash'` or `'zen'`


### Usage example

#### Angular directive
```typescript
import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import { validate } from 'crypto-address-validator';

@Directive({
  selector: '[cryptoAddress]',
  providers: [{provide: NG_VALIDATORS, useExisting: CryptoAddressValidationDirective, multi: true}]
})
export class CryptoAddressValidationDirective implements Validator {

  //For example BTC
  @Input() public ccyCode: string;

  public validate(field: AbstractControl): ValidationErrors | null {
    if (!validate(field.value, this.ccyCode, null)) {
      return {messageCode: 'Invalid bitcoin address'};
    }
    return null;
  }
}
```
#### HTML
```html
<input id="address"
       cryptoAddress="btc">
```       
