import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        font-size: 62.5%;
        background-color: ${({ theme }) => theme.COLORS.DARK_400};   
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
        font-size: 1.6rem;
        font-family: ${({theme}) => theme.FONTS.FAMILY.POPPINS};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    a {
        text-decoration: none;
    }

`;