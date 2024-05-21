import Menu from '../../assets/icons/Menu.svg';
import Receipt from '../../assets/icons/Receipt.svg';
import SignOut from '../../assets/icons/SignOut.svg';


import { ButtonIcon } from '../ButtonIcon';
import { Button } from '../Button';

import { Logo } from '../Logo';

import { Container, Cart, MobileMenu, DesktopMenu} from "./styles";

export function Header(){
    const isAdmin = true
    
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

            <DesktopMenu>
                <Logo/>
                <input type="text" />
                <div>
                    <ButtonIcon icon={Receipt} title="Menu de opções" />
                    <Button title="Pedidos (0)" />
                </div>

                <button>
                    <img src={SignOut}/>
                </button>
            </DesktopMenu>
        </Container>
    )
}