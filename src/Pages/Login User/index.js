import { useState } from "react"
import { Footer } from "../../components/footer"
import { Header } from "../../components/header"
import { CardLoginUser, LoginUserContainer } from "./styledUserLogin"

export const UserLogin = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    
    return (
        <LoginUserContainer>
            <Header />
            <CardLoginUser>
                <div>
                    <h3>Acesse o seu cadastro</h3>
                    <h2>Candidato</h2>
                </div>
                <div className="form">
                    <div>
                    E-mail ou usuário
                </div>
                    <input value={userName} placeholder="E-mail ou Usúario" onChange={(e)=>setUserName(e.target.value)}/>
                </div>
                <div className="form">
                    <div>Senha</div>
                    <input value={password} placeholder="Password" name="password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button className="entrar">Entrar</button>
                <button className="criarCadastro">Criar cadastro</button>
                <p>Recuperar cadastro</p>
            </CardLoginUser>
            <Footer />
        </LoginUserContainer>
    )
}