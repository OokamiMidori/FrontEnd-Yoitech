import { useNavigate } from "react-router-dom"
import { Footer } from "../../components/footer"
import { Header } from "../../components/header"
import { useEffect, useState } from "react"
import { JapaneseStatusCard, JapaneseStatusPageStyled, SelectJapaneseStatusCard } from "./styledJapaneseStatusUser"
import next from "../../assets/next-3.svg"
import back from "../../assets/return-2.svg"
import { NextAndBackImg } from "../Signup User/styledSigUpUser"
import { goToJobUserDetails, goToUserJapaneseLevel } from "../../routes"

export const JapaneseStatusNivelPage = () => {
    const navigate = useNavigate()
    const [descendencia, setDescendencia] = useState("")
    const [visa, setVisa] = useState("")
    const [filhos, setFilhos] = useState("")
    const [escolaFilhos, setEscolaFilhos] = useState("")
    const [numeroDeFilhos, setNumeroDeFilhos] = useState("")
    const [temFilhos, setTemFilhos] = useState(false)

    const grauDeDescendenciaArray = [
        { name: "Descendente de Japoneses" },
        { name: "Japones (Isei)" },
        { name: "2 geracao (Nisei)" },
        { name: "3 geracao (Sansei)" },
        { name: "4 geracao (Yonsei)" },
        { name: "Nao descendente" },
        { name: "Dupla cidadania" }
    ]

    const vistoArray = [
        { name: "Descendente de Japones" },
        { name: "Cônjuge ou filho de japonês" },
        { name: "Cônjuge de residente permanente" },
        { name: "Residente permanente" },
        { name: "Residentes de longo prazo" },
        { name: "Atividades definidas" },
        { name: "Tecnologia · Humanitario · Negocios internacionais" },
        { name: "Estudante" },
        { name: "Visto de curta estadia" },
        { name: "Dependente familiar" },
        { name: "Refugiado" }
    ]

    useEffect(() => {
        if (escolaFilhos !== "") {
            if (escolaFilhos !== "Não") {
                setTemFilhos(true)
            }
        }
    }, [escolaFilhos]);
    

    return (
        <JapaneseStatusPageStyled>
            <Header />
            <JapaneseStatusCard>
                <div className="titulo">Cadastro</div>
                <div>
                    <SelectJapaneseStatusCard>
                        <div>Grau de descendencia Japonesa?</div>
                        <select onChange={(e) => setDescendencia(e.target.value)}>
                            {grauDeDescendenciaArray.map((a) => {
                                return <option value={a.name}>{a.name}</option>
                            })}
                        </select>
                    </SelectJapaneseStatusCard>
                    <SelectJapaneseStatusCard>
                        <div>Qual o seu tipo de Visto?</div>
                        <select onChange={(e) => setVisa(e.target.value)}>
                            {vistoArray.map((a) => {
                                return <option value={a.name}>{a.name}</option>
                            })}
                        </select>
                    </SelectJapaneseStatusCard>
                    <SelectJapaneseStatusCard>
                        <div>Tem filho(s) no Japão?</div>
                        <select onChange={(e) => setFilhos(e.target.value)}>
                            <option value={"Não"}>Não</option>
                            <option value={"Sim"}>Sim</option>
                        </select>
                    </SelectJapaneseStatusCard>
                    <SelectJapaneseStatusCard>
                        <div>Tem filho(s) em idade escolar?</div>
                        <select onChange={(e) => setEscolaFilhos(e.target.value)}>
                            <option value={"Não"}>Não</option>
                            <option value={"Creche"}>Creche</option>
                            <option value={"Fundamental"}>Fundamental</option>
                            <option value={"Ensino Medio"}>Ensino Medio</option>
                            <option value={"Superior"}>Superior</option>
                        </select>
                    </SelectJapaneseStatusCard>
                </div>
                <NextAndBackImg>
                    <img src={back} onClick={() => goToUserJapaneseLevel(navigate)} />
                    <img src={next} onClick={() => goToJobUserDetails(navigate)} />
                </NextAndBackImg>
            </JapaneseStatusCard>
            <Footer />
        </JapaneseStatusPageStyled>
    )
}