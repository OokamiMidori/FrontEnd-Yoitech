import styled from "styled-components";

export const AboutContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
height: 100vh;
width: 100%;
position: relative;
  min-height: 100vh;
  .containerAbout{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-bottom: 15rem;
    padding-top: 2.5rem;
  }
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
align-items: center;
flex-direction: column;
width: 50vw;
border: 2px solid #707070;
border-radius: 83px;
padding: 5px 10px;
background-color: white;
font-family: Arial, Helvetica, sans-serif;
text-align: center;
margin-top: 1.5rem;

div{
    color: #484b4d;
    background-color: white;   
    padding : 5px 15px  ;
    border-radius: 83px;
    width: 90%;
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
margin-top: 50px;
img{
    height: 100%;
    border-radius: 80px;
}
`
export const MissaoPropositoVisaoContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: center;
justify-content: space-around;
height: 50%;
padding-bottom: 2.5rem;
.vmp{
    background-color: white;
    border: 4px #707070 solid;
    border-radius: 66px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 20vw;
    
    div{
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60%;
        text-align: center;
        color: #484b4d;
        border-radius: 66px;
    }

    .titulo{
        font-size: x-large;
        color: #484B4D;
        text-align: center;
        width: 50%;
    }
}
`

export const LeftCardAbout = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
height: 80%;
img{
    height: 10vh;
    width: 5vw;
    transform: rotate(-140deg);
    border-radius: 66px;
}
div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
}
`

export const MidCardAbout = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 80%;
img{
    height: 30vh;
    width: 5vw;
    transform: rotate(180deg);
}
`

export const RightCardAbout = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
height: 80%;
img{
    height: 10vh;
    width: 5vw;
   transform: rotate(140deg);
   border-radius: 66px;
}
`
export const LogoCardAbout = styled.div`
display: flex;
flex-direction: column;
align-items: center;

height: 60%;
.seta{
    height: 10vh;
    width: 5vw;
    transform: rotate(180deg);
    margin-bottom: 1.5rem;
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
width: 30vw;
/* height: 20vh; */
margin: 20px;
div{
    background-color: white;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    padding: 0px 30px;
    color: #484b4d;
}
h2{
    background-color: white;
    color: #484B4D;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    padding: 0px 30px;
    font-size: x-large;
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