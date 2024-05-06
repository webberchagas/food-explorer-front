import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > div:first-child {
        /* align-self: end; */
        margin: 15.8rem 0 7.3rem;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        flex-direction: row;
        align-items: center;
        justify-content: center;

        padding-right: 10.8rem;
    }
`;

export const Form = styled.form`
    width: 100%;
    max-width: 31.6rem;
    
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    
    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        max-width: 47.6rem;
        padding: 6.4rem;

        background-color: ${({theme}) => theme.COLORS.DARK_700};
        border-radius: 1.6rem;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        max-width: clamp(62rem, 10vw + 2.2rem,76.6rem);
    }
`;