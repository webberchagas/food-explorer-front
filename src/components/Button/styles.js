import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    padding: 1.2rem 0 ;

    background-color: ${({theme}) => theme.COLORS.RED_100};
    border: 0;
    border-radius: .5rem;

    font-size: 1.4rem;
    line-height: 2.4rem;
    font-weight: 500;
    font-family: ${({theme}) => theme.FONTS.FAMILY.POPPINS};
`;