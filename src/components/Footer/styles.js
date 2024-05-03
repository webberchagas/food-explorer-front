import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 77px;

    grid-area: footer;
    display: flex;
    justify-content: space-between;

    padding: 29px 27px;
    background-color: ${({theme}) => theme.COLORS.DARK_600};


    & > div:first-child {
        height: 18px;
        width: fit-content;
        
        > img {
            filter: grayscale(1);
        }
        
        > h1 {
            font-size: 15px;
            color: ${({theme}) => theme.COLORS.LIGHT_700};
        }
    }

    & > p {
        color: ${({theme}) => theme.COLORS.LIGHT_200};
    } 
`;