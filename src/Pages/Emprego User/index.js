import { useContext, useState } from "react"
import { Footer } from "../../components/footer"
import { Header } from "../../components/header"
import { useNavigate } from "react-router-dom"
import { JobUserSelectCard, UserJobDetailsCard, UserJobDetailsStyled } from "./styledEmpregouser"
import next from "../../assets/next-3.svg"
import back from "../../assets/return-2.svg"
import { NextAndBackImg } from "../Signup User/styledSigUpUser"
import { goToChageUser, goToUserJapaneseLevel, goToUserStatusJapanese } from "../../routes"
import { UserContext } from "../../contexts/UserContext"

export const StatusJobUserPage = ()=>{
    const navigate = useNavigate()
    const context = useContext(UserContext)
    // const [empregado, setEmpregado] = useState("")
    // const [salario, setSalario]= useState("")
    // const [novoEmprego, setNovoEmprego] = useState("")
    // const [horaExtra, setHoraExtra] = useState("")

    const {empregado, setEmpregado, salario, setSalario, novoEmprego, setNovoEmprego, horaExtra, setHoraExtra} = context

    return(
        <UserJobDetailsStyled>
        <Header/>
        <UserJobDetailsCard>
            <div className="titulo">Cadastro</div>
            <JobUserSelectCard>
                <div>Esta Trabalhando?</div>
                <select value={empregado} onChange={(e)=>setEmpregado(e.target.value)} className="trabalho">
                <option value={"Sim"}>Sim</option>
                <option value={"Não"}>Não</option>
                <option value={"Cumprindo aviso"}>Cumprindo aviso</option>
                </select>
            </JobUserSelectCard>
            <JobUserSelectCard>
                <div>Pretenção salarial</div>
                <div className="forms">
                    <div>Acima de ¥</div><input placeholder="1000" value={salario} onChange={(e)=>setSalario(e.target.value)}/>
                </div>
            </JobUserSelectCard>
            <JobUserSelectCard>
                <div>Apartir de quando você pode começar no novo emprego?</div>
                <select value={novoEmprego} className="inicio" onChange={(e)=>setNovoEmprego(e.target.value)} >
                    <option value={"Imediato"}>Imediato</option>
                    <option value={"Preciso cumprir o aviso prévio de()dias"}>Preciso cumprir o aviso prévio de alguns dias.</option>
                </select>
            </JobUserSelectCard>
            <JobUserSelectCard>
                <div>Pode fazer horas extras?</div>
                <select value={horaExtra} onChange={(e)=>setHoraExtra(e.target.value)} className="extra">
                    <option value={"Não"}>Não</option>
                    <option value={"Sim"}>Sim</option>
                </select>
            </JobUserSelectCard>
            <NextAndBackImg>
                <img src={back} onClick={()=>goToUserStatusJapanese(navigate)}/>
                <img src={next} onClick={()=>goToChageUser(navigate)}/>
            </NextAndBackImg>
        </UserJobDetailsCard>
        <Footer/>
        </UserJobDetailsStyled>
    )
}