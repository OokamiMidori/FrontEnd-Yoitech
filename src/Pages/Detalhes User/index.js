import { useState } from "react"
import { Footer } from "../../components/footer"
import { Header } from "../../components/header"
import { DataInput, DetailUserCard, DetailUserContainer } from "./styledDetailsUser"
import { SingleDatepicker } from "chakra-dayzed-datepicker"

export const DetailUserPage = () => {
    const [startDate, setStartDate] = useState(new Date());
    


return (
    <DetailUserContainer>
        <Header />
        <DetailUserCard>
            <span>Nome</span>
            <input />
            <span>Telefone</span>
            <input />
            <DataInput>
                <div>Data de Nascimento</div>
                <SingleDatepicker name="date-input" date={startDate} onDateChange={setStartDate} />
            </DataInput>
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