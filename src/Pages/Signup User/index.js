import { useNavigate } from "react-router-dom"
import { Footer } from "../../components/footer"
import { Header } from "../../components/header"
import { ContainerCard, NextAndBackImg, SingUpUserCard, StyledSingUpUserContainer, TermosContainer } from "./styledSigUpUser"
import { useState } from "react"
import setaAvancar from "../../assets/next-3.svg"
import setaRetornar from "../../assets/return-2.svg"
import { goToDetailsUserSingUp, goToHomePage } from "../../routes"

export const SingUpUser = () => {
    const navigate = useNavigate()
    const [isChecked, setIsChecked] = useState(false)
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const goToCadastroPessoal = () => {



        if ( email !== "" && password !== "" && confirmPassword !== "") {
            if (password !== confirmPassword) {
                alert("Senhas precisam ser iguais!")
            } else {
                if (!isChecked) {
                    alert("Favor confirmar que aceita os termos e condições")
                }
                else {
                    goToDetailsUserSingUp(navigate)
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
        <StyledSingUpUserContainer>
            <Header />
            <div>
                <SingUpUserCard>
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
                                <input type="checkbox" onChange={handleCheckboxChange} checked={isChecked} />
                                <span> Aceito os</span>
                                <span className="termos"> Termos de Uso</span>
                                <span> e </span>
                                <span className="termos">Política de Privacidade</span>
                            </TermosContainer>

                        </div>

                    </ContainerCard>
                    <NextAndBackImg>
                        <img src={setaRetornar} onClick={() => goToHomePage(navigate)} />
                        <img src={setaAvancar} onClick={() => goToCadastroPessoal()} />
                    </NextAndBackImg>
                </SingUpUserCard>
            </div>
            <Footer />
        </StyledSingUpUserContainer>
    )
}