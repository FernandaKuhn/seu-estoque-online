export const formatCurrencyInput = (value: string) => {
  const onlyDigits = value.replace(/\D/g, '');
  const numericValue = parseInt(onlyDigits, 10);

  if (isNaN(numericValue)) return '';

  const cents = numericValue / 100;
  return cents
    .toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    })
    .replace('R$', '')
    .trim();
};

export const parseCurrencyToNumber = (formatted: string) => {
  const clean = formatted.replace(/[^\d]/g, '');
  return Number(clean) / 100;
};