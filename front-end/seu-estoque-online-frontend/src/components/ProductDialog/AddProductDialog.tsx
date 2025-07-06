import { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, FormHelperText } from '@mui/material';
import { formatCurrencyInput, parseCurrencyToNumber } from '../../utils/currency';
import type { Product } from '../../types/Product';

interface Props {
  open: boolean;
  onClose: () => void;
  onSave: (product: Omit<Product, 'id' | 'createdIn' | 'updatedIn'>) => void;
}

const emptyProduct: Omit<Product, 'id' | 'createdIn' | 'updatedIn'> = {
  name: '',
  price: 0,
  amount: 0,
  imageUrl: '',
};

const AddProductDialog = ({ open, onClose, onSave }: Props) => {
  const [product, setProduct] = useState(emptyProduct);
  const [priceInput, setPriceInput] = useState('0,00');
  const [priceError, setPriceError] = useState<string | null>(null);
  const [amountError, setAmountError] = useState<string | null>(null);

  useEffect(() => {
    setProduct(emptyProduct);
    setPriceInput('0,00');
    setPriceError(null);
    setAmountError(null);
  }, [open]);

  const handleSave = () => {
    if (product.price < 9.9) {
      setPriceError('O preço deve ser no mínimo R$ 9,90');
      return;
    }
    if (product.amount < 1) {
      setAmountError('A quantidade deve ser no mínimo 1');
      return;
    }
    onSave(product);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Adicionar Produto</DialogTitle>
      <DialogContent>
        <TextField
          label="Nome"
          fullWidth
          margin="dense"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
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
            setProduct({ ...product, price: parsed });
            if (parsed >= 9.9) setPriceError(null);
          }}
        />
        {priceError && <FormHelperText error>{priceError}</FormHelperText>}
        <TextField
          label="Quantidade"
          type="number"
          fullWidth
          margin="dense"
          inputProps={{ min: 0 }}
          value={product.amount}
          error={!!amountError}
          onChange={(e) => {
            const value = Number(e.target.value);
            setProduct({ ...product, amount: value });
            if (value >= 0) setAmountError(null);
          }}
        />
        {amountError && <FormHelperText error>{amountError}</FormHelperText>}
        <TextField
          label="URL da Imagem"
          fullWidth
          margin="dense"
          value={product.imageUrl}
          onChange={(e) => setProduct({ ...product, imageUrl: e.target.value })}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={handleSave} variant="contained">Salvar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddProductDialog;