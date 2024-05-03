import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;

    > label {
        display: flex;
        flex-direction: column;
        gap: .8rem;

        font-size: 1.6rem;
        line-height: 100%;
        font-family: ${({theme}) => theme.FONTS.FAMILY.ROBOTO};
        font-weight: 300;

        input {
            padding: 1.6rem 1.4rem;
            border: 0;
            border-radius: .8rem;
            
            background-color: ${({theme}) => theme.COLORS.DARK_900};
            color: ${({theme}) => theme.COLORS.LIGHT_100};

            &::placeholder {
                color: ${({theme}) => theme.COLORS.LIGHT_500};
            }
        }
    }
    
    
`;