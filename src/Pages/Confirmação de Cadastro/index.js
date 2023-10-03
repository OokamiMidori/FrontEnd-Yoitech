import { useContext } from "react"
import { Footer } from "../../components/footer"
import { Header } from "../../components/header"
import { ConfirmationPageStyled, ConfirmationMensageCard, AvisoCard, BottonCard, AlterarEmailCard, EnviarEmailCard, MensageTopCard } from "./styledConfirmationEmail"
import { UserContext } from "../../contexts/UserContext"
import { useNavigate } from "react-router-dom"
import { goToConfirmedPage, goToContactPage, goToDetailsUserSingUp } from "../../routes"

export const ConfirmationPageUser = () => {
    const context = useContext(UserContext)
    const { email } = context
    const navigate = useNavigate()

    return (
        <ConfirmationPageStyled>
            <Header />
            <ConfirmationMensageCard>
                <h1>Confirmação de e-mail</h1>
                <MensageTopCard>

                    <div>
                        <span>
                            Esta ação requer um e-mail de verificação. Por favor, verifique a sua caixa de entrada e siga as instruções. O link de confirmação será enviado para:
                        </span>
                        <div> {email} </div>
                    </div>
                </MensageTopCard>

                <AvisoCard>
                    <div>
                        <span className="aviso">
                            Atenção:
                        </span>
                        <span>
                            Em alguns casos o e-mail pode cair na caixa de
                        </span>
                        <span className="aviso"> LIXO ELETRÔNICO </span>
                        <span>
                            ou
                        </span>
                        <span className="aviso"> SPAM.</span>
                    </div>
                </AvisoCard>
                <BottonCard>
                    <AlterarEmailCard onClick={()=>goToDetailsUserSingUp(navigate)}>
                        <div>
                            Alterar endereço de e-mail
                        </div>

                    </AlterarEmailCard>

                    <EnviarEmailCard onClick={()=> goToConfirmedPage(navigate)} > 
                        <div>
                            Enviar e-mail de confirmação
                        </div>

                    </EnviarEmailCard>

                </BottonCard>
            </ConfirmationMensageCard>
            <Footer />
        </ConfirmationPageStyled>
    )
}