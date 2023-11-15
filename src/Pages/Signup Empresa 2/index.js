import { Header } from "../../components/header/index"
import { Footer } from "../../components/footer"
import { CompanyDetailsStyled, SingupDetailsContainer } from "./SingupCompanyDetailsStyled"
import { ContainerCard, NextAndBackImg, TermosContainer } from "../Signup User/styledSigUpUser"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import setaAvancar from "../../assets/next-3.svg"
import setaRetornar from "../../assets/return-2.svg"
import { useNavigate } from "react-router-dom"
import { goToEmailConfirmationCompany, goToSingUpCompany } from "../../routes"


export const SingupCompanyDetails = () => {
    const context = useContext(UserContext);
    const navigate = useNavigate()

    const { isChecked, setIsChecked, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword } = context;

    const goToPageConfirmation = () => {



        if (email !== "" && password !== "" && confirmPassword !== "") {
            if (password !== confirmPassword) {
                alert("Senhas precisam ser iguais!")
            } else {
                if (!isChecked) {
                    alert("Favor confirmar que aceita os termos e condições")
                }
                else {
                    goToEmailConfirmationCompany(navigate)
                }
            }
        } else {
            alert("Verifique se preencheu as informações com itens válidos")
        }

    }


    const handleCheckboxChange = () => {
        setIsChecked(!isChecked)
    }



    return (
        <CompanyDetailsStyled>
            <Header />
            <SingupDetailsContainer>
                <ContainerCard>
                    <h3>Cadastro</h3>
                    <div>
                        <p>Email</p>
                        <input type="email" className="input" name="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <p>Senha de acesso</p>
                        <input type="password" className="input" name="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <p>Confirmação de senha</p>
                        <input type="password" className="input" name="confirmPassword" placeholder="Confirmação da senha" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        <TermosContainer>
                            <input className="checkbox" type="checkbox" onChange={handleCheckboxChange} checked={isChecked} />
                            <div>
                                <span> Aceito os</span>
                            <span className="termos"> Termos de Uso</span>
                            <span> e </span>
                            <span className="termos">Política de Privacidade</span>  
                            </div>
                          
                        </TermosContainer>

                    </div>

                </ContainerCard>
                <NextAndBackImg>
                        <img src={setaRetornar} onClick={() => goToSingUpCompany(navigate)} />
                        <img src={setaAvancar} onClick={() => goToPageConfirmation()} />
                    </NextAndBackImg>
            </SingupDetailsContainer>
            <Footer />
        </CompanyDetailsStyled>
    )
}