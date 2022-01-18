import { BottomCard, BottomText, CardTextWrapper, FlipCard, FlipCardBack, FlipCardFront, FlipCardInner, Heading, CardContainer, CardWrapper, InfoGroupOne, InfoGroupTwo, InfoResponse, InfoTitle, InfoWrapper, LogoWrapper, ProfilePicWrapper, Subtitle, TextWrapper, TopCard, UserName, UserRegistration } from "./CardStyles";
import Image from 'next/image'
import { Button, ButtonWrapper } from "../ButtonElement";
import CardFlip from "../CardFlip";
import { Link as LinkS } from "react-scroll";

const Card = ({ member }) => {
	{/**
		Part of CONTENTFUL 
	const { userName, slug, userPhoto, userRegistration, userDocument } = member.fields
		Part of CONTENTFUL 
	*/}

	return ( 
		<CardContainer>
			<CardWrapper>
				<TextWrapper>
					<Heading>Carteira<br />Digital</Heading>
				</TextWrapper>

				<FlipCard>
					<FlipCardInner>
						<FlipCardFront>
							<CardTextWrapper>
								<TopCard>
									<ProfilePicWrapper>
										<Image src={member.imageUrl} layout="fill" />
									</ProfilePicWrapper>

									<InfoWrapper>
										<InfoGroupOne>
											<UserName>{member.name}</UserName>
											<UserRegistration>{member.registration}</UserRegistration>
										</InfoGroupOne>

										<InfoGroupTwo>
											<InfoGroupOne>
												<InfoTitle>RG</InfoTitle>
												<InfoResponse>{member.document}</InfoResponse>
											</InfoGroupOne>

											<InfoGroupOne>
												<InfoTitle>Validade</InfoTitle>
												<InfoResponse>Fev/2023</InfoResponse>
											</InfoGroupOne>
										</InfoGroupTwo>
									</InfoWrapper>

									<LogoWrapper>
										<Image src="/LogoCarcara.png" width={50} height={50} />
									</LogoWrapper>
								</TopCard>
								<BottomCard>
									<BottomText>Associação Atlética Acadêmica Carcará</BottomText>
								</BottomCard>
							</CardTextWrapper>
						</FlipCardFront>
						<FlipCardBack>
						</FlipCardBack>
					</FlipCardInner>
				</FlipCard>

				<Button orange>
					<LinkS to='discounts'
					smooth={true} duration={500} spy={true} exact='true' offset={0}>
						Conhecer Vantagens
					</LinkS>
				</Button>
				
			</CardWrapper>
		</CardContainer>
		);
}
 
export default Card;