import { Transaction } from "../domain/transaction";
import { TransactionType } from "../domain/transaction-type";
/**
 * Retorne uma nova lista de transações contendo apenas transações do tipo CARD
 *
 * ### Exemplo
 *
 * Entrada:
 * ```ts
 *  [{
 *    "id": 1,
 *    "amount": 150.85,
 *    "createAt": "2021-01-10T00:00:00.000Z",
 *    "type": 1
 *  },
 *  {
 *    "id": 2,
 *    "amount": 50.0,
 *    "createAt": "2021-01-10T16:33:01.606Z",
 *    "type": 2
 *  }]
 * ```
 *
 * Saida:
 * ```ts
 *  [{
 *    "id": 1,
 *    "amount": 150.85,
 *    "createAt": "2021-01-10T00:00:00.000Z",
 *    "type": 1
 *  }]
 * ```
 *
 */

export default (data: Transaction[]) => 
data.filter((f) => f.type === TransactionType.CARD);

  // {let newData = [];
  //   for (let i = 0; i < data.length; i++){
  //     if(data[i].type === 1) {
  //       newData.push(data[i]);
  //     }
  //   }
  //   return newData;
  //  }