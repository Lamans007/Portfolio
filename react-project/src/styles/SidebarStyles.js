import sizes from './Sizes';
import { createUseStyles, useTheme, ThemeProvider } from 'react-jss';

export default createUseStyles({
    sideBar:{
        display: 'flex',
        flexDirection: 'column',
        flex: '0 0 200px', 
        flexWrap: 'wrap',
        height: '800px',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
        [sizes.down('md')]: {
    
            display: 'none',

            },
    }
})

