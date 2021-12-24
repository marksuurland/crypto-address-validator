import { Currency } from "./types/types";

import * as XRPValidator from './validators/ripple_validator';
import * as ETHValidator from './validators/ethereum_validator';
import * as BTCValidator from './validators/bitcoin_validator';
import * as ADAValidator from './validators/ada_validator';
import * as XMRValidator from './validators/monero_validator';
import * as NANOValidator from './validators/nano_validator';
import * as SCValidator from './validators/siacoin_validator';
import * as TRXValidator from './validators/tron_validator';
import * as NEMValidator from './validators/nem_validator';
import * as LSKValidator from './validators/lisk_validator';
import * as BCHValidator from './validators/bch_validator';
import * as XLMValidator from './validators/stellar_validator';
import * as EOSValidator from './validators/eos_validator';
import * as XTZValidator from './validators/tezos_validator';
import * as USDTValidator from './validators/usdt_validator';
import * as DotValidator from './validators/dot_validator';
import * as BIP173Validator from './validators/bip173_validator';
import * as Base58Validator from './validators/base58_validator';

// defines P2PKH and P2SH address types for standard (prod) and testnet networks
const CURRENCIES: Currency[] = [{
        name: 'Bitcoin',
        symbol: 'btc',
        addressTypes: { prod: ['00', '05'], testnet: ['6f', 'c4', '3c', '26'] },
        bech32Hrp: { prod: ['bc'], testnet: ['tb'] },
        validator: BTCValidator.isValidAddress,
    }, {
        name: 'BitcoinCash',
        symbol: 'bch',
        regexp: new RegExp('^[qQpP]{1}[0-9a-zA-Z]{41}$'),
        addressTypes: { prod: ['00', '05'], testnet: ['6f', 'c4'] },
        validator: BCHValidator.isValidAddress,
    }, {
        name: 'Bitcoin SV',
        symbol: 'bsv',
        regexp: new RegExp('^[qQ]{1}[0-9a-zA-Z]{41}$'),
        addressTypes: { prod: ['00', '05'], testnet: ['6f', 'c4'] },
        validator: BCHValidator.isValidAddress,
    }, {
        name: 'LiteCoin',
        symbol: 'ltc',
        addressTypes: { prod: ['30', '05', '32'], testnet: ['6f', 'c4', '3a'] },
        bech32Hrp: { prod: ['ltc'], testnet: ['tltc'] },
        validator: BTCValidator.isValidAddress,
    }, {
        name: 'PeerCoin',
        symbol: 'ppc',
        addressTypes: { prod: ['37', '75'], testnet: ['6f', 'c4'] },
        validator: BTCValidator.isValidAddress,
    }, {
        name: 'DogeCoin',
        symbol: 'doge',
        addressTypes: { prod: ['1e', '16'], testnet: ['71', 'c4'] },
        validator: BTCValidator.isValidAddress,
    }, {
        name: 'BeaverCoin',
        symbol: 'bvc',
        addressTypes: { prod: ['19', '05'], testnet: ['6f', 'c4'] },
        validator: BTCValidator.isValidAddress,
    }, {
        name: 'FreiCoin',
        symbol: 'frc',
        addressTypes: { prod: ['00', '05'], testnet: ['6f', 'c4'] },
        validator: BTCValidator.isValidAddress,
    }, {
        name: 'ProtoShares',
        symbol: 'pts',
        addressTypes: { prod: ['38', '05'], testnet: ['6f', 'c4'] },
        validator: BTCValidator.isValidAddress,
    }, {
        name: 'MegaCoin',
        symbol: 'mec',
        addressTypes: { prod: ['32', '05'], testnet: ['6f', 'c4'] },
        validator: BTCValidator.isValidAddress,
    }, {
        name: 'PrimeCoin',
        symbol: 'xpm',
        addressTypes: { prod: ['17', '53'], testnet: ['6f', 'c4'] },
        validator: BTCValidator.isValidAddress,
    }, {
        name: 'AuroraCoin',
        symbol: 'aur',
        addressTypes: { prod: ['17', '05'], testnet: ['6f', 'c4'] },
        validator: BTCValidator.isValidAddress,
    }, {
        name: 'NameCoin',
        symbol: 'nmc',
        addressTypes: { prod: ['34'], testnet: [] },
        validator: BTCValidator.isValidAddress,
    }, {
        name: 'BioCoin',
        symbol: 'bio',
        addressTypes: { prod: ['19', '14'], testnet: ['6f', 'c4'] },
        validator: BTCValidator.isValidAddress,
    }, {
        name: 'GarliCoin',
        symbol: 'grlc',
        addressTypes: { prod: ['26', '05'], testnet: ['6f', 'c4'] },
        validator: BTCValidator.isValidAddress,
    }, {
        name: 'VertCoin',
        symbol: 'vtc',
        addressTypes: { prod: ['0x', '47', '71', '05'], testnet: ['6f', 'c4'] },
        validator: BTCValidator.isValidAddress,
    }, {
        name: 'BitcoinGold',
        symbol: 'btg',
        addressTypes: { prod: ['26', '17'], testnet: ['6f', 'c4'] },
        validator: BTCValidator.isValidAddress,
    }, {
        name: 'Komodo',
        symbol: 'kmd',
        addressTypes: { prod: ['3c', '55'], testnet: ['0', '5'] },
        validator: BTCValidator.isValidAddress,
    }, {
        name: 'BitcoinZ',
        symbol: 'btcz',
        expectedLength: 26,
        addressTypes: { prod: ['1cb8', '1cbd'], testnet: ['1d25', '1cba'] },
        validator: BTCValidator.isValidAddress,
    }, {
        name: 'BitcoinPrivate',
        symbol: 'btcp',
        expectedLength: 26,
        addressTypes: { prod: ['1325', '13af'], testnet: ['1957', '19e0'] },
        validator: BTCValidator.isValidAddress,
    }, {
        name: 'Hush',
        symbol: 'hush',
        expectedLength: 26,
        addressTypes: { prod: ['1cb8', '1cbd'], testnet: ['1d25', '1cba'] },
        validator: BTCValidator.isValidAddress,
    }, {
        name: 'SnowGem',
        symbol: 'sng',
        expectedLength: 26,
        addressTypes: { prod: ['1c28', '1c2d'], testnet: ['1d25', '1cba'] },
        validator: BTCValidator.isValidAddress,
    }, {
        name: 'ZCash',
        symbol: 'zec',
        expectedLength: 26,
        addressTypes: { prod: ['1cb8', '1cbd'], testnet: ['1d25', '1cba'] },
        validator: BTCValidator.isValidAddress,
    }, {
        name: 'ZClassic',
        symbol: 'zcl',
        expectedLength: 26,
        addressTypes: { prod: ['1cb8', '1cbd'], testnet: ['1d25', '1cba'] },
        validator: BTCValidator.isValidAddress,
    }, {
        name: 'ZenCash',
        symbol: 'zen',
        expectedLength: 26,
        addressTypes: { prod: ['2089', '2096'], testnet: ['2092', '2098'] },
        validator: BTCValidator.isValidAddress,
    }, {
        name: 'VoteCoin',
        symbol: 'vot',
        expectedLength: 26,
        addressTypes: { prod: ['1cb8', '1cbd'], testnet: ['1d25', '1cba'] },
        validator: BTCValidator.isValidAddress,
    }, {
        name: 'Decred',
        symbol: 'dcr',
        addressTypes: { prod: ['073f', '071a'], testnet: ['0f21', '0efc'] },
        hashFunction: 'blake256',
        expectedLength: 26,
        validator: BTCValidator.isValidAddress,
    }, {
        name: 'GameCredits',
        symbol: 'game',
        addressTypes: { prod: ['26', '05'], testnet: [] },
        validator: BTCValidator.isValidAddress,
    }, {
        name: 'PIVX',
        symbol: 'pivx',
        addressTypes: { prod: ['1e', '0d'], testnet: [] },
        validator: BTCValidator.isValidAddress,
    }, {
        name: 'SolarCoin',
        symbol: 'slr',
        addressTypes: { prod: ['12', '05'], testnet: [] },
        validator: BTCValidator.isValidAddress,
    }, {
        name: 'MonaCoin',
        symbol: 'mona',
        addressTypes: { prod: ['32', '37'], testnet: [] },
        validator: BTCValidator.isValidAddress,
    }, {
        name: 'DigiByte',
        symbol: 'dgb',
        addressTypes: { prod: ['1e', '3f'], testnet: [] },
        bech32Hrp: { prod: ['dgb', 'S'], testnet: [] },
        validator: BTCValidator.isValidAddress,
    }, {
        name: 'Tether',
        symbol: 'usdt',
        addressTypes: { prod: ['00', '05'], testnet: ['6f', 'c4'] },
        validator: USDTValidator.isValidAddress,
    }, {
        name: 'Ripple',
        symbol: 'xrp',
        validator: XRPValidator.isValidAddress,
    }, {
        name: 'Dash',
        symbol: 'dash',
        addressTypes: { prod: ['4c', '10'], testnet: ['8c', '13'] },
        validator: BTCValidator.isValidAddress,
    }, {
        name: 'Neo',
        symbol: 'neo',
        addressTypes: { prod: ['17'], testnet: [] },
        validator: BTCValidator.isValidAddress,
    }, {
        name: 'NeoGas',
        symbol: 'gas',
        addressTypes: { prod: ['17'], testnet: [] },
        validator: BTCValidator.isValidAddress,
    }, {
        name: 'Qtum',
        symbol: 'qtum',
        addressTypes: { prod: ['3a', '32'], testnet: ['78', '6e'] },
        validator: BTCValidator.isValidAddress,
    }, {
        name: 'Waves',
        symbol: 'waves',
        addressTypes: { prod: ['0157'], testnet: ['0154'] },
        expectedLength: 26,
        hashFunction: 'blake256keccak256',
        regexp: new RegExp(/^[a-zA-Z0-9]{35}$/),
        validator: BTCValidator.isValidAddress,
    }, {
        name: 'Ethereum',
        symbol: 'eth',
        validator: ETHValidator.isValidAddress,
    }, {
        name: 'EtherZero',
        symbol: 'etz',
        validator: ETHValidator.isValidAddress,
    }, {
        name: 'EthereumClassic',
        symbol: 'etc',
        validator: ETHValidator.isValidAddress,
    }, {
        name: 'Callisto',
        symbol: 'clo',
        validator: ETHValidator.isValidAddress,
    }, {
        name: 'Bankex',
        symbol: 'bkx',
        validator: ETHValidator.isValidAddress,
    }, {
        name: 'Cardano',
        symbol: 'ada',
        bech32Hrp: { prod: ['addr'], testnet: ['addr']},
        validator: ADAValidator.isValidAddress
    }, {
        name: 'Monero',
        symbol: 'xmr',
        addressTypes: { prod: ['18', '42'], testnet: ['53', '63'], stagenet: ['24'] },
        iAddressTypes: { prod: ['19'], testnet: ['54'], stagenet: ['25'] },
        validator: XMRValidator.isValidAddress
    }, {
        name: 'Aragon',
        symbol: 'ant',
        validator: ETHValidator.isValidAddress,
    }, {
        name: 'Basic Attention Token',
        symbol: 'bat',
        validator: ETHValidator.isValidAddress,
    }, {
        name: 'Bancor',
        symbol: 'bnt',
        validator: ETHValidator.isValidAddress,
    }, {
        name: 'Civic',
        symbol: 'cvc',
        validator: ETHValidator.isValidAddress,
    }, {
        name: 'District0x',
        symbol: 'dnt',
        validator: ETHValidator.isValidAddress,
    }, {
        name: 'Gnosis',
        symbol: 'gno',
        validator: ETHValidator.isValidAddress,
    }, {
        name: 'Golem (GNT)',
        symbol: 'gnt',
        validator: ETHValidator.isValidAddress,
    }, {
        name: 'Golem',
        symbol: 'glm',
        validator: ETHValidator.isValidAddress,
    },  {
        name: 'Matchpool',
        symbol: 'gup',
        validator: ETHValidator.isValidAddress,
    }, {
        name: 'Melon',
        symbol: 'mln',
        validator: ETHValidator.isValidAddress,
    }, {
        name: 'Numeraire',
        symbol: 'nmr',
        validator: ETHValidator.isValidAddress,
    }, {
        name: 'OmiseGO',
        symbol: 'omg',
        validator: ETHValidator.isValidAddress,
    }, {
        name: 'TenX',
        symbol: 'pay',
        validator: ETHValidator.isValidAddress,
    }, {
        name: 'Ripio Credit Network',
        symbol: 'rcn',
        validator: ETHValidator.isValidAddress,
    }, {
        name: 'Augur',
        symbol: 'rep',
        validator: ETHValidator.isValidAddress,
    }, {
        name: 'iExec RLC',
        symbol: 'rlc',
        validator: ETHValidator.isValidAddress,
    }, {
        name: 'Salt',
        symbol: 'salt',
        validator: ETHValidator.isValidAddress,
    }, {
        name: 'Status',
        symbol: 'snt',
        validator: ETHValidator.isValidAddress,
    }, {
        name: 'Storj',
        symbol: 'storj',
        validator: ETHValidator.isValidAddress,
    }, {
        name: 'Swarm City',
        symbol: 'swt',
        validator: ETHValidator.isValidAddress,
    }, {
        name: 'TrueUSD',
        symbol: 'tusd',
        validator: ETHValidator.isValidAddress,
    }, {
        name: 'Wings',
        symbol: 'wings',
        validator: ETHValidator.isValidAddress,
    }, {
        name: '0x',
        symbol: 'zrx',
        validator: ETHValidator.isValidAddress,
    }, {
        name: 'Expanse',
        symbol: 'exp',
        validator: ETHValidator.isValidAddress,
    }, {
        name: 'Viberate',
        symbol: 'vib',
        validator: ETHValidator.isValidAddress,
    }, {
        name: 'Odyssey',
        symbol: 'ocn',
        validator: ETHValidator.isValidAddress,
    }, {
        name: 'Polymath',
        symbol: 'poly',
        validator: ETHValidator.isValidAddress,
    }, {
        name: 'Storm',
        symbol: 'storm',
        validator: ETHValidator.isValidAddress,
    }, {
        name: 'Nano',
        symbol: 'nano',
        validator: NANOValidator.isValidAddress,
    }, {
        name: 'RaiBlocks',
        symbol: 'xrb',
        validator: NANOValidator.isValidAddress,
    }, {
        name: 'Siacoin',
        symbol: 'sc',
        validator: SCValidator.isValidAddress,
    }, {
        name: 'HyperSpace',
        symbol: 'xsc',
        validator: SCValidator.isValidAddress,
    }, {
        name: 'loki',
        symbol: 'loki',
        addressTypes: { prod: ['114', '115', '116'], testnet: [] },
        iAddressTypes: { prod: ['115'], testnet: [] },
        validator: XMRValidator.isValidAddress,
    }, {
        name: 'LBRY Credits',
        symbol: 'lbc',
        addressTypes: { prod: ['55'], testnet: [] },
        validator: BTCValidator.isValidAddress,
    }, {
        name: 'Tron',
        symbol: 'trx',
        addressTypes: { prod: ['0x41'], testnet: ['0xa0'] },
        validator: TRXValidator.isValidAddress,
    }, {
        name: 'Nem',
        symbol: 'xem',
        validator: NEMValidator.isValidAddress,
    }, {
        name: 'Lisk',
        symbol: 'lsk',
        validator: LSKValidator.isValidAddress,
    }, {
        name: 'Stellar',
        symbol: 'xlm',
        validator: XLMValidator.isValidAddress,
    }, {
        name: 'BTU Protocol',
        symbol: 'btu',
        validator: ETHValidator.isValidAddress,
    }, {
        name: 'Crypto.com Coin',
        symbol: 'cro',
        bech32Hrp: { prod: ['cro'], testnet: ['tcro']},
        validator: BIP173Validator.isValidAddress,
    }, {
        name: 'Multi-collateral DAI',
        symbol: 'dai',
        validator: ETHValidator.isValidAddress,
    }, {
        name: 'Enjin Coin',
        symbol: 'enj',
        validator: ETHValidator.isValidAddress,
    }, {
        name: 'HedgeTrade',
        symbol: 'hedg',
        validator: ETHValidator.isValidAddress,
    }, {
        name: 'Cred',
        symbol: 'lba',
        validator: ETHValidator.isValidAddress,
    }, {
        name: 'Chainlink',
        symbol: 'link',
        validator: ETHValidator.isValidAddress,
    }, {
        name: 'Loom Network',
        symbol: 'loom',
        validator: ETHValidator.isValidAddress,
    }, {
        name: 'Maker',
        symbol: 'mkr',
        validator: ETHValidator.isValidAddress,
    }, {
        name: 'Metal',
        symbol: 'mtl',
        validator: ETHValidator.isValidAddress,
    }, {
        name: 'Ocean Protocol',
        symbol: 'ocean',
        validator: ETHValidator.isValidAddress,
    }, {
        name: 'Quant',
        symbol: 'qnt',
        validator: ETHValidator.isValidAddress,
    }, {
        name: 'Synthetix Network',
        symbol: 'snx',
        validator: ETHValidator.isValidAddress,
    }, {
        name: 'SOLVE',
        symbol: 'solve',
        validator: ETHValidator.isValidAddress,
    }, {
        name: 'Spendcoin',
        symbol: 'spnd',
        validator: ETHValidator.isValidAddress,
    }, {
        name: 'TEMCO',
        symbol: 'temco',
        validator: ETHValidator.isValidAddress,
    }, {
        name: 'EOS',
        symbol: 'eos',
        validator: EOSValidator.isValidAddress
    }, {
        name: 'Tezos',
        symbol: 'xtz',
        validator: XTZValidator.isValidAddress,
    }, {
        name: 'VeChain',
        symbol: 'vet',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'StormX',
        symbol: 'stmx',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'AugurV2',
        symbol: 'repv2',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'FirmaChain',
        symbol: 'fct',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'BlockTrade',
        symbol: 'btt',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'Quantum Resistant Ledger',
        symbol: 'qrl',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'Serve',
        symbol: 'serv',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'Tap',
        symbol: 'xtp',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'Compound',
        symbol: 'comp',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'Paxos',
        symbol: 'pax',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'USD Coin',
        symbol: 'usdc',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'CUSD',
        symbol: 'cusd',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'Polkadot',
        symbol: 'dot',
        validator: DotValidator.isValidAddress,
    },
    {
        name: 'Uniswap Coin',
        symbol: 'uni',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'Aave Coin',
        symbol: 'aave',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'Matic',
        symbol: 'matic',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'Decentraland',
        symbol: 'mana',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'Solana',
        symbol: 'sol',
        validator: Base58Validator.isValidAddress,
        maxLength: 44,
        minLength: 43
    },
    {
        name: 'yearn.finance',
        symbol: 'yfi',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'Yield Guild Games',
        symbol: 'ygg',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'Wrapped Nexus Mutual',
        symbol: 'wnxm',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'Verasity',
        symbol: 'vra',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'VIDT Datalink',
        symbol: 'vidt',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'Ultra',
        symbol: 'uos',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'Universal Market Access',
        symbol: 'uma',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'Terra Virtua Kolect',
        symbol: 'tvk',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'Tellor',
        symbol: 'trb',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'Tornado Cash',
        symbol: 'torn',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'Swipe',
        symbol: 'sxp',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'SushiSwap',
        symbol: 'sushi',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'Serum',
        symbol: 'srm',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'SKALE Network',
        symbol: 'skl',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'SHIBA INU',
        symbol: 'shib',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'The Sandbox',
        symbol: 'sand',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'Reserve Rights',
        symbol: 'rsr',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'KeeperDAO',
        symbol: 'rook',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'Reef',
        symbol: 'reef',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'Raiden Network Token',
        symbol: 'rdn',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'Rarible',
        symbol: 'rari',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'Quantstamp',
        symbol: 'qsp',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'Pundi X',
        symbol: 'pundix',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'Marlin',
        symbol: 'pond',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'Phala Network',
        symbol: 'pha',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'Perpetual Protocol',
        symbol: 'perp',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'Orchid',
        symbol: 'oxt',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'Orion Protocol',
        symbol: 'orn',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'OKB',
        symbol: 'okb',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'Origin Protocol',
        symbol: 'ogn',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'Enzyme',
        symbol: 'mln',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'Loopring',
        symbol: 'lrc',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'Kyber Network Crystal v2',
        symbol: 'knc',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'Injective Protocol',
        symbol: 'inj',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'Illuvium',
        symbol: 'ilv',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'Hegic',
        symbol: 'hegic',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'The Graph',
        symbol: 'grt',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'Gods Unchained',
        symbol: 'gods',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'Aavegotchi',
        symbol: 'ghst',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'FUNToken',
        symbol: 'fun',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'FTX Token',
        symbol: 'ftt',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'Fantom',
        symbol: 'ftm',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'e-Radix',
        symbol: 'exrd',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'Ethernity Chain',
        symbol: 'ern',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'Ethereum Name Service',
        symbol: 'ens',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'Dent',
        symbol: 'dent',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'Curve DAO Token',
        symbol: 'crv',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'Celsius',
        symbol: 'cel',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'bZx Protocol',
        symbol: 'bzrx',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'Bluzelle',
        symbol: 'blz',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'Balancer',
        symbol: 'bal',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'Badger DAO',
        symbol: 'badger',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'Axie Infinity',
        symbol: 'axs',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'Audius',
        symbol: 'audio',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'Amp',
        symbol: 'amp',
        validator: ETHValidator.isValidAddress,
    },
    {
        name: 'SingularityNET',
        symbol: 'agix',
        validator: ETHValidator.isValidAddress,
    }
];

export function getByNameOrSymbol(currencyNameOrSymbol: string) {
    var nameOrSymbol = currencyNameOrSymbol.toLowerCase();
    return CURRENCIES.find(function (currency) {
        return currency.name.toLowerCase() === nameOrSymbol || currency.symbol.toLowerCase() === nameOrSymbol
    });
}
export function getAll() {
    return CURRENCIES;
}

////spit out details for readme.md
// CURRENCIES
//     .sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1)
//     .forEach(c => console.log(`* ${c.name}/${c.symbol} \`'${c.name}'\` or \`'${c.symbol}'\` `));

////spit out keywords for package.json
// CURRENCIES
//     .sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1)
//     .forEach(c => console.log(`"${c.name}","${c.symbol}",`));
//

