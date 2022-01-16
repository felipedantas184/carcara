import styled from "styled-components";

export const Container = styled.section` 
  background: whitesmoke;
	color: #000;
	font-family: 'Rubik';
  margin-top: 0;
`
export const GridWrapper = styled.div`
	max-width: 1100px;
	height: auto;
  min-height: 100vh;
	margin-left: auto;
	margin-right: auto;
  padding: 100px 16px 75px 16px;

	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	gap: 16px;

	@media screen and (max-width: 768px) {
		flex-direction: column;
}
`
export const HalfWrapper = styled.div`
	flex: 1;
	height: auto;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	position: relative;
`
export const SectionHeading = styled.h1`
  font-size: 48px;
  font-weight: 400;
	font-family: 'Campus Personal Use';
  line-height: 1.1;
  color: #000;

	text-align: center;
	text-transform: uppercase;
	margin-bottom: 48px;
`
export const TextWrapper = styled.div`
  width: 100%;

	display: flex;
	flex-direction: column;
	gap: 16px;

	margin-bottom: 16px;
`
export const Topline = styled.h3`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.1;
  font-family: 'Montserrat';
  color: #D47734;
`
export const Heading = styled.h1`
  font-size: 18px;
  font-weight: 600;
	font-family: 'Rubik';
  line-height: 1.1;
  color: #000;

	text-align: center;
`
export const Subtitle = styled.h2`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.3;
  font-family: 'Rubik';
  color: #13131A;

	text-align: center;
	white-space: pre-wrap;
`
export const ImageWrapper = styled.div`
  position: absolute;
	top: 0;
	right: 0;
	left: 0;
	margin-left: auto;
	margin-right: auto;
	margin-top: -37.5px;

	width: 75px;
  height: 75px;
	border-radius: 75px;
	border: 2px solid #F6F6F6;
	overflow: hidden;
`;
export const CardsWrapper = styled.div`
	width: 100%;
	height: auto;

	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	gap: 16px;

	@media screen and (max-width: 768px) {
		flex-direction: column;
		align-items: center;
	}
`
export const DiscountCard = styled.div`
	width: 320px;
	height: auto;
	padding: 45px 16px 8px 16px;
	border-radius: 16px;
	background-color: #E6E6E6;
	border: 2px solid #F6F6F6;

	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	margin-bottom: 48px;
	box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

	@media screen and (max-width: 480px) {
		width: 95%;
	}
`
export const ButtonLink = styled.a`
	width: 75%;
	display: flex;
	justify-content: center;
	align-items: center;
	
	padding: 10px 10px;
	background-color: #23232A;
	color: #FFF;

	font-family: 'Rubik';
	font-size: 16px;
	font-weight: 500;

	border-radius: 6px;
	user-select: none;
	-webkit-tap-highlight-color: transparent;
	cursor: pointer;
	transition: all 0.5s ease-in-out;

	text-decoration: none;

	&:hover {
		box-shadow: rgba(21, 21, 21, 0.4) 0px 3px;
	}

	@media screen and (min-width: 768px) {
		max-width: 350px;
		margin-left: auto;
		margin-right: auto;
	}
`