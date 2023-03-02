import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

import s from './Modal.module.css';

const CreateRestoranModal = () => {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
    <>   
    <button className={s.btnModal} onClick={handleClickOpen}>
    Відкриті ресторани
    </button>

<Dialog
fullScreen={fullScreen}
open={open}
onClose={handleClose}
aria-labelledby="responsive-dialog-title">

<DialogContent className={s.questionModel}>

<div className={s.more}>
Хочеш дізнатися більше?
</div>

</DialogContent>

<div className={s.dialogQuestion}>
<div  onClick={handleClose} className={s.cancel}>
Ні, скасувати
</div>
<Link onClick={handleClose} to="open" className={s.confirm}>
Так, продовжити
</Link>
</div>
</Dialog></>
  )
}

export default CreateRestoranModal