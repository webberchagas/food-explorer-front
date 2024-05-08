import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';


export const Container = styled.div`
    width: 100%;
    height: 77px;

    grid-area: footer;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 2.4rem 2rem;
    background-color: ${({theme}) => theme.COLORS.DARK_600};


    & > div:first-child {
        height: 1.8rem;
        width: fit-content;
        
        > img {
            filter: grayscale(1);
        }
        
        > h1 {
            font-size: 1.5rem;
            color: ${({theme}) => theme.COLORS.LIGHT_700};
        }
    }

    & > p {
        font-size: 1.2rem;
        color: ${({theme}) => theme.COLORS.LIGHT_200};
    } 

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        & > p {
            font-size: 1.4rem;
        }

        
        & > div:first-child {
            height: 3rem;
        }
    }

    
    @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
        padding: 2.4rem 12.7rem;

        & > div:first-child {
            > h1 {
                font-size: 2.2rem;
            }
        }
    }
`;