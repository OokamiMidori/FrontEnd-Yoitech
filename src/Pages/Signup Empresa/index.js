import { Footer } from "../../components/footer"
import { Header } from "../../components/header"
import { SingUpCompanyContainer, SingUpCompanyPageContainer } from "./SingUpCompanyStyled"
import next from "../../assets/next-3.svg"
import { useState } from "react"

export const SingUpCompanyPage = () => {
    const [companyName, setCompanyName] = useState("")
    const [userName, setUserName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [cellNumber, setCellNumber] = useState("")
    const [cnpj, setCNPJ] = useState("")


    return (
        <SingUpCompanyPageContainer>
            <Header />
            <div>
                <SingUpCompanyContainer>
                    <div className="titulo">Cadastro</div>
                    <div className="form">
                        <div>Nome da empresa</div>
                        <input type="text" placeholder="Nome conforme registrado" onChange={(e)=>setCompanyName(e.target.value)}/>
                    </div>
                    <div className="form">
                        <div>Nome do responsável</div>
                        <input type="text" placeholder="xxx-xxxx-xxxx" onChange={(e)=>setUserName(e.target.value)} />
                    </div>
                    <div className="telphone">
                        <div>
                            <div>Telefone</div>
                            <input type="tel" placeholder="xxx-xxxx-xxxx" onChange={(e)=>setPhoneNumber(e.target.value)} />
                        </div>
                        <div>
                            <div>Celular</div>
                            <input type="text" placeholder="xxx-xxxx-xxxx" onChange={(e)=>setCellNumber(e.target.value)} />
                        </div>
                    </div>
                    <div className="form">
                        <div>CNPJ ou número de registro da empresa</div>
                        <input placeholder="xxx-xxxx-xxxx" typeof="text" onChange={(e)=>setCNPJ(e.target.value)}/>
                    </div>
                    <div className="img">
                        <img src={next} alt="next-img.png"/>
                    </div>
                </SingUpCompanyContainer>
            </div>
            <Footer />
        </SingUpCompanyPageContainer>

    )
}