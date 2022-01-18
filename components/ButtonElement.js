import Link from "next/link";
import styled from "styled-components";

export const Button = styled.div`
	border-radius: 6px;
	font-family: 'Rubik';
	font-weight: 600;
	background: ${({white, orange, transparent}) => (transparent ? 'transparent' : orange ? '#D2593C' : white ? '#FFF' : '#000' )};
	white-space: nowrap;
	width: 300px;
	padding-top: 14px;
	padding-bottom: 14px;
	color: ${({white, orange, transparent}) => (transparent ? '#000' : orange ? '#FFF' : white ? '#000' : '#000' )};
	box-shadow: rgba(0, 0, 0, 0.5) 0px 13px 27px -5px, rgba(0, 0, 0, 0.9) 0px 8px 16px -8px;	
	font-size: 18px;
	outline: none;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.2s ease-in-out;
	-webkit-tap-highlight-color: transparent;

	&:hover {
	transition: all 0.2s ease-in-out;
	transform: scale(1.05);
	box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
	}
`

export const ButtonInternalLink = styled(Link)`
	border-radius: 6px;
	font-family: 'Rubik';
	font-weight: 600;
	background: ${({white, orange, transparent}) => (transparent ? 'transparent' : orange ? '#D2593C' : white ? '#FFF' : '#000' )};
	white-space: nowrap;
	width: 300px;
	padding-top: 14px;
	padding-bottom: 14px;
	color: ${({white, orange, transparent}) => (transparent ? '#000' : orange ? '#FFF' : white ? '#000' : '#000' )};
	box-shadow: rgba(0, 0, 0, 0.5) 0px 13px 27px -5px, rgba(0, 0, 0, 0.9) 0px 8px 16px -8px;	
	font-size: 18px;
	outline: none;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.2s ease-in-out;
	-webkit-tap-highlight-color: transparent;

	&:hover {
	transition: all 0.2s ease-in-out;
	transform: scale(1.05);
	box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
	}
`

export const ButtonWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 16px;
	margin-top: 48px;
`