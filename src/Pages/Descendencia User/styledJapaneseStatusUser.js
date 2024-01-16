import styled from "styled-components";

export const JapaneseStatusPageStyled = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
width: 100%;
align-items: center;
justify-content: space-between;
`

export const JapaneseStatusCard = styled.div`
height: 603px;
width: 700px;
background-color: white;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-around;
div{
    background-color: white;
}
.titulo{
    font-size: x-large;
    margin-left: 2vw;
}
img{
    background-color: white;
    cursor: pointer;
    width: 8%;
    margin: 0px 10px;
}
.select{
    height: 364px;
}
`
export const SelectJapaneseStatusCard = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-evenly;
height: 29%;
padding-left: 3vw;
select{
    cursor: pointer;
    height: 50px;
}
.filhos{
   min-width: 341px;
}
.japones{
    width: 243px;
}
.comFilhos{
    min-width: 600px;
    flex-direction: row;
    display: flex;
}
`