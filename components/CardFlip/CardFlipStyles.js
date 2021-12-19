import styled from "styled-components";

export const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
	border-radius: 16px;

	box-shadow: rgba(212, 119, 52, 0.7) -5px 5px;
` 

export const FlipCard = styled.div`
  background-color: transparent;
  width: 30vw;
  height: 15vw;
  perspective: 1000px;
  margin-top: -50px;
  margin-bottom: 50px;

  &:hover ${FlipCardInner} {
    animation-name: flip;
    animation-duration: 5s;
  }

  @keyframes flip {
    0% {transform: rotateX(0deg);}
    25% {transform: rotateX(180deg);}
    50% {transform: rotateX(180deg);}
    100% {transform: rotateX(0deg);}
  }

  @media screen and (max-width: 768px) {
    margin-top: -20px;
    margin-bottom: 0;

    width: 90vw;
    height: 48vw;
  }
`

export const FlipCardFront = styled.div`
  background-image: linear-gradient(to bottom, rgba(0, 0 , 0, 0.9), rgba(0, 0 , 0, 0.95)), 
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
  gap: 24px;

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

  @media screen and (max-width: 340px) {
    width: 50px;
    height: 50px;
  }
`

export const LogoWrapper = styled.div`
	display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;

  position: absolute;
  top: 0;
  right: 0;

  @media screen and (max-width: 340px) {
    width: 40px;
    height: 40px;
  }
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 180px;
  
  margin-top: 8px;
  gap: 24px;

  @media screen and (max-width: 340px) {
    gap: 12px;
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
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 4px;
  text-align: left;

  @media screen and (max-width: 340px) {
    font-size: 16px;
  }
`

export const UserRegistration = styled.p`
  font-family: 'Rubik';
  color: #FFF;
  font-size: 12px;
  text-align: left;
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
  font-size: 14px;
  font-weight: 500;
  text-align: left;
`

export const InfoResponse = styled.p`
  font-family: 'Rubik';
  color: #FFF;
  font-size: 12px;
  text-align: left;
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

  @media screen and (max-width: 340px) {
    font-size: 10px;
  }
`

