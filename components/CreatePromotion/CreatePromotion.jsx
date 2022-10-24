import React from 'react';
import Popup from 'reactjs-popup';
import Button from '@mui/material/Button';

const CreatePromotion = () => {
  return (
    <Popup
      trigger={
        <Button variant='contained' color='success'>
          + Tạo khuyến mãi
        </Button>
      }
    >
      <div>Popup content here !!</div>
    </Popup>
  );
};

export default CreatePromotion;
