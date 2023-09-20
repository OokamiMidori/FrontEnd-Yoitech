import { Footer } from "../../components/footer"
import { Header } from "../../components/header"
import { DetailUserCard, DetailUserContainer } from "./styledDetailsUser"
import { Input } from '@chakra-ui/react'

export const DetailUserPage = () => {


    return (
        <DetailUserContainer>
            <Header />
            <DetailUserCard>
                <span>Nome</span>
                <input />
                <span>Telefone</span>
                <input />
                <div>
                    <div>Data de Nascimento</div>
                    <Input
                        placeholder="Select Date and Time"
                        size="md"
                        type="datetime-local"
                    />
                </div>
                <div>
                    <div>
                        <span>Sexo</span>
                        <select >

                        </select>
                    </div>
                    <div>
                        <span>Nacionalidade</span>
                        <select >

                        </select>
                    </div>
                    <div>
                        <span>Estado Civil</span>
                        <select >

                        </select>
                    </div>

                </div>
            </DetailUserCard>
            <Footer />
        </DetailUserContainer>
    )
}