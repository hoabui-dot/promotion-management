import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import FormPromotion from '../FormPromotion/FormPromotion';

const CreatePromotion = ({ Promotion }) => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpenDialog(true)}
        variant='contained'
        color='success'
      >
        + Tạo khuyến mãi
      </Button>
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <div className='modal'>
          <p className='detail_title'>Create a new promotion</p>
          <div className='modal_wrap'>
            <div className='detail'>
              <FormPromotion
                Promotion={Promotion}
                setOpenDialog={setOpenDialog}
              />
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default CreatePromotion;
