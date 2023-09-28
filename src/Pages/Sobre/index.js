import { Footer } from "../../components/footer"
import { Header } from "../../components/header"
import { AboutContainer, ContentMISTContainer, ItensCard, LeftCardAbout, LogoCardAbout, MidCardAbout, MissaoPropositoVisaoContainer, RightCardAbout, SuperDivAcordeonContainer, VisaoContainer, YoitechContainer } from "./styledAboutPage"
import Yoitech from "../../assets/Yoitech .svg"
import SetaParaBaixo from "../../assets/arrow-up-1-2.svg"
import SetaDiagonalEsquerda from "../../assets/arrow-up-1-2.svg"
import SetaDiagonalDireita from "../../assets/arrow-up-1-2.svg"
import EmpregoJP from "../../assets/emprego.jp .svg"
import { useState } from "react"
import Voltar from "../../assets/return-2.svg"

export const AboutPage = () => {
    const [quemSomosOpen, setQuemSomosOpen] = useState(false)
    const [oInicio, setOInicio] = useState(false)
    const [equipe, setEquipe] = useState(false)
    const [trajetoria, setTrajetoria] = useState(false)

    const quemSomosContent = "A YOITECH nasceu no Japão/Brasil com o propósito de ser uma empresa de tecnologia da informação especialista em soluções criativas para diferentes negócios."
    return (
        <AboutContainer>
            <Header />
            <div className="containerAbout">
                 <SuperDivAcordeonContainer>
                <div onClick={() => setQuemSomosOpen(!quemSomosOpen)}>

                    {quemSomosOpen ? <ContentMISTContainer>
                        <h2>
                            Quem Somos
                        </h2>
                        <div>"A YOITECH nasceu no Japão/Brasil com o propósito de ser uma empresa de tecnologia da informação especialista em soluções criativas para diferentes negócios.</div>
                        <div className="image">
                            <img src={Voltar} />
                        </div>

                    </ContentMISTContainer> : <ItensCard>Quem somos</ItensCard>}
                </div>
                <div onClick={() => setOInicio(!oInicio)}>
                    {oInicio ? <ContentMISTContainer>
                        <h2>
                            O início
                        </h2>
                        <div>
                            Começamos nossa caminhada da inovação em 2023 desenvolvendo softwares diversos e auxiliamos as empresas na transformação digital, criando novas experiências, produtos inovadores e auxiliando as empresas a crescerem de forma rápida e eficiente. Trazemos soluções digitais, focados em trazer o cliente para o centro da estratégia afim de gerar valor aos negócios e fortalecer a parceria estratégica com nossos clientes.
                        </div>
                        <div className="image">
                            <img src={Voltar} />
                        </div>

                    </ContentMISTContainer> : <ItensCard>O início</ItensCard>}
                </div>
                <div onClick={() => setEquipe(!equipe)}>
                    {equipe ? <ContentMISTContainer>
                        <h2>
                            Equipe
                        </h2>
                        <div>
                            A nossa equipe de especialistas em inovações, tem capacidade para criação de soluções e serviços de ciência de dados, inteligência artificial, automação e robotização. Oferecemos também serviços de TI como fabricação de softwares, consultoria, desenvolvimento de sites, web design, suporte técnico de plataformas, hospedagem em nuvem, licenciamento de softwares.
                        </div>
                        <div className="image">
                            <img src={Voltar} />
                        </div>

                    </ContentMISTContainer> : <ItensCard>Equipe</ItensCard>}
                </div>
                <div onClick={() => setTrajetoria(!trajetoria)}>
                    {trajetoria ? <ContentMISTContainer>
                        <h2>
                            Trajetória
                        </h2>
                        <div>
                            A nossa trajetória começou se baseado em entender os objetivos dos nossos clientes para oferecer respostas práticas para qualquer problema ou necessidade. Estamos focados em prestar serviços de excelência, além de desenvolver nossos próprios produtos. A inovação é a estratégia-chave da nossa empresa para oferecer, cada vez mais, soluções em tecnologia e colaborar para o crescimento sustentável de nossos clientes.
                        </div>
                        <div className="image">
                            <img src={Voltar} />
                        </div>

                    </ContentMISTContainer> : <ItensCard>Trajetória</ItensCard>}
                </div>

            </SuperDivAcordeonContainer>



            <VisaoContainer>
                <div className="titulo">Nossos Valores</div>
                <div>Comportamento Empreendedor com meta ajustada sempre conforme a necessidade do nosso cliente, cultivando o bom relacionamento entre a empresa e a sociedade; Espirito Inovador, com foco na evolução e transparência das nossas atividades.</div>
            </VisaoContainer>
            <YoitechContainer>
                <img src={Yoitech} />
            </YoitechContainer>
            <MissaoPropositoVisaoContainer>
                <LeftCardAbout>
                    <img src={SetaDiagonalEsquerda} />
                    <div className="vmp">
                        <div className="titulo">Visão</div>
                        <div className="content">Se tornar um poderoso provedor de soluções tecnológicas, reduzindo custos e tornando assim mais competitiva.</div>
                    </div>
                </LeftCardAbout>
                <MidCardAbout>
                    <img src={SetaParaBaixo} />
                    <div className="vmp">
                        <div className="titulo">Missão</div>
                        <div className="content">Contribuir com a trasndormação digital ldos nossos clientes e da sociedade para um futuro melhor para todos.</div>
                    </div>
                </MidCardAbout>
                <RightCardAbout>
                    <img src={SetaDiagonalDireita} />
                    <div className="vmp">
                        <div className="titulo">Propósito</div>
                        <div className="content">Criar um ambiente inovador em que todos possam prosperar em busca do melhor de si e de todos os colaboradores.</div>
                    </div>
                </RightCardAbout>
                <LogoCardAbout>
                    <img className="seta" src={SetaParaBaixo} />
                    <img className="logo" src={EmpregoJP} />
                </LogoCardAbout>

            </MissaoPropositoVisaoContainer>

            </div>
           
            <Footer />
        </AboutContainer>
    )
}