import React from 'react';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import './ConfirmRemove.module.css';

const ConfirmRemove = ({
  id,
  confirmCancelButton,
  promotion,
  setConfirmCancelButton,
  setIsPopup,
}) => {
  const handleRemove = id => {
    promotion.remove(id);
    setIsPopup(false);
    setConfirmCancelButton(false);
  };

  return (
    <Dialog
      className='modal_confirm'
      open={confirmCancelButton}
      onClose={() => setConfirmCancelButton(false)}
    >
      <h3>Bạn muốn xóa promotion ?</h3>
      <div className='btn_wrapConfirm'>
        <Button
          variant='outlined'
          onClick={() => setConfirmCancelButton(false)}
          style={{
            marginRight: '15px',
            border: '1px solid rgb(100,100,100)',
            color: 'rgb(100,100,100)',
          }}
        >
          Hủy bỏ
        </Button>
        <Button
          variant='contained'
          color='error'
          onClick={() => handleRemove(id)}
        >
          Xác nhận
        </Button>
      </div>
    </Dialog>
  );
};

export default ConfirmRemove;
