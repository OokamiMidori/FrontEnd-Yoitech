import { useContext, useState } from "react"
import { Footer } from "../../components/footer"
import { Header } from "../../components/header"
import { ChangeSelectUser, ChangeUserCard, ChangeUserStyledPage } from "./styledChangeUser"
import next from "../../assets/next-3.svg"
import back from "../../assets/return-2.svg"
import { NextAndBackImg } from "../Signup User/styledSigUpUser"
import { useNavigate } from "react-router-dom"
import { goToJobUserDetails, goToMeasurementUserPage } from "../../routes"
import { UserContext } from "../../contexts/UserContext"

export const ChangeUserPage = () => {
    const navigate = useNavigate()
    const context = useContext(UserContext)
    // const [moradia, setMoradia] = useState("")
    // const [canChange, setCanChange] = useState("")
    // const [transporte, setTransporte] = useState("")
    // const [pet, setPet] = useState("")

    const { moradia, setMoradia, canChange, setCanChange, transporte, setTransporte, pet, setPet } = context

    return (
        <ChangeUserStyledPage>
            <Header />
            <ChangeUserCard>
                <div className="titulo">Cadastro</div>
                <ChangeSelectUser>
                    <div>
                        <div>Precisa de moradia da empresa?</div>
                        <select value={moradia} onChange={(e) => setMoradia(e.target.value)}>
                            <option value={"Não"}>Não</option>
                            <option value={"Sim"}>Sim</option>
                        </select>
                    </div>
                    <div>
                        <div>Possui disponibilidade para mudança?</div>
                        <select value={canChange} onChange={(e) => setCanChange(e.target.value)}>
                            <option value={"Não"}>Não</option>
                            <option value={"Sim"}>Sim</option>
                        </select>
                    </div>
                    <div>
                        <div>Precisa de transporte para a mudança?</div>
                        <select value={transporte} onChange={(e) => setTransporte(e.target.value)}>
                            <option value={"Não"}>Não</option>
                            <option value={"Sim preciso de um wagon"}>Sim preciso de um wagon</option>
                            <option value={"sim preciso de um caminhão"}>Sim preciso de um caminhão</option>
                        </select>
                    </div>
                    <div className="containerPequeno">
                        <div>Pet?</div>
                        <select value={pet} onChange={(e) => setPet(e.target.value)}>
                            <option value={"Não"}>Não</option>
                            <option value={"Sim"}>Sim</option>
                        </select>
                    </div>
                </ChangeSelectUser>

                <NextAndBackImg>
                    <img src={back} onClick={() => goToJobUserDetails(navigate)} />
                    <img src={next} onClick={() => goToMeasurementUserPage(navigate)} />
                </NextAndBackImg>
            </ChangeUserCard>
            <Footer />
        </ChangeUserStyledPage>
    )
}