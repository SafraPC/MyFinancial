export function formatMoney(amount: number): string {
   if (isNaN(amount) || !isFinite(amount)) {
      return 'Formato inválido';
   }
   const formattedAmount = amount.toFixed(2);
   return formattedAmount;
}
