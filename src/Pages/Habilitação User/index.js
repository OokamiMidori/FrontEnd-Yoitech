import { Footer } from "../../components/footer"
import { Header } from "../../components/header"
import { NextAndBackImg } from "../Signup User/styledSigUpUser"
import { SelectCard, UserHabilitacaoCard, UserHabilitacaoPageStyled } from "./styledUserHabilitacaoPage"
import next from "../../assets/next-3.svg"
import returne from "../../assets/return-2.svg"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { goToUserAdressPage, goToUserJapaneseLevel } from "../../routes"

export const UserHabilitacaoPage = () => {
    const navigate = useNavigate()
    const [habilitacao, setHabilitacao] = useState("")
    const [transporte, setTransporte] = useState("")
    const [escolaridade, setEscolaridade] = useState("")
    const [profissionalHabilitacao, setProfissionalHabilitacao] = useState("")

    const grauDeEscolaridade = [
        { name: "Tipo" },
        { name: "Fundamental Incompleto" },
        { name: "Fundamental Completo" },
        { name: "Ensino Médio Incompleto" },
        { name: "Ensino Médio Completo" },
        { name: "Ensino Técnico Incompleto" },
        { name: "Ensino Técnico Completo" },
        { name: "Superior ou Tecnólogo Incompleto" },
        { name: "Superior ou Tecnólogo Completo" }
    ]

    const transporteArray = [
        { name: "Tipo" },
        { name: "Não" },
        { name: "Bicicleta" },
        { name: "Motoneta 50cc" },
        { name: "Moto" },
        { name: "Carro" }

    ]

    const habilitacaoArray = [
        { name: "Tipo" },
        { name: "Não" },
        { name: "Carro AT/MT" },
        { name: "Caminhão de pequeno porte" },
        { name: "Caminhão de médio porte" },
        { name: "Caminhão de grande porte" },
        { name: "Motoneta de 50cc" },
        { name: "Moto comum" },
        { name: "Moto de grande porte" }

    ]

    const habilitacaoProfissionalArray = [
        { name: "Tipo" },
        { name: "Não" },
        { name: "Empilhadeira" },
        { name: "Ponte Rolante" },
        { name: "Solda" },
        { name: "Cuidador de idoso" }
    ]

    return (
        <UserHabilitacaoPageStyled>
            <Header />
            <UserHabilitacaoCard>
                <h1>Cadastro</h1>
                <SelectCard>
                    <div>Possui Habilitação de carro ou moto no Japão?</div>
                    <select placeholder="Tipo"
                        value={habilitacao}
                        onChange={(e) => setHabilitacao(e.target.value)}
                    >
                        {habilitacaoArray.map((a) => {
                            return <option value={a.name}>{a.name}</option>
                        })}
                    </select>
                    <div>Possui algum meio de transporte?</div>
                    <select
                        value={transporte}
                        onChange={(e) => setTransporte(e.target.value)}
                    >
                        {transporteArray.map((a) => {
                            return <option value={a.name}>{a.name}</option>
                        })}
                    </select>
                    <div>Qual o seu grau de escolaridade?</div>
                    <select
                    value={escolaridade}
                    onChange={(e) => setEscolaridade(e.target.value)}>
                        {grauDeEscolaridade.map((a) => {
                            return <option value={a.name}>{a.name}</option>
                        })}
                    </select>
                    <div>Possui Habilitação profissional no Japão?</div>
                    <select
                    value={profissionalHabilitacao}
                    onChange={(e) => setProfissionalHabilitacao(e.target.value)}>
                        {habilitacaoProfissionalArray.map((a) => {
                            return <option value={a.name}>{a.name}</option>
                        })}
                    </select>
                </SelectCard>
                <NextAndBackImg>
                    <img src={returne} onClick={()=>goToUserAdressPage(navigate)}/>
                    <img src={next} onClick={()=>goToUserJapaneseLevel(navigate)}/>
                </NextAndBackImg>
            </UserHabilitacaoCard>
            <Footer />
        </UserHabilitacaoPageStyled>
    )
}