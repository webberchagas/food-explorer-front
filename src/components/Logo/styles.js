import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.1rem;

    > h1 {
        font-size: 3.7rem;
        font-weight: 500;
        font-family: ${({theme}) => theme.FONTS.FAMILY.ROBOTO};
        background-color: transparent;
    }

    > img {
        height: 100%;
        background-color: transparent;
    }
`;