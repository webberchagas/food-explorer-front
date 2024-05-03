import { Container, Form } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonLink } from '../../components/ButtonLink';
import { Logo } from '../../components/Logo';


export function SignIn() {
  
  return (
    <Container>
      <Logo/>
      <Form>
        <Input type="text" title="Email" placeholder="Exemplo: exemplo@exemplo.com.br" name="email"/>
        <Input type="password" title="Senha" placeholder="No mínimo 6 caracteres" name="password"/>

        <Button title="Entrar"/>
        <ButtonLink title="Criar uma conta"/>
      </Form>
    </Container>

  )
}
