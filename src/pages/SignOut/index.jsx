import { Container, Form } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonLink } from '../../components/ButtonLink';
import { Logo } from '../../components/Logo';


export function SignOut() {
  
  return (
    <Container>
      <Logo/>
      <Form>
        <Input type="text" title="Seu nome" placeholder="Exemplo: Maria da Silva" />
        <Input type="email" title="Email" placeholder="Exemplo: exemplo@exemplo.com.br" />
        <Input type="password" title="Senha" placeholder="No mínimo 6 caracteres" />

        <Button title="Entrar"/>
        <ButtonLink title="Já tenho uma conta"/>
      </Form>
    </Container>

  )
}
