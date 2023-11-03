import styled from "styled-components";

export const SingUpCompanyPageContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
height: 100vh;
width: 100%;
`

export const SingUpCompanyContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
width: 700px;
height: 596px;
background-color: white;
margin: 10px 0px 15px 0px;
div{
    background-color: white;
}
input{
    background-color: #DDDDDD;
    padding-left: 10px;
}
.telphone{
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    input{
        width: 188px;
        height: 50px;
       
    }
    padding: 0px 120px;
}
.form{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    input{
        width: 400px;
        height: 50px;
    }
}
.titulo{
    margin-top: 30px;
    color: #707070;
    display: flex;
    align-items: flex-start;
    justify-content: start;
    font-size: x-large;
    width: 58%;
}
img{
    background-color: white;
    width: 59px;
    cursor: pointer;
}
.img{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;
   
}
`