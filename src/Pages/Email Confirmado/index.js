import { Footer } from "../../components/footer"
import { Header } from "../../components/header"
import { EmailConfirmedCard, EmailConfirmedPage, ImgContainerConfirmEmailCard } from "./styledEmailConfirmed"
import next from "../../assets/next-3.svg"
import { useNavigate } from "react-router-dom"
import { goToUserAdressPage } from "../../routes"

export const EmailConfirmadoPage = () => {
    const navigate = useNavigate()


    return (
        <EmailConfirmedPage>
            <Header />
            <EmailConfirmedCard>
                <h1>Seja bem vindo novamente!</h1>
                <div>
                    Para garantirmos a sua segurança, proteção de sua conta e recuperação da sua senha em caso de problema, agradecemos a sua confirmação. Para dar continuidade no seu cadastro clique na seta abaixo.

                </div>
                <ImgContainerConfirmEmailCard>
                    <img src={next} onClick={()=> goToUserAdressPage(navigate)} />
                </ImgContainerConfirmEmailCard>

            </EmailConfirmedCard>
            <Footer />
        </EmailConfirmedPage>
    )
}