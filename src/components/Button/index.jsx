
import { Container } from "./styles"

export function  Button({ icon: Icon, title, children}){
    return (
        <Container>
            {Icon && <Icon/>}
            {title}
            {children}
        </Container>
    )
}