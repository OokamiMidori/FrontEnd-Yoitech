import { useState } from "react"
import { Footer } from "../../components/footer"
import { Header } from "../../components/header"
import { InputMeasurementCard, MeasurementUserPageCard, MeasurementUserPageStyled, SelectsCard } from "./styledMeasurementUser"
import next from "../../assets/next-3.svg"
import back from "../../assets/return-2.svg"
import { NextAndBackImg } from "../Signup User/styledSigUpUser"
import { goToChageUser } from "../../routes"
import { useNavigate } from "react-router-dom"

export const MeasurementsUserPage = () => {
    const navigate = useNavigate()
    const [altura, setAltura] = useState("")
    const [peso, setPeso] = useState("")
    const [sapato, setSapato] = useState("")
    const [camisa, setCamisa] = useState("")
    const [calca, setCalca] = useState("")
    const [mao, setMao] = useState("")
    const [oculos, setOculos] = useState("")
    const [tatuagem, setTatuagem] = useState("")
    const [piercing, setPierging] = useState("")
    const [fumante, setFumante] = useState("")
    const [pet, setPet] = useState("")
    const [medical, setMedical] = useState("")

    const medidasArray = [
        { name: "S" },
        { name: "M" },
        { name: "L" },
        { name: "2L" },
        { name: "3L" },
        { name: "4L" },
        { name: "5L" },
        { name: "6L" }
    ]

    return (
        <MeasurementUserPageStyled>
            <Header />
            <MeasurementUserPageCard>
                <div className="titulo">Cadastro</div>
                <InputMeasurementCard className="container">
                    <div>
                        <div>Altura</div>
                        <input placeholder="1.75" onChange={(e) => setAltura(e.target.value)} />
                    </div>
                    <div>
                        <div>Peso</div>
                        <input onChange={(e) => setPeso(e.target.value)} placeholder="85" />
                    </div>
                    <div>
                        <div>sapato</div>
                        <input placeholder="27.5" onChange={(e) => setSapato(e.target.value)} />
                    </div>
                </InputMeasurementCard>
                <SelectsCard>
                    <div className="subTitulo">Tamanho do seu Uniforme</div>
                    <div className="container">
                        <div className="containerPequeno">
                            <div>camisa</div>
                            <select onChange={(e) => setCamisa(e.target.value)}>
                                {medidasArray.map((a) => {
                                    return <option value={a.name}>{a.name}</option>
                                })}
                            </select>
                        </div>
                        <div className="containerPequeno">
                            <div>Calça</div>
                            <select onChange={(e) => setCalca(e.target.value)}>
                                {medidasArray.map((a) => {
                                    return <option value={a.name}>{a.name}</option>
                                })}
                            </select>
                        </div>
                        <div className="containerPequeno">
                            <div>Mão hábil</div>
                            <select onChange={(e) => setMao(e.target.value)}>
                                <option value={"Destro"}>Destro</option>
                                <option value={"Canhoto"}>Canhoto</option>
                                <option value={"Ambidestro"}>Ambidestro</option>
                            </select>
                        </div>
                    </div>
                    <div className="container">
                        <div className="containerPequeno">
                            <div>Usa óculos?</div>
                            <select onChange={(e) => setOculos(e.target.value)}>
                                <option value={"Não"}>Não</option>
                                <option value={"Sim"}>Sim</option>
                            </select>
                        </div>
                        <div className="containerPequeno">
                            <div>Tatuagem?</div>
                            <select onChange={(e) => setTatuagem(e.target.value)}>
                                <option value={"Não"}>Não</option>
                                <option value={"Sim, mas não visível com manga curta"}>Sim, mas não visível com manga curta</option>
                                <option value={"Sim, mas não visível com manga comprida"}>Sim, mas não visível com manga comprida</option>
                                <option value={"Sim, visível com manga comprida"}>Sim, visível com manga comprida</option>
                            </select>
                        </div>
                        <div className="containerPequeno">
                            <div>Piercing?</div>
                            <select onChange={(e) => setPierging(e.target.value)}>
                                <option value={"Não"}>Não</option>
                                <option value={"Sim, posso tirar durante o trabalho"}>Sim, posso tirar durante o trabalho</option>
                                <option value={"Sim, não posso tirar durante o trabalho"}>Sim, não posso tirar durante o trabalho</option>
                            </select>
                        </div>
                    </div>
                    <div className="container">
                        <div className="containerPequeno">
                            <div>Fumante?</div>
                            <select onChange={(e) => setFumante(e.target.value)}>
                                <option value={"Não"}>Não</option>
                                <option value={"Sim consigo ficar de 2 a 3 horas sem fumar"}>Sim consigo ficar de 2 a 3 horas sem fumar</option>
                                <option value={"Sim consigo ficar de 6 a 8 horas sem fumar"}>Sim consigo ficar de 6 a 8 horas sem fumar</option>
                                <option value={"Sim consigo ficar mais de horas sem fumar"}>Sim consigo ficar mais de 12 horas sem fumar</option>
                            </select>
                        </div>
                        <div className="containerPequeno">
                            <div>Pet?</div>
                            <select onChange={(e) => setPet(e.target.value)}>
                                <option value={"Não"}>Não</option>
                                <option value={"Sim"}>Sim</option>
                            </select>
                        </div>
                        <div className="containerPequeno">
                            <div>Tratamento médico?</div>
                            <select onChange={(e) => setMedical(e.target.value)}>
                                <option value={"Não"}>Não</option>
                                <option value={"Sim e tomo medicamento"}>Sim e tomo medicamento</option>
                                <option value={"Sim e faço acompanhamento médico"}>Sim e faço acompanhamento médico</option>
                            </select>
                        </div>
                    </div>

                </SelectsCard>
                <NextAndBackImg>
                    <img src={back} onClick={() => goToChageUser(navigate)} />
                    <img src={next} />
                </NextAndBackImg>
            </MeasurementUserPageCard>
            <Footer />
        </MeasurementUserPageStyled>
    )
}