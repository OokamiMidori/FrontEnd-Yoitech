import { BrowserRouter, Routes, Route } from "react-router-dom";
import {UserLogin} from "../Pages/Login User/index"
import {CompanyLogin} from "../Pages/Login Empresa/index"
import {AboutPage} from "../Pages/Sobre/index"
import {ContatoPage} from "../Pages/Contato/index"
import { SingUpUser } from "../Pages/Signup User";
import { DetailUserPage } from "../Pages/Detalhes User";

export const Router = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<UserLogin/>}/>
                <Route path="/company" element={ <CompanyLogin/> }/>
                <Route path="/singup-user" element={<SingUpUser/>}/>
                <Route path="/sigup-user-details" element={<DetailUserPage/>}/>
                {/* <Route path="/rating-company" element={}/> */}
                {/* <Route path="/rating-yoitech" element={}/> */}
                {/* <Route path="/buscar-vagas" element={}/> */}
                {/* <Route path="/cadidatos" element={}/> */}
                <Route path="/contact" element={<ContatoPage/>}/>
                {/* <Route path="/new-job" element={}/> */}
                {/* <Route path="/curriculo-candidato" element={}/> */}
                {/* <Route path="/details-job-opportunity" element={}/> */}
                {/* <Route path="/details-user" element={}/> */}
                {/* <Route path="/details-company" element={}/> */}
                {/* <Route path="/job-history-user" element={}/> */}
                {/* <Route path="/adress-user" element={}/> */}
                {/* <Route path="/adress-company" element={}/> */}
                {/* <Route path="/company-history" element={}/> */}
                {/* <Route path="/license-user" element={}/> */}
                {/* <Route path="/work-status-user" element={}/> */}
                {/* <Route path="/measurement-user" element={}/> */}
                {/* <Route path="/message-user" element={}/> */}
                {/* <Route path="/message-company" element={}/> */}
                {/* <Route path="/change-user" element={}/> */}
                {/* <Route path="/japanese-level-user" element={}/> */}
                {/* <Route path="/raking-company" element={}/> */}
                <Route path="/about" element={<AboutPage/>}/>
                {/* <Route path="/about-2" element={}/> */}
                {/* <Route path="/img-user" element={}/> */}
                {/* <Route path="/img-company" element={}/> */}
                {/* <Route path="/vacancies-applied" element={}/> */}
                {/* <Route path="/job-opportunity-company" element={}/> */}
                {/* <Route path="/job-opportunity-user" element={}/> */}
                {/* <Route path="/login" element={}/> */}
            </Routes>
        </BrowserRouter>
    )
}