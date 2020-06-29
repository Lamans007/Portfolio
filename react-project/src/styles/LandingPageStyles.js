import sizes from './Sizes';
import { createUseStyles } from 'react-jss';

export default createUseStyles({
    app: {
        position: 'absolute',
        display: 'flex',
        overflowY: 'auto',
        flexDirection: 'column',
        flexWrap: 'scroll',
        boxSizing: 'content-box',
        height: '100%',
        alignSelf: 'center',
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
    main: {
        
    }
})