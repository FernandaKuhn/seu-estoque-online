import { useState } from 'react';
import { ProductCard } from '../components/ProductCard/ProductCard';
import AddProductDialog from '../components/ProductDialog/AddProductDialog';
import EditProductDialog from '../components/ProductDialog/EditProductDialog';
import ConfirmDeleteDialog from '../components/COnfirmDeleteDialog';
import { useProducts } from '../hooks/useProducts';
import type { Product } from '../types/Product';
import {
  StyledContainer,
  StyledTitle,
  StyledButton,
  StyledGrid
} from './Home.styles';

export const Home = () => {
  const { products, addProduct, editProduct, removeProduct } = useProducts();
  const [adding, setAdding] = useState(false);
  const [editing, setEditing] = useState<Product | null>(null);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  return (
    <StyledContainer>
      <StyledTitle variant="h4">Produtos em Estoque</StyledTitle>
      <StyledButton variant="contained" onClick={() => setAdding(true)}>
        Adicionar Produto
      </StyledButton>
      <StyledGrid container spacing={2} justifyContent="center">
        {products.map((product) => (
          <StyledGrid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <ProductCard
              product={product}
              onEdit={() => setEditing(product)}
              onDelete={() => setDeletingId(product.id)}
            />
          </StyledGrid>
        ))}
      </StyledGrid>

      <AddProductDialog open={adding} onClose={() => setAdding(false)} onSave={addProduct} />
      <EditProductDialog product={editing} onClose={() => setEditing(null)} onSave={editProduct} />
      <ConfirmDeleteDialog
        open={!!deletingId}
        onClose={() => setDeletingId(null)}
        onConfirm={() => {
          if (deletingId !== null) {
            removeProduct(deletingId);
            setDeletingId(null);
          }
        }}
      />
    </StyledContainer>
  );
};
