import styled from "styled-components";

export const MeasurementUserPageStyled = styled.div`
display: flex;
flex-direction: column;
height: 1000px;
align-items: center;
justify-content: space-between;
`

export const MeasurementUserPageCard = styled.div`
height: 603px;
width: 700px;
background-color: white;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
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
    margin-left: 116px;
    margin-top: 78px;
}
`
export const SelectsCard = styled.div`
display: flex;
flex-direction: column;
align-items: start;
justify-content: space-between;
.subTitulo{
    font-size: large;
    margin-left: 119px;
}
.container{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    width: 85%;
    margin: 0px 2vw;
    margin-left: 119px;
   
  
   select{
    width: 100px;
    height: 50px;
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
width: 700px;
padding-left: 117px;
/* height: 15%; */
padding-right: 251px;
input{
        width: 100px;
        padding-left: 5px;
        height: 50px;
    }
`