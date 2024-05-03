import { Container } from "./styles";

export function ButtonIcon({ icon: Icon, title}){
    return (
        <Container
        >
         {Icon && <img src={Icon} alt={title} /> }   
        </Container>
    )
}