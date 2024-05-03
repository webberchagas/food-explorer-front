import { Container } from "./styles";

export function ButtonLink({title}){
    return (
        <Container>
            <a href="#">{title}</a>
        </Container>
    )
}