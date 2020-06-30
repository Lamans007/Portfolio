import sizes from './Sizes';
import { createUseStyles } from 'react-jss';

export default createUseStyles({
    app: {
        boder: '2px solid black',
        position: 'absolute',
        display: 'flex',
        overflowY: 'visible',
        flexDirection: 'column',
        flex: '1 5 100%',
        boxSizing: 'content-box',
        backgroundColor: 'inherit',
        // height: '100vh',
        // minHeight: '1100px',
        justifyContent: 'center',
        [sizes.up('xl')]: {
    
            width: '60%',

            },
        [sizes.down('xl')]: {
    
            width: '70%',

            },
        [sizes.down('lg')]: {
    
            width: '80%',

            },
        [sizes.down('md')]: {
    
            width: '90%',
    
            },
        [sizes.down('sm')]: {
    
            width: '96%',
        
            },
        
    },
    // outer: {
    //     border: '2px solid black',
    //     height: '100%',
    //     width: '100%',
    //     display: 'box',
    //     overflow: 'auto',
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // }
})