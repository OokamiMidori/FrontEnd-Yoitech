import styled from "styled-components";

export const AboutContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
height: 100vh;
width: 100%;
`
export const ItensCard = styled.div`
border-radius: 80px;
border: 1px #707070 solid;
background-color: #FFFFFF;
padding: 3px 0px;
color: #707070;
font-family: Arial, Helvetica, sans-serif;
width: 15vw;
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 1vw;
cursor: pointer;
font-size: large;
`
export const VisaoContainer = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
width: 60vw;
border: 2px solid #707070;
border-radius: 47px;
padding: 40px 10px;
background-color: white;
font-family: Arial, Helvetica, sans-serif;
text-align: left;

div{
    color: #484b4d;
    background-color: white;   
    padding :10px ;
}
.titulo{
    font-size: x-large;
}
`
export const YoitechContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
width: 100%;
height: 150px;
img{
    height: 90%;
    border-radius: 80px;
}
`
export const MissaoPropositoVisaoContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: center;
justify-content: space-around;
.vmp{
    background-color: white;
    border: 4px #707070 solid;
    border-radius: 66px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 25vw;
    
    div{
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60%;
        text-align: center;
        
    }

    .titulo{
        font-size: x-large;
        color: #484B4D;
    }
}
`

export const LeftCardAbout = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
img{
    height: 20vh;
}
`

export const MidCardAbout = styled.div`
display: flex;
flex-direction: column;
align-items: center;
img{
    height: 20vh;
}
`

export const RightCardAbout = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
img{
    height: 20vh;
}
`
export const LogoCardAbout = styled.div`
display: flex;
flex-direction: column;
align-items: center;
.seta{
    height: 20vh;
}
.logo{
    width: 30%;
}
`
export const ContentMISTContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
background-color: white;
border: 1px #707070 solid;
width: 50vw;
height: 40vh;
margin: 20px;
div{
    background-color: white;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    padding: 0px 30px;
}
h2{
    background-color: white;
    color: #484B4D;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    padding: 0px 30px;
}
img{
    background-color: white;
    width: 2vw;
    display: flex;
    align-items: end;
    justify-content: end;
}
.image{
    
    background-color: white;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    width: 100%;
    padding: 0px 30px;
    cursor: pointer;
}
`
export const SuperDivAcordeonContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 100%;
max-height: 1200px;
`