import { useLocation, useNavigate } from 'react-router-dom'
import Emprego from '../../assets/emprego.jp .svg'
import { getColors } from '../../utils/returnheaderscolor'
import { HeadersContainer, ImgContainer } from './styledHeader'
import { goToAboutPage, goToCompanyPage, goToContactPage, goToHomePage } from '../../routes'



export const Header = () => {
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <HeadersContainer color={getColors(location.pathname)} >
            <ImgContainer>
                <img src={Emprego} /> 
            </ImgContainer>
           
            <div>
                <p onClick={()=> goToAboutPage(navigate)} >Sobre</p>
                <p onClick={()=> goToHomePage(navigate)}>Candidato</p>
                <p onClick={()=> goToCompanyPage(navigate)}>Empresas</p>
                <p onClick={()=>goToContactPage(navigate)}>Contato</p>
            </div>
        </HeadersContainer>

    )
}