import styled from 'styled-components'

export const Container404 = styled.div`
  margin-top: -60px;
  width: 100vw;
  height: 100vh;
  padding: 320px 40px 160px 40px;
  box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  background-image: linear-gradient(to bottom, rgba(21, 30, 63, 0.9), rgba(21, 30, 63, 1)), 
  url("/Cabulosa.png");
  font-family: "Rubik";

  h1 {
    font-size: 48px;
    margin-bottom: 32px;
    color: #FFF;
  }
  h2 {
    font-size: 24px;
    margin-bottom: 16px;
    color: #F6F6F6;
  }
  p{
    font-size: 18px;
    color: #E6E6E6;
  }
  .BackLink {
    color: #D4D4D4
  }
`
