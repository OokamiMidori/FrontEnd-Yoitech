import { Footer } from "../../components/footer"
import { Header } from "../../components/header"
import { ConfirmationPageStyled, ConfirmationMensageCard,AvisoCard } from "./styledConfirmationEmail"

export const ConfirmationPageUser = () =>{

    return(
        <ConfirmationPageStyled>
            <Header/>
            <ConfirmationMensageCard>
                <h1>Confirmação de e-mail</h1>
                <div>
                    <span>
                    Esta ação requer um e-mail de verificação. Por favor, verifique a sua caixa de entrada e siga as instruções. O link de confirmação será enviado para:
                    </span>
                </div>
                <AvisoCard>
                    <span>
                        Atenção:
                    </span>
                    <span>
                        Em alguns casos o e-mail pode cair na caixa de 
                    </span>
                    <h2>LIXO ELETRÔNICO</h2>
                    <span>
                        ou
                    </span>
                    <h2>SPAM.</h2>
                </AvisoCard>
                <div>
                    <div>
                        Alterar endereço de e-mail
                    </div>

                    <div>
                        Emviar e-mail de confirmação
                    </div>

                </div>
            </ConfirmationMensageCard>
            <Footer/>
        </ConfirmationPageStyled>
    )
}