import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
    width: 100%;
    padding: 2.6rem 2.8rem 2.4rem;
    
    background-color: ${({theme}) => theme.COLORS.DARK_700};

    grid-area: header;
`;

export const MobileMenu = styled.aside`
    display: flex;
    justify-content: space-between;

    & > div {
        img {
            height: 24px;
        }

        h1 { 
            font-size: 1.9rem;
            font-weight: 600;
        }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
        display: none;
    }
`

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