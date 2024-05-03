import { Container } from './styles';

export function Input({ title, placeholder, ...rest}){
  return (
    <Container>
        <label>
            {title}
          <input placeholder={placeholder} {...rest}/>
        </label>
    </Container>
  )  
}