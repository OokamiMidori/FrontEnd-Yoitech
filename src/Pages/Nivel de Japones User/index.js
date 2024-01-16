import { Footer } from "../../components/footer"
import { Header } from "../../components/header"
import { JapaneseLevelUserCard, JapaneseLevelUserPageStyled, LevelCard, NextAndBackImgLinguage } from "./styledJapaneseLevelUser"
import next from "../../assets/next-3.svg"
import voltar from "../../assets/return-2.svg"
import { useContext, useState } from "react"
import { goToUserHabilitacaoPage, goToUserStatusJapanese } from "../../routes"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../contexts/UserContext"

export const UserJapaneseLevelPage = () => {
    // const [conversacao, setConversacao] = useState("")
    // const [leitura, setLeitura] = useState("")
    const navigate = useNavigate()
    const context = useContext(UserContext)
    const {conversacao, setConversacao, leitura, setLeitura} = context

    return (
        <JapaneseLevelUserPageStyled>
            <Header />
            <JapaneseLevelUserCard>
                <div className="Titulo">Cadastro</div>
                <div className="conversacao">
                    <div className="inputTitulo">Seu nível de compreensão e conversação da língua Japonesa</div>
                    <input type="range" min="0" max="100" value={conversacao} onChange={(e) => setConversacao(e.target.value)} />
                    <LevelCard>
                        <div onClick={() => setConversacao("0")} className="nivelCard">Nada 0%</div>
                        <div onClick={() => setConversacao("25")} className="nivelCard">Básico 25%</div>
                        <div onClick={() => setConversacao("50")} className="nivelCard">Intermediario 50%</div>
                        <div onClick={() => setConversacao("75")} className="nivelCard">Avançado 75%</div>
                        <div onClick={() => setConversacao("100")} className="nivelCard">Fluente 100%</div>
                    </LevelCard>
                </div>
                <div className="leitura">
                    <div className="inputTitulo">Seu nível de leitura e escrita da língua japonesa</div>
                    <input type="range" min="0" max="100" value={leitura} onChange={(e) => setLeitura(e.target.value)} />
                    <LevelCard>
                        <div onClick={() => setLeitura("0")} className="nivelCard">Nada 0%</div>
                        <div onClick={() => setLeitura("50")} className="nivelCard">ひ・カ 50%</div>
                        <div onClick={() => setLeitura("100")} className="nivelCard">ひ・カ・漢字 100%</div>
                    </LevelCard>
                </div>
                <NextAndBackImgLinguage>
                    <img src={voltar} onClick={()=>goToUserHabilitacaoPage(navigate)}/>
                    <img src={next} onClick={()=>goToUserStatusJapanese(navigate)}/>
                </NextAndBackImgLinguage>
            </JapaneseLevelUserCard>
            <Footer />
        </JapaneseLevelUserPageStyled>

    )
}