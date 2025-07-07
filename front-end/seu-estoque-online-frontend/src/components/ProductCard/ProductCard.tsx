import {
    CardContent,
    CardMedia,
    Typography,
    CardActions,
    Button,
    Dialog,
    DialogContent,
    IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import type { Product } from '../../types/Product';
import { StyledCard } from './ProductCard.styles';
import { useState } from 'react';

interface Props {
    product: Product;
    onEdit: (product: Product) => void;
    onDelete: (id: number) => void;
}

export const ProductCard = ({ product, onEdit, onDelete }: Props) => {
    const [openImage, setOpenImage] = useState(false);

    return (
        <>
            <StyledCard>
                <CardMedia
                    component="img"
                    height="140"
                    image={product.imageUrl}
                    alt={product.name}
                    onClick={() => setOpenImage(true)}
                    sx={{
                        cursor: 'pointer', borderRadius: '8px', borderTopLeftRadius: 20,
                        borderTopRightRadius: 20, borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                    }}
                />
                <CardContent>
                    <Typography variant="h6" fontWeight="bold">{product.name}</Typography>
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

            <Dialog open={openImage} onClose={() => setOpenImage(false)} maxWidth="md">
                <DialogContent sx={{ position: 'relative', p: 0 }}>
                    <IconButton
                        onClick={() => setOpenImage(false)}
                        sx={{ position: 'absolute', top: 8, right: 8, zIndex: 10, color: '#fff' }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <img
                        src={product.imageUrl}
                        alt={product.name}
                        style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
                    />
                </DialogContent>
            </Dialog>
        </>
    );
};