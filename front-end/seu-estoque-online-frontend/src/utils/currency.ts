export const formatCurrencyInput = (value: string) => {
  const onlyDigits = value.replace(/\D/g, '');
  if (!onlyDigits) return '0,00';
  const cents = onlyDigits.slice(-2);
  let integerPart = onlyDigits.slice(0, -2);
  if (integerPart === '') integerPart = '0';
  integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return integerPart + ',' + cents;
};

export const parseCurrencyToNumber = (formatted: string) => {
  if (!formatted) return 0;
  const normalized = formatted.replace(/\./g, '').replace(',', '.');
  return parseFloat(normalized) || 0;
};