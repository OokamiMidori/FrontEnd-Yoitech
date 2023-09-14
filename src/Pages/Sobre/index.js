import { Footer } from "../../components/footer"
import { Header } from "../../components/header"
import { AboutContainer, ItensCard, VisaoContainer } from "./styledAboutPage"

export const AboutPage = () => {
    return (
        <AboutContainer>
            <Header />
            <ItensCard>Quem somos</ItensCard>
            <ItensCard>O início</ItensCard>
            <ItensCard>Equipe</ItensCard>
            <ItensCard>Trajetória</ItensCard>
            <VisaoContainer>
                <div className="titulo">Valores (Propósito, Missão, e Visão)</div>
                <div>Comportamento empreendedor; Meta ajustada conforme a necessidade do cliente; Cultivando o bom relacionamento entre empresa e sociedade; Espirito Inovador; Buscando a evolução e transparência nas suas atividades.</div>
            </VisaoContainer>
            <div>Yoitech</div>
            <div>
                <div>Propósito</div>
                <div>Criar um ambiente inovador em que todos possam prosperar em busca do melhor de si e de todos os colaboradores.</div>
            </div>
            <div>
                <div>Missão</div>
                <div>Contribuir com a trasndormação digital ldos nossos clientes e da sociedade para um futuro melhor para todos.</div>
            </div>
            <div>
                <div>Visão</div>
                <div>Se tornar um poderoso provedor de soluções tecnológicas, reduzindo custos e tornando assim mais competitiva.</div>
            </div>
            <Footer />
        </AboutContainer>
    )
}