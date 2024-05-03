import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    text-align: center;

    > a {
        font-size: 1.4rem;
        line-height: 2.4rem;
        font-family: ${({ theme }) => theme.FONTS.FAMILY.POPPINS};
        font-weight: 500;
    } 
`;