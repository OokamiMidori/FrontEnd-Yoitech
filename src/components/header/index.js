import { useLocation, useNavigate } from 'react-router-dom'
import Emprego from '../../Img/Emprego.jp.svg'
import { getColors } from '../../utils/returnheaderscolor'
import { HeadersContainer } from './styledHeader'
import { goToAboutPage, goToCompanyPage, goToContactPage, goToHomePage } from '../../routes'



export const Header = () => {
    const navigate = useNavigate()
    const location = useLocation()
    return (
        <HeadersContainer color={getColors(location.pathname)} >
            <img src={Emprego} />
            <div>
                <p onClick={()=> goToAboutPage(navigate)} >Sobre</p>
                <p onClick={()=> goToHomePage(navigate)}>Candidato</p>
                <p onClick={()=> goToCompanyPage(navigate)}>Empresas</p>
                <p onClick={()=>goToContactPage(navigate)}>Contato</p>
            </div>
        </HeadersContainer>

    )
}