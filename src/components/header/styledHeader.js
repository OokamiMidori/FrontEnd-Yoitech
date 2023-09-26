import styled from 'styled-components'

export const HeadersContainer = styled.div`
display: flex;
flex-direction: row;
width: 100%;
height: 80px;
justify-content: space-between;
align-items: center;
row-gap: 80vw;
background-color: ${(props) => props.color};
padding-bottom: 5px;
margin-bottom: 5px;
div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-right: 8%;
    width: 15%;
    background-color: ${(props) => props.color};
   
    p{
        background-color: ${(props) => props.color};
        color:#EBE9E9;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 15px;
        font-weight: normal;
        text-align: left;
        line-height: 20px;
        cursor: pointer;
        position: relative;
        text-shadow: black 0px 1px 1px  ;
    }
}

`
export const ImgContainer = styled.div`
display: flex;
align-items: flex-end;
justify-content: center;
width: 15vw;
height: 100%;
margin-left: 12%;
border-radius: 80px;
margin-top: 20px;
margin-bottom: 20px;
img{
   
   border-radius: 83px;
   background-color: #A9AEB3 ;
   text-align: center;
   /* border: 1px black solid; */
   /* margin-left: 150px; */
   /* height: 100%; */
   /* margin: 18px 150px; */
   width: 65%;
}
`