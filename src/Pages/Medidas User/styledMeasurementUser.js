import styled from "styled-components";

export const MeasurementUserPageStyled = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
width: 100%;
align-items: center;
justify-content: space-between;
`

export const MeasurementUserPageCard = styled.div`
height: 60vh;
width: 35vw;
background-color: white;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-around;
div{
    background-color: white;
}
img{
    background-color: white;
    cursor: pointer;
    width: 8%;
    margin: 0px 10px;
}
.titulo{
    font-size: x-large;
    margin-left: 2vw;
}
`
export const SelectsCard = styled.div`
display: flex;
flex-direction: column;
align-items: start;
justify-content: space-between;
.subTitulo{
    font-size: large;
    margin-left: 2vw;
}
.container{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    width: 85%;
    margin: 0px 2vw;
    margin-left: 4vw;
   
  
   select{
    width: 40%;
    min-width: 40%;
    max-width: 40%;
   }
   .containerPequeno{
    width: 100%;
    /* div{
        max-width: 50%;
    } */
   }
  
}
`
export const InputMeasurementCard = styled.div`
display: flex;
flex-direction: row;
align-items: start;
justify-content: space-between;
margin: 0px 2vw;
width: 85%;
margin-left: 4vw;
height: 15%;
input{
        width: 40%;
        padding-left: 5px;
    }
`