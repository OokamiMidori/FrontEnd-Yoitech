import { useState } from "react"
import { Footer } from "../../components/footer"
import { Header } from "../../components/header"
import { CompanyLoginContainer } from "./styledCompanyLogin"

export const CompanyLogin = () => {
const [comapnyName, setCompanyName] = useState("")
const [companyPassword, setCompanyPassword] = useState("")




    return (
        <CompanyLoginContainer>
            <Header/>
            <div>

            </div>
            <Footer/>
        </CompanyLoginContainer>
    )
}