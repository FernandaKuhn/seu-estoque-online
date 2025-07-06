import {
    CardContent,
    CardMedia,
    Typography,
    CardActions,
    Button,
} from '@mui/material';
import type { Product } from '../../types/Product';
import { StyledCard } from './ProductCard.styles';

interface Props {
    product: Product;
    onEdit: (product: Product) => void;
    onDelete: (id: number) => void;
}

export const ProductCard = ({ product, onEdit, onDelete }: Props) => {
    return (
        <StyledCard>
            <CardMedia
                component="img"
                height="140"
                image={product.imageUrl}
                alt={product.name}
            />
            <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2">Preço: R$ {product.price.toFixed(2)}</Typography>
                <Typography variant="body2">Quantidade: {product.amount}</Typography>
                <Typography variant="body2">Criado: {new Date(product.createdIn).toLocaleDateString()}</Typography>
                <Typography variant="body2">Atualizado: {new Date(product.updatedIn).toLocaleDateString()}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => onEdit(product)}>Editar</Button>
                <Button size="small" color="error" onClick={() => onDelete(product.id)}>Excluir</Button>
            </CardActions>
        </StyledCard>
    );
};