import Sweet from '../../assets/images/image1.png'

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { FoodSection } from '../../components/FoodSection';
import { FoodList } from '../../components/FoodList';
import { CardFood } from '../../components/CardFood';

import { Container, Section } from "./styles";

import React from 'react';


export function Home(){
    return (
        <Container>
            <Header />

            {/* <main>
                <Section>
                        <img src={Sweet} alt="Doces na tela"/>
                        <div>
                            <h2>Sabores inigualáveis</h2>
                            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                        </div>  
                </Section>

              
            </main> */}

            {/* <Footer /> */}
        </Container>
    )
}