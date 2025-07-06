import { Dialog, DialogTitle, DialogActions, Button } from '@mui/material';

interface Props {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmDeleteDialog = ({ open, onClose, onConfirm }: Props) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>Tem certeza que deseja excluir este produto?</DialogTitle>
    <DialogActions>
      <Button onClick={onClose}>Cancelar</Button>
      <Button onClick={onConfirm} color="error" variant="contained">Excluir</Button>
    </DialogActions>
  </Dialog>
);

export default ConfirmDeleteDialog;