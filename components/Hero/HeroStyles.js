import styled from "styled-components"; 
import { BsChevronDoubleDown } from 'react-icons/bs'

export const HeroContainer = styled.section` 
  background-image: linear-gradient(to bottom, rgba(21, 30, 63, 0.9), rgba(21, 30, 63, 1)), 
  url("/Cabulosa.png");
  background-position: center;
  background-size: cover;

  background-color: #151E3F;
	color: #F0EDEE;
	font-family: 'Campus Personal Use';

  margin-top: -60px;
`
export const HeroWrapper = styled.div`
	max-width: 1100px;
	height: auto;
  min-height: 95vh;
	margin-left: auto;
	margin-right: auto;
  padding: 100px 16px 75px 16px;

	display: flex;
  flex-direction: row-reverse;
	justify-content: space-around;
	align-items: center;

  @media screen and (max-width: 768px) {
		flex-direction: column;
    min-height: 85vh;

    justify-content: flex-start;
    gap: 16px;
  }
`

export const LogoWrapper = styled.div`
  position: relative;

  width: 300px;
  height: 300px;

  border-radius: 300px;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: rgba(255, 178, 71, 0.4) 5px 2.5px, rgba(255, 178, 71, 0.3) 10px 5px, rgba(255, 178, 71, 0.2) 15px 7.5px, rgba(255, 178, 71, 0.1) 20px 10px;

  @media screen and (max-width: 768px) {
    width: 120px;
    height: 120px;
    border-radius: 120px;

  	margin-bottom: 16px;

    box-shadow: rgba(255, 178, 71, 0.4) 2.5px 1.25px, rgba(255, 178, 71, 0.3) 5px 2.5px;
  }

  @media screen and (max-width: 400px) {
    width: 100px;
    height: 100px;
    border-radius: 100px;
  }
`
export const TextWrapper = styled.div`
  width: 100%;
  padding-top: 0;
  max-width: 500px;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 80px;
  font-weight: 400;
  line-height: 1.25;
  text-transform: uppercase;
  color: #D47734;
  text-align: center;
  text-shadow: 5px 5px #000;

  @media screen and (max-width: 768px) {
    font-size: 65px;
    margin-bottom: 12px;
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
export const DoubleDown = styled(BsChevronDoubleDown)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
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