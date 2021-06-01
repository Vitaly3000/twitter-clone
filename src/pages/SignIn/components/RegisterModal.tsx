import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import React from 'react';
import { ModalBlock } from '../../../components/ModalBlock';

interface RegisterModalProps {
  open: boolean;
  onClose: () => void;
}
export const RegisterModal: React.FC<RegisterModalProps> = ({
  open,
  onClose,
}): React.ReactElement => {
  return (
    <ModalBlock
      onClose={onClose}
      visible={open}
      title={'Создайте учетную запись'}>
      <FormControl component="fieldset" fullWidth>
        <FormGroup aria-label="position" row>
          <TextField
            style={{ marginBottom: '25px' }}
            autoFocus
            margin="dense"
            id="name"
            label="Имя"
            type="name"
            fullWidth
            InputLabelProps={{ shrink: true }}
            variant="filled"
          />
          <TextField
            style={{ marginBottom: '25px' }}
            autoFocus
            margin="dense"
            id="email"
            label="E-mail"
            type="email"
            fullWidth
            InputLabelProps={{ shrink: true }}
            variant="filled"
          />
          <TextField
            style={{ marginBottom: '25px' }}
            autoFocus
            margin="dense"
            id="password"
            label="Пароль"
            type="password"
            fullWidth
            variant="filled"
          />
          <Button
            style={{ marginBottom: '20px' }}
            fullWidth
            variant="contained"
            onClick={onClose}
            color="primary">
            Далее
          </Button>
        </FormGroup>
      </FormControl>
    </ModalBlock>
  );
};
