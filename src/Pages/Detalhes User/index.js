import { useContext, useState } from "react"
import { Footer } from "../../components/footer"
import { Header } from "../../components/header"
import { DataInput, DetailUserCard, DetailUserContainer, NomeTelefoneCard, SNE } from "./styledDetailsUser"
import { SingleDatepicker } from "chakra-dayzed-datepicker"
import next from "../../assets/next-3.svg"
import retorno from "../../assets/return-2.svg"
import { NextAndBackImg } from "../Signup User/styledSigUpUser"
import { goToDetailsUserSingUp, goToHomePage } from "../../routes"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../contexts/UserContext"

export const DetailUserPage = () => {
    // const [startDate, setStartDate] = useState(new Date());
    // const [genero, setGenero] = useState("")
    // const [name, setName] = useState("")
    // const [phone, setPhone] = useState("")
    // const [nacionalidade, setNacionalidade] = useState("")
    // const [estadoCivil, setEstadoCivil] = useState("")
    const navigate = useNavigate()
    const context = useContext(UserContext)
    const { startDate, setStartDate, genero, setGenero, name, setName, nacionalidade, setNacionalidade, phone, setPhone, estadoCivil, setEstadoCivil } = context

    const optionsGender = [
        { value: "", name: "Não" },
        { value: "Male", name: "Homem" },
        { value: "Female", name: "Mulher" },
        { value: "NDA", name: "Não declarado" }
    ]

    const Nacionalidade = [
        { nome: "" },
        { nome: 'Portuguesa' },
        { nome: 'Filipina' },
        { nome: 'Sul-Africano' },
        { nome: 'Zimbabweano' },
        { nome: 'Namibiana' },
        { nome: 'Boliviano' },
        { nome: 'Brasileiro' },
        { nome: 'Chileno' },
        { nome: 'Colombiano' },
        { nome: 'Costarriquenho' },
        { nome: 'Cubano' },
        { nome: 'Dominicano' },
        { nome: 'Equatoriano' },
        { nome: 'Salvadorenho' },
        { nome: 'Granadino' },
        { nome: 'Guatemalteco' },
        { nome: 'Guianês' },
        { nome: 'Guianense' },
        { nome: 'Haitiano' },
        { nome: 'Hondurenho' },
        { nome: 'Jamaicano' },
        { nome: 'Mexicano' },
        { nome: 'Nicaraguense' },
        { nome: 'Panamenho' },
        { nome: 'Paraguaio' },
        { nome: 'Peruano' },
        { nome: 'Portorriquenho' },
        { nome: 'Dominicana' },
        { nome: 'São-cristovense' },
        { nome: 'São-vicentino' },
        { nome: 'Santa-lucense' },
        { nome: 'Surinamês' },
        { nome: 'Trindadense' },
        { nome: 'Uruguaio' },
        { nome: 'Venezuelano' },
        { nome: 'Alemã' },
        { nome: 'Austríac' },
        { nome: 'Belga' },
        { nome: 'Croata' },
        { nome: 'Dinamarquês' },
        { nome: 'Antiguano' },
        { nome: ' Argentino' },
        { nome: 'Bahamense' },
        { nome: 'barbadense' },
        { nome: 'Belizenho' },
        { nome: 'Eslovaco' },
        { nome: 'Esloveno' },
        { nome: 'Espanhol' },
        { nome: 'Francês' },
        { nome: 'Grego' },
        { nome: 'Húngaro' },
        { nome: 'Irlandês' },
        { nome: 'Italiano' },
        { nome: 'Noruego' },
        { nome: 'Holandês' },
        { nome: 'Polonês' },
        { nome: 'Inglês' },
        { nome: 'Galês' },
        { nome: 'Escocês' },
        { nome: 'Romeno' },
        { nome: 'Russo' },
        { nome: 'Sérvio' },
        { nome: 'Sueco' },
        { nome: 'Suíço' },
        { nome: 'Turco' },
        { nome: 'Ucraniano' },
        { nome: 'Americano' },
        { nome: 'Canadense' },
        { nome: 'Angolano' },
        { nome: 'Moçambicano' },
        { nome: 'Sul-africano' },
        { nome: 'Zimbabuense' },
        { nome: 'Argélia' },
        { nome: 'Comorense' },
        { nome: 'Egípcio' },
        { nome: 'Líbio' },
        { nome: 'Marroquino' },
        { nome: 'Ganés' },
        { nome: 'Queniano' },
        { nome: 'Ruandês' },
        { nome: 'Ugandense' },
        { nome: 'Bechuano' },
        { nome: 'Marfinense' },
        { nome: 'Camaronense' },
        { nome: 'Nigeriano' },
        { nome: 'Somali' },
        { nome: 'Australiano' },
        { nome: 'Neozelandês' },
        { nome: 'Afegão' },
        { nome: 'Saudita' },
        { nome: 'Armeno' },
        { nome: 'Bangladesh' },
        { nome: 'Chinês' },
        { nome: 'Norte-coreano' },
        { nome: 'Sul-coreano' },
        { nome: 'Indiano' },
        { nome: 'Indonésio' },
        { nome: 'Iraquiano' },
        { nome: 'Iraniano' },
        { nome: 'Israelita' },
        { nome: 'Japonês' },
        { nome: 'Malaio' },
        { nome: 'Nepalês' },
        { nome: 'Omanense' },
        { nome: 'Paquistanês' },
        { nome: 'Palestino' },
        { nome: 'Qatarense' },
        { nome: 'Sírio' },
        { nome: 'Cingalês' },
        { nome: 'Tailandês' },
        { nome: 'Timorense' },
        { nome: 'Árabe' },
        { nome: 'Vietnamita' },
        { nome: 'Iemenita' }
    ]

    const EstadoCivil = [
        { name: "" },
        { name: "Solteiro" },
        { name: "Casado, mas procuro emprego somente para mim" },
        { name: "Casado, mas procuro emprego para casal" },
        { name: "Amigado, mas procuro emprego somente para mim " },
        { name: "Amigado, mas procuro emprego para casal" },
        { name: "Divorciado(a)" },
    ]

    const goToNexPage = () => {
        if (name !== "") {
            if (phone !== "") {
                if (genero !== "") {
                    if (nacionalidade !== "") {
                        if (estadoCivil !== "") {
                            goToDetailsUserSingUp(navigate)
                        } else {
                            alert("Selecione um estado civil")
                        }
                    } else {
                        alert("Selecione uma nacionalidade")
                    }
                } else {
                    alert("Selecione um gênero")
                }
            } else {
                alert("Digite um numero de telefone")
            }
        } else {
            alert("Digite o seu nome completo")
        }
    }

    return (
        <DetailUserContainer>
            <Header />
            <DetailUserCard>
                <h2>Cadastro</h2>
                <NomeTelefoneCard>
                    <span>Nome</span>
                    <input value={name} placeholder="Nome Completo" onChange={(e) => setName(e.target.value)} />
                    <span>Telefone</span>
                    <input placeholder="Telefone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </NomeTelefoneCard>

                <DataInput>
                    <div>Data de Nascimento</div>
                    <input type="date" placeholder="DD/MM/AAA" name='start Date' value={startDate} className="data" onChange={(e) => setStartDate(e.target.value)} />
                </DataInput>
                <SNE>
                    <div>
                        <span>Sexo</span>
                        <select
                            label=" "
                            name="Genero"
                            value={genero}
                            onChange={(e) => setGenero(e.target.value)}
                        >
                            {optionsGender.map((a) => (
                                <option value={a.value}>{a.name}</option>
                            ))}

                        </select>
                    </div>
                    <div>
                        <span>Nacionalidade</span>
                        <select
                            className="nacionalidade"
                            label="Brasileira"
                            name="Nacionalidade"
                            value={nacionalidade}
                            onChange={(e) => setNacionalidade(e.target.value)}
                        >

                            {Nacionalidade.map((a) => (
                                <option value={a.nome}>{a.nome}</option>
                            ))}
                        </select>

                    </div>
                    <div>
                        <span>Estado Civil</span>
                        <select
                            placeholder="Solteiro"
                            label="Solteiro"
                            value={estadoCivil}
                            onChange={(e) => setEstadoCivil(e.target.value)}
                        >
                            {EstadoCivil.map((a) => (
                                <option value={a.name}>{a.name}</option>
                            ))}
                        </select>
                    </div>

                </SNE>
                <NextAndBackImg>
                    <img src={retorno} onClick={() => goToHomePage(navigate)} />
                    <img src={next} onClick={() => goToNexPage()} />
                </NextAndBackImg>

            </DetailUserCard>
            <Footer />
        </DetailUserContainer>
    )
}