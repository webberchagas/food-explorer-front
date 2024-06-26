import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
    width: 100%;
    padding: 2.6rem 2.8rem 2.4rem;
    
    background-color: ${({theme}) => theme.COLORS.DARK_700};
    grid-area: header;

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}){

        height: 104px;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.XL}){
        padding-inline: 12rem;
    }
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

export const DesktopMenu = styled.div`
    display: none;
    
    @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
        display: flex;
        gap: 3.2rem;
        height: 100%;

        & > div {
            width: fit-content;

            img {
                height: 24px;
            }

            h1 { 
                font-size: 1.9rem;
                font-weight: 600;
            }
        }
        
        input {
            flex: 1;
            height: 4.8rem;
            background-color: ${({ theme }) => theme.COLORS.DARK_900};
            border: 0;
            border-radius: 5px;
        }
    }
`;
