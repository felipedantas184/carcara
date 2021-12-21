import styled from "styled-components"; 

export const CardContainer = styled.section` 
  background-image: linear-gradient(to bottom, rgba(21, 30, 63, 0.9), rgba(21, 30, 63, 1)), 
  url("/Cabulosa.png");
  background-position: center;
  background-size: cover;
  background-color: #151E3F;
	color: #F0EDEE;
	font-family: 'Campus Personal Use';
  margin-top: -60px;
`
export const CardWrapper = styled.div`
	max-width: 1100px;
	height: auto;
  min-height: 90vh;
	margin-left: auto;
	margin-right: auto;
  padding: 100px 24px 75px 24px;

	display: flex;
  flex-direction: column;
	justify-content: space-between;
	align-items: center;

  @media screen and (max-width: 768px) {
    padding: 75px 24px 50px 24px;
  }
`

export const TextWrapper = styled.div`
  width: 100%;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`
export const Heading = styled.h1`
  font-size: 60px;
  font-weight: 400;
  line-height: 1.25;
  text-transform: uppercase;
  color: #FFF;
  text-align: center;
  text-shadow: 5px 5px #000;

  @media screen and (max-width: 768px) {
    font-size: 48px;
  }

  @media screen and (max-width: 340px) {
    font-size: 40px;
  }
`
export const Subtitle  = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.3;
  font-family: 'Rubik';
  color: #F6F6F6;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`
export const BtnWrap = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 16px;


  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 12px;
  }
`;
export const ImgWrap = styled.div`
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    max-width: 80%;
    height: 80%;
  }
`;
export const ExtLink = styled.a`
  text-decoration: none;

  &:not(:last-child) {
    margin-right: 16px;
  }

  @media screen and (max-width: 768px) {
    &:not(:last-child) {
    margin-right: 0px;
  }
  }
`









export const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
	border-radius: 16px;

	box-shadow: rgba(212, 119, 52, 0.7) -5px 5px;

  animation-name: flip;
  animation-delay: 2s;
  animation-duration: 2s;

  @keyframes flip {
    0% {transform: rotateX(0deg);}
    75% {transform: rotateX(180deg);}
    100% {transform: rotateX(360deg);}
  }
` 

export const FlipCard = styled.div`
  background-color: transparent;
  width: 40vw;
  max-width: 400px;
  height: 22vw;
  max-height: 220px;
  perspective: 1000px;
  margin-top: -50px;
  margin-bottom: 50px;
  transition: all 1s ;

  &:hover{
    transform: scale(1.05);
  }

  @media screen and (max-width: 768px) {
    margin-top: -20px;
    margin-bottom: 0;

    width: 90vw;
    height: 48vw;
  }
  
`

export const FlipCardFront = styled.div`
  background-image: linear-gradient(to bottom, rgba(13, 18, 38, 0.95), rgba(13, 18, 38, 1)), 
  url("/LogoCarcara.png");
  background-position: top;
  background-size: cover;
  background-color: #151E3F;    
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

	border-radius: 25px;

	display: flex;
  flex-direction: row;
	justify-content: flex-start;
	align-items: center;
  padding: 15px 15px 5px 15px;

  border: 1px solid #C4C4C4;
  border-radius: 16px;
  gap: 24px;


`

export const CardTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  position: relative;

  width: 100%;
  height: 100%;
`

export const TopCard = styled.div`
  width: 100%;
  flex: 4;
  
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;

  @media screen and (max-width: 340px) {
    gap: 12px;
  }
`

export const BottomCard = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`

export const ProfilePicWrapper = styled.div`
  width: 70px;
  height: 70px;
  position: relative;
  border-radius: 70px;
  overflow: hidden;
  align-self: flex-start;
  border: 1.5px #C1C1C1 solid;

  @media screen and (max-width: 340px) {
    width: 50px;
    height: 50px;
  }
`

export const LogoWrapper = styled.div`
	display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;

  position: absolute;
  top: 0;
  right: 0;

  @media screen and (max-width: 340px) {
    width: 30px;
    height: 30px;
  }
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 60%;
  
  margin-top: 8px;
  gap: 24px;

  @media screen and (max-width: 340px) {
    gap: 8px;
    margin-top: 0;
  }

  @media screen and (max-width: 768px) and (min-width: 340px) {
    gap: 14px;
    margin-top: 0;
  }
`

export const InfoGroupOne = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
`

export const UserName = styled.p`
  font-family: 'Rubik';
  line-height: 1.3;
  color: #FFF;
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 4px;
  text-align: left;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  @media screen and (max-width: 340px) {
    font-size: 16px;
  }
`

export const UserRegistration = styled.p`
  font-family: 'Rubik';
  color: #FFF;
  font-size: 16px;
  text-align: left;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }

  @media screen and (max-width: 340px) {
    font-size: 12px;
  }
`


export const InfoGroupTwo = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  flex: 1;
`

export const InfoTitle = styled.p`
  font-family: 'Rubik';
  color: #FFF;
  font-size: 16px;
  font-weight: 500;
  text-align: left;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }

  @media screen and (max-width: 340px) {
    font-size: 14px;
  }
`

export const InfoResponse = styled.p`
  font-family: 'Rubik';
  color: #FFF;
  font-size: 16px;
  text-align: left;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }

  @media screen and (max-width: 340px) {
    font-size: 12px;
  }
`

export const FlipCardBack = styled.div`
  background-image: linear-gradient(to bottom, rgba(21, 30, 63, 0.5), rgba(0, 0 , 0, 0.95)), 
  url("/LogoCarcara.png");
  background-position: top;
  background-size: cover;
  background-color: #151E3F;
  color: white;

	width: 100%;
  height: 100%;
	transform: rotateX(180deg);

	border-radius: 25px;

	display: flex;
	justify-content: center;
	align-items: center;
`

export const BottomText = styled.p`
  font-family: 'Rubik';
  color: #D1D1D1;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
  margin-top: 8px;

  @media screen and (max-width: 340px) {
    font-size: 10px;
  }
`

