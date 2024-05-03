import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding: 2.6rem 2.8rem 2.4rem;
    
    background-color: ${({theme}) => theme.COLORS.DARK_700};

    grid-area: header;
    display: flex;
    justify-content: space-between;

    & > div {
        h1 { 
            font-size: 1.9rem;
            font-weight: 600;
        }
    }

`;

export const Cart = styled.button` 
    background: transparent;
    border: 0;
    position: relative;

    span {
        width: 2rem;
        font-size: 1.4rem;

        position: absolute;
        top: -7px;
        right: -9px;

        background-color: ${({ theme }) => theme.COLORS.RED_100};
        border-radius: 9999px;
    }
`