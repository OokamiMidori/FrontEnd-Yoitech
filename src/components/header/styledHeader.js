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
div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
   margin-right: 150px;
    width: 270px;
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
img{
   
    border-radius: 80px;
    background-color: #A9AEB3 ;
    text-align: center;
    border: 5px white solid;
    margin-left: 150px;
   
}
`