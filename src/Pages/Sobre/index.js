import { Footer } from "../../components/footer"
import { Header } from "../../components/header"
import { AboutContainer, ItensCard, LeftCardAbout, LogoCardAbout, MidCardAbout, MissaoPropositoVisaoContainer, RightCardAbout, VisaoContainer, YoitechContainer } from "./styledAboutPage"
import Yoitech from "../../assets/Yoitech .svg"
import SetaParaBaixo from "../../assets/arrow-down-2-7.svg"
import SetaDiagonalEsquerda from "../../assets/arrow-bend-left-down-2-5.svg"
import SetaDiagonalDireita from "../../assets/arrow-bend-right-down-2-8.svg"
import EmpregoJP from "../../assets/emprego.jp .svg"
import { useState } from "react"

export const AboutPage = () => {
const [quemSomosOpen, setQuemSomosOpen] = useState(false)

const quemSomosContent = "A YOITECH nasceu no Japão/Brasil com o propósito de ser uma empresa de tecnologia da informação especialista em soluções criativas para diferentes negócios."
    return (
        <AboutContainer>
            <Header />
            <div onClick={()=> setQuemSomosOpen(!quemSomosOpen)}>
                <ItensCard>Quem somos</ItensCard>
                {quemSomosOpen && <div>{quemSomosContent}</div>}
            </div>
            
            <ItensCard>O início</ItensCard>
            <ItensCard>Equipe</ItensCard>
            <ItensCard>Trajetória</ItensCard>
            <VisaoContainer>
                <div className="titulo">Valores (Propósito, Missão, e Visão)</div>
                <div>Comportamento empreendedor; Meta ajustada conforme a necessidade do cliente; Cultivando o bom relacionamento entre empresa e sociedade; Espirito Inovador; Buscando a evolução e transparência nas suas atividades.</div>
            </VisaoContainer>
            <YoitechContainer>
                <img src={Yoitech} />
            </YoitechContainer>
            <MissaoPropositoVisaoContainer>
                <LeftCardAbout>
                    <img src={SetaDiagonalEsquerda} />
                    <div className="vmp">
                        <div className="titulo">Visão</div>
                        <div>Se tornar um poderoso provedor de soluções tecnológicas, reduzindo custos e tornando assim mais competitiva.</div>
                    </div>
                </LeftCardAbout>
                <MidCardAbout>
                    <img src={SetaParaBaixo} />
                    <div className="vmp">
                        <div className="titulo">Missão</div>
                        <div>Contribuir com a trasndormação digital ldos nossos clientes e da sociedade para um futuro melhor para todos.</div>
                    </div>
                </MidCardAbout>
                <RightCardAbout>
                    <img src={SetaDiagonalDireita} />
                    <div className="vmp">
                        <div className="titulo">Propósito</div>
                        <div>Criar um ambiente inovador em que todos possam prosperar em busca do melhor de si e de todos os colaboradores.</div>
                    </div>
                </RightCardAbout>
                <LogoCardAbout>
                    <img className="seta" src={SetaParaBaixo} />
                    <img className="logo" src={EmpregoJP} />
                </LogoCardAbout>

            </MissaoPropositoVisaoContainer>

            <Footer />
        </AboutContainer>
    )
}