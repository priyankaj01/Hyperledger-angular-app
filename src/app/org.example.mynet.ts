import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.example.mynet{
   export class Commodity extends Asset {
      tradingSymbol: string;
      description: string;
      mainExchange: string;
      quantity: number;
      owner: Trader;
   }
   export class Trader extends Participant {
      tradeId: string;
      firstNameCt: string;
      lastName: string;
   }
   export class Trade extends Transaction {
      commodity: Commodity;
      newOwner: Trader;
   }
// }
