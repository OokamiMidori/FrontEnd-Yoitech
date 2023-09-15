import { useNavigate } from "react-router-dom"
import { Footer } from "../../components/footer"
import { Header } from "../../components/header"
import { ContainerCard, NextAndBackImg, SingUpUserCard, StyledSingUpUserContainer, TermosContainer } from "./styledSigUpUser"
import { useState } from "react"
import setaAvancar from "../../assets/avancar-seta.png"
import setaRetornar from "../../assets/voltar-seta.png"
import { goToDetailsUserSingUp, goToHomePage } from "../../routes"

export const SingUpUser = () => {
    const navigate = useNavigate()
    const [isChecked, setIsChecked] = useState(false)
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const goToCadastroPessoal = () => {
        if (!isChecked) {
            alert("Favor confirmar que aceita os termos e condições")
        }

        if (password !== confirmPassword) {
            alert("Senhas precisam ser iguais!")
        }
        if (password === confirmPassword && email !== "" && password !== "") {
            goToDetailsUserSingUp(navigate)
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