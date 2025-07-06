import { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, FormHelperText } from '@mui/material';
import { formatCurrencyInput, parseCurrencyToNumber } from '../../utils/currency';
import type { Product } from '../../types/Product';

interface Props {
  product: Product | null;
  onClose: () => void;
  onSave: (product: Product) => void;
}

const EditProductDialog = ({ product, onClose, onSave }: Props) => {
  const [editedProduct, setEditedProduct] = useState<Product | null>(product);
  const [priceInput, setPriceInput] = useState('');
  const [priceError, setPriceError] = useState<string | null>(null);
  const [amountError, setAmountError] = useState<string | null>(null);

  useEffect(() => {
    if (product) {
      setEditedProduct(product);
      setPriceInput(formatCurrencyInput(product.price.toFixed(2).replace('.', '')));
      setPriceError(null);
      setAmountError(null);
    }
  }, [product]);

  const handleSave = () => {
    if (!editedProduct) return;
    if (editedProduct.price < 9.9) {
      setPriceError('O preço deve ser no mínimo R$ 9,90');
      return;
    }
    if (editedProduct.amount < 1) {
      setAmountError('A quantidade deve ser no mínimo 1');
      return;
    }
    onSave(editedProduct);
    onClose();
  };

  return (
    <Dialog open={!!product} onClose={onClose}>
      <DialogTitle>Editar Produto</DialogTitle>
      <DialogContent>
        <TextField
          label="Nome"
          fullWidth
          margin="dense"
          value={editedProduct?.name || ''}
          onChange={(e) => editedProduct && setEditedProduct({ ...editedProduct, name: e.target.value })}
        />
        <TextField
          label="Preço"
          fullWidth
          margin="dense"
          value={priceInput}
          error={!!priceError}
          onChange={(e) => {
            const formatted = formatCurrencyInput(e.target.value);
            setPriceInput(formatted);
            const parsed = parseCurrencyToNumber(formatted);
            if (editedProduct) {
              setEditedProduct({ ...editedProduct, price: parsed });
              if (parsed >= 9.9) setPriceError(null);
            }
          }}
        />
        {priceError && <FormHelperText error>{priceError}</FormHelperText>}
        <TextField
          label="Quantidade"
          type="number"
          fullWidth
          margin="dense"
          inputProps={{ min: 1 }}
          value={editedProduct?.amount || 1}
          error={!!amountError}
          onChange={(e) => {
            const value = Number(e.target.value);
            if (editedProduct) {
              setEditedProduct({ ...editedProduct, amount: value });
              if (value >= 1) setAmountError(null);
            }
          }}
        />
        {amountError && <FormHelperText error>{amountError}</FormHelperText>}
        <TextField
          label="URL da Imagem"
          fullWidth
          margin="dense"
          value={editedProduct?.imageUrl || ''}
          onChange={(e) => editedProduct && setEditedProduct({ ...editedProduct, imageUrl: e.target.value })}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={handleSave} variant="contained">Salvar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditProductDialog;