import { useNavigate } from "react-router-dom"
import { Footer } from "../../components/footer"
import { Header } from "../../components/header"
import { AlterarEmailCard, AvisoCard, BottonCard, ConfirmationMensageCard, ConfirmationPageStyled, EnviarEmailCard, MensageTopCard } from "../Confirmação de Cadastro/styledConfirmationEmail"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { goToEmailConfirmedCompany, goToSingupCompanyDetails } from "../../routes"

export const ConfirmacaoDeEmailCompany = () => {
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
                    <AlterarEmailCard onClick={() => goToSingupCompanyDetails(navigate)}>
                        <div>
                            Alterar endereço de e-mail
                        </div>

                    </AlterarEmailCard>

                    <EnviarEmailCard onClick={() => goToEmailConfirmedCompany(navigate)} >
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