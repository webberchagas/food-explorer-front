import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;

    grid-template-areas: 
    "logo"
    "form"
    ;

    grid-template-rows: 281px auto;

    & > div:first-child {
        grid-area: logo;
        align-self: end;
        margin: 15.8rem 0 7.3rem;
    }
`;

export const Form = styled.form`
    width: 100%;
    max-width: 31.6rem;
    
    grid-area: form;
   
    justify-self: center;
    align-self: start;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
`;