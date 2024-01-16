import { useContext, useEffect, useState } from "react"
import { Footer } from "../../components/footer"
import { Header } from "../../components/header"
import { BairroAptoCard, CepCard, ProvinciaCidadeCard, UserAdressPageCard, UserAdressStyledPage } from "./styledUserAdress"
import next from "../../assets/next-3.svg"
import { NextAndBackImg } from "../Signup User/styledSigUpUser"
import { goToConfirmedPage, goToUserHabilitacaoPage } from "../../routes"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../contexts/UserContext"
import axios from "axios"

export const UserAdressPage = () => {
    // const [cep, setCep] = useState("")
    // const [estadoProvincia, setEstadoProvincia] = useState("")
    // const [cidade, setCidade] = useState("")
    // const [bairro, setBairro] = useState("")
    // const [apto, setApto] = useState("")
    const navigate = useNavigate()
    const context = useContext(UserContext)
    const { cep, setCep, estadoProvincia, setEstadoProvincia, cidade, setCidade, bairro, setBairro, apto, setApto } = context
    var hepburn = require("hepburn")

    const estadoProvinciaArray = [
        { name: "XXXX-KEN" },
        { name: "Hokkaido" },
        { name: "Aomori" },
        { name: "Iwate" },
        { name: "Miyagi" },
        { name: "Akita" },
        { name: "Yamagata" },
        { name: "Fukushima" },
        { name: "Ibaraki" },
        { name: "Tochigi" },
        { name: "Gunma" },
        { name: "Saitama" },
        { name: "Chiba" },
        { name: "Tóquio" },
        { name: "Kanagawa" },
        { name: "Niigata" },
        { name: "Toyama" },
        { name: "Ishikawa" },
        { name: "Fukui" },
        { name: "Yamanashi" },
        { name: "Nagano" },
        { name: "Shizuoka" },
        { name: "Aichi" },
        { name: "Gifu" },
        { name: "Mie" },
        { name: "Shiga" },
        { name: "Kyoto" },
        { name: "Osaka" },
        { name: "Hyōgo" },
        { name: "Nara" },
        { name: "Wakayama" },
        { name: "Tottori" },
        { name: "Shimane" },
        { name: "Okayama" },
        { name: "Hiroshima" },
        { name: "Yamaguchi" },
        { name: "Tokushima" },
        { name: "Kagawa" },
        { name: "Ehime" },
        { name: "Kōchi" },
        { name: "Fukuoka" },
        { name: "Saga" },
        { name: "Nagasaki" },
        { name: "Kumamoto" },
        { name: "Oita" },
        { name: "Miyazaki" },
        { name: "Kagoshima" },
        { name: "Okinawa" },
        { name: estadoProvincia }

    ]

    const cidadeArray = [
        { name: "XXXX-SHI/FI/KU" },
        { name: cidade },
        { name: "Hokkaido" },
        { name: "Aomori" },
        { name: "Iwate" },
        { name: "Miyagi" },
        { name: "Akita" },
        { name: "Yamagata" },
        { name: "Fukushima" },
        { name: "Ibaraki" },
        { name: "Tochigi" },
        { name: "Gunma" },
        { name: "Saitama" },
        { name: "Chiba" },
        { name: "Tóquio" },
        { name: "Kanagawa" },
        { name: "Niigata" },
        { name: "Toyama" },
        { name: "Ishikawa" },
        { name: "Fukui" },
        { name: "Yamanashi" },
        { name: "Nagano" },
        { name: "Shizuoka" },
        { name: "Aichi" },
        { name: "Gifu" },
        { name: "Mie" },
        { name: "Shiga" },
        { name: "Kyoto" },
        { name: "Osaka" },
        { name: "Hyōgo" },
        { name: "Nara" },
        { name: "Wakayama" },
        { name: "Tottori" },
        { name: "Shimane" },
        { name: "Okayama" },
        { name: "Hiroshima" },
        { name: "Yamaguchi" },
        { name: "Tokushima" },
        { name: "Kagawa" },
        { name: "Ehime" },
        { name: "Kōchi Fukuoka" },
        { name: "Saga" },
        { name: "Nagasaki" },
        { name: "Kumamoto" },
        { name: "Oita" },
        { name: "Miyazaki" },
        { name: "Kagoshima" },
        { name: "Okinawa" },

    ]

    const getCep = async () => {
        if (cep.length === 7) {
            try {
                const response = await axios.get(` https://zipcloud.ibsnet.co.jp/api/search?zipcode=${cep}`)
                var romaji1 = hepburn.fromKana(response.data.results[0].kana1)
                var romaji2 = hepburn.fromKana(response.data.results[0].kana2)
                var romaji3 = hepburn.fromKana(response.data.results[0].kana3)
                setEstadoProvincia(romaji1)
                setCidade(romaji2)
                setBairro(romaji3)

            } catch (error) {
                console.log(error.response)
                alert(error.response)
            }

        } else {
            // alert("Código postal inválido")
        }

    }

    useEffect(() => {
        getCep()
    }, [cep])

    return (
        <UserAdressStyledPage>
            <Header />
            <UserAdressPageCard>
                <h2>Cadastro</h2>
                <CepCard>
                    <div>〒 (CEP no Japão)</div>
                    <input value={cep} onChange={(e) => { setCep(e.target.value) }} placeholder="XXX-XXX" />
                </CepCard>
                <ProvinciaCidadeCard>
                    <div>
                        <div>Estado/Província</div>
                        <select value={estadoProvincia} onChange={(e) => setEstadoProvincia(e.target.value)}>
                            {estadoProvinciaArray.map((o) => {
                                return <option value={o.name} >{o.name}</option>
                            })}
                        </select>
                    </div>
                    <div>
                        <div>
                            Cidade
                        </div>
                        <select value={cidade} onChange={(e) => setCidade(e.target.value)} >
                            {cidadeArray.map((a) => {
                                return <option value={a.name}>{a.name}</option>
                            })}
                        </select>
                    </div>


                </ProvinciaCidadeCard>
                <BairroAptoCard>
                    <div className="BairroApto">
                        <div>Bairro</div>
                        <input value={bairro} onChange={(e) => setBairro(e.target.value)} placeholder="Bairro Kita 3-13-23" />
                    </div>
                    <div className="BairroApto">
                        <div>Nome do apartamento e numero</div>
                        <input value={apto} onChange={(e) => setApto(e.target.value)} placeholder="Apartamento A-101" />
                    </div>
                </BairroAptoCard>


                <NextAndBackImg>

                    <img src={next} onClick={() => goToUserHabilitacaoPage(navigate)} />
                </NextAndBackImg>

            </UserAdressPageCard>
            <Footer />
        </UserAdressStyledPage>
    )
}