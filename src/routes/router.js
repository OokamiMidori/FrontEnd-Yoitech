import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserLogin } from "../Pages/Login User/index"
import { CompanyLogin } from "../Pages/Login Empresa/index"
import { AboutPage } from "../Pages/Sobre/index"
import { ContatoPage } from "../Pages/Contato/index"
import { SingUpUser } from "../Pages/Signup User";
import { DetailUserPage } from "../Pages/Detalhes User";
import { ConfirmationPageUser } from "../Pages/Confirmação de Cadastro";
import { EmailConfirmadoPage } from "../Pages/Email Confirmado";
import { UserAdressPage } from "../Pages/Endereço User";
import { UserHabilitacaoPage } from "../Pages/Habilitação User";
import { UserJapaneseLevelPage } from "../Pages/Nivel de Japones User";
import { JapaneseStatusNivelPage } from "../Pages/Descendencia User";
import { StatusJobUserPage } from "../Pages/Emprego User";
import { ChangeUserPage } from "../Pages/Mudança User";
import { MeasurementsUserPage } from "../Pages/Medidas User";
import { CurriculoUserPage } from "../Pages/Curriculo User";
import { UserUploadImg } from "../Pages/Upload Imagem User";
import { SingUpCompanyPage } from "../Pages/Signup Empresa";
import { SingupCompanyDetails } from "../Pages/Signup Empresa 2";
import { ConfirmacaoDeEmailCompany } from "../Pages/Confirmação de Email Empresa";
import { EmailConfirmedCompanyPage } from "../Pages/Email Confirmado Company";
import { CompanyAdressPage } from "../Pages/Endereço Empresa";
import { ImgCompanyPage } from "../Pages/Upload Imagem Empresa";


export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<UserLogin />} />
                <Route path="/company" element={<CompanyLogin />} />
                <Route path="/singup-user-details" element={<SingUpUser />} />
                <Route path="/singup-user" element={<DetailUserPage />} />
                <Route path="/user-confirmation-email" element={<ConfirmationPageUser />} />
                <Route path="/user-email-confirm" element={<EmailConfirmadoPage />} />
                <Route path="/user-level-linguage" element={<UserJapaneseLevelPage />} />
                <Route path="/user-japanese-status" element={<JapaneseStatusNivelPage />} />
                <Route path="/user-job-details" element={<StatusJobUserPage />} />
                <Route path="/contact" element={<ContatoPage />} />
                <Route path="/user-habilitacao" element={<UserHabilitacaoPage />} />
                <Route path="/user-change" element={<ChangeUserPage />} />
                <Route path="/user-measurement" element={<MeasurementsUserPage />} />
                <Route path="/user-job-history" element={<CurriculoUserPage/>}/>
                <Route path="/user-img-upload" element={<UserUploadImg/>}/>
                <Route path="/company-singup" element={<SingUpCompanyPage/>}/>
                <Route path="/user-adress" element={<UserAdressPage />} />
                <Route path="/company-singup-details" element={<SingupCompanyDetails/>}/>
                <Route path="/company-email-confirmation" element={<ConfirmacaoDeEmailCompany/>}/>
                <Route path="/company-email-confirm" element={<EmailConfirmedCompanyPage/>}/>
                <Route path="/company-adress" element={<CompanyAdressPage/>}/>
                <Route path="/company-img-upload" element={<ImgCompanyPage/>}/>
                {/* <Route path="/message-user" element={}/> */}
                {/* <Route path="/message-company" element={}/> */}
                {/* <Route path="/change-user" element={}/> */}
                {/* <Route path="/japanese-level-user" element={}/> */}
                {/* <Route path="/raking-company" element={}/> */}
                <Route path="/about" element={<AboutPage />} />
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