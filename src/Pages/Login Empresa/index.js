import { useState } from "react"
import { Footer } from "../../components/footer"
import { Header } from "../../components/header"
import { CompanyLoginContainer, LoginCompanyContainer, LoginContainer } from "./styledCompanyLogin"
import { useNavigate } from "react-router-dom"
import { goToSingUpCompany } from "../../routes"

export const CompanyLogin = () => {
    const [comapnyName, setCompanyName] = useState("")
    const [companyPassword, setCompanyPassword] = useState("")
    const navigate = useNavigate()



    return (
        <CompanyLoginContainer>
            <Header />
            <LoginCompanyContainer>
                <LoginContainer>
                    <div>
                        <h3>Acesse o seu cadastro</h3>
                        <h2 className="titulo">Empresa</h2>
                    </div>
                    <div className="form">
                        <div>E-mail ou usuário</div>
                        <input type="text" onChange={(e) => setCompanyName(e.target.value)} />
                    </div>
                    <div className="form">
                        <div>Senha</div>
                        <input type="text" onChange={(e) => setCompanyPassword(e.targert.value)} />
                    </div>
                    <div className="botao">
                        <button className="entrar">Entrar</button>
                        <button className="criarCadastro" onClick={()=>goToSingUpCompany(navigate)} >Criar cadastro</button>
                    </div>

                    <p>Recuperar cadastro</p>
                </LoginContainer>

            </LoginCompanyContainer>
            <Footer />
        </CompanyLoginContainer>
    )
}