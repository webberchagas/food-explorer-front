  import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    background-color: ${({theme}) => theme.COLORS.DARK_400};

    display: grid;

    grid-template-rows: 8.4rem auto 7.7rem;
    grid-template-areas: 
    "header"
    "main"
    "footer";

    & > main {
        grid-area: main;
    }
`;

export const Section = styled.section`
    height: 12rem;
    margin: 4.4rem 1.6rem 0 3.6rem;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    background: rgb(9,30,38);
    background: linear-gradient(180deg, rgba(9,30,38,1) 0%, rgba(0,19,28,1) 100%);

    position: relative;

    & > img {
        width: clamp(19rem, 10rem + 16vw, 65.6rem);
        /* width: clamp(12.5rem, 6.0606rem + 23.9604vw, 27.625rem); */
        align-self: end;
        position: relative;
        left: -3rem;
        
    }

    
    & > div {
        flex: 1;

        h2 {
            font-size: 1.8rem;
            line-height: 140%;
            font-weight: 700;
        }
    
        p {
            font-size: 1.2rem   ;
            line-height: 140%;
            font-weight: 400;
        }
    }
`;