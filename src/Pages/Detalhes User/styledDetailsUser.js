import styled from "styled-components";

export const DetailUserContainer = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
align-items: center;
justify-content: space-between;


`

export const DetailUserCard = styled.div`
height: 60vh;
width: 35vw;
background-color: white;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-around;
img{
    height: 5vh;
    width: 15vh;
    cursor: pointer;
    background-color: white;
}
h2{
    padding-left: 20px;
    background-color: white;
    font-size: large;
    color: #707070;
}
`
export const NomeTelefoneCard = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
width: 100%;
height: 33%;
background-color: white;
padding-left: 20px;
span{
    background-color: white;
}
input{
    background-color: #DDDDDD;
    width: 95%;
    height: 28%;
    padding-left: 5px;
}

`

export const DataInput = styled.div`
background-color: white;
display: flex;
flex-direction: column;
padding-left: 20px;
input{
    background-color: #DDDDDD;
    text-align: center;
}
div{
    background-color: white;
}
`
export const SNE = styled.div`
display: flex;
flex-direction: row;
width: 100%;
align-items: center;
justify-content: center;
background-color: white;
select{
    max-width: 90%;
    background-color: #DDDDDD;
    margin: 0px 0px;
    cursor: pointer;
}
div{
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    max-width: 33%;
}
span{
    background-color: white;
    width: 90%;
}
`