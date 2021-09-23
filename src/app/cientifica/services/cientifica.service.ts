import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CientificaService {

   /* Definindo as constantes utilizadas para identificar a operações de calculo.*/
   static readonly SOMA: string = '+';
   static readonly SUBTRACAO: string = '-';
   static readonly DIVISAO: string = '/';
   static readonly MULTIPLICACAO: string = '*';
 
   constructor() { }
   /**
    * Método que calcula uma operação matemática dado 2 numeros e uma operação (resultado).
    * Suporta as operações de soma, sub, divisao e multipl.
    * @param num1 number
    * @param num2 number
    * @param operacao string operação a ser executada
    * @returns number resultado das operações
    */
   calcular(num1: number, num2: number, operacao: string): number {
     let resultado: number;
 
     switch (operacao) {
       case CientificaService.SOMA:
         resultado = num1 + num2;
         break;
       case CientificaService.SUBTRACAO:
         resultado = num1 - num2;
         break;
       case CientificaService.DIVISAO:
         resultado = num1 / num2;
         break;
       case CientificaService.MULTIPLICACAO:
         resultado = num1 * num2;
         break;
       default:
         resultado = 0;
     }
     return resultado;
   }
}
