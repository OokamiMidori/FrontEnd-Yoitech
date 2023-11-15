import styled from "styled-components";

export const DetailUserContainer = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
align-items: center;
justify-content: space-between;


`

export const DetailUserCard = styled.div`
height: 596px;
width: 700px;
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
    padding-left: 88px;
    background-color: white;
    font-size: x-large;
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
padding-left: 88px;
span{
    background-color: white;
}
input{
    background-color: #DDDDDD;
    width: 400px;
    height: 50px;
    padding-left: 5px;
}

`

export const DataInput = styled.div`
background-color: white;
display: flex;
flex-direction: column;
padding-left: 88px;
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
justify-content: space-evenly;
background-color: white;
select{
    width: 100px;
    height: 50px;
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
.nacionalidade{
    width: 200px;
}
`