import LogoFoodExp from '../../assets/images/logo.svg';
import { Container } from "./styles"

export function Logo(){
    return (
        <Container>
            <img src={LogoFoodExp} alt="Logo Food Explorer" />
            <h1>food explorer</h1>
        </Container>
    )   
}