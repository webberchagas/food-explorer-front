import Menu from '../../assets/icons/Menu.svg';
import Receipt from '../../assets/icons/Receipt.svg';

import { ButtonIcon } from '../ButtonIcon';
import { Logo } from '../Logo';

import { Container, Cart, MobileMenu, DesktopMenu} from "./styles";

export function Header(){
    return (
        <Container>
            <MobileMenu>
                <ButtonIcon icon={Menu} title="Menu de opções"/>
                <Logo/>
                <Cart>
                    <ButtonIcon icon={Receipt} title="Carrinho"/>
                    <span>0</span>
                </Cart>
            </MobileMenu>

            {/* <DesktopMenu>
                <Logo/>
            </DesktopMenu> */}
        </Container>
    )
}