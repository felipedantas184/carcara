import { BottomCard, BottomText, CardTextWrapper, FlipCard, FlipCardBack, FlipCardFront, FlipCardInner, Heading, CardContainer, CardWrapper, InfoGroupOne, InfoGroupTwo, InfoResponse, InfoTitle, InfoWrapper, LogoWrapper, ProfilePicWrapper, Subtitle, TextWrapper, TopCard, UserName, UserRegistration } from "./CardStyles";
import Image from 'next/image'
import { Button, ButtonWrapper } from "../ButtonElement";
import CardFlip from "../CardFlip";

const Card = ({ member }) => {
	const { userName, slug, userPhoto, userRegistration, userDocument } = member.fields

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
										<Image src={'https:' + userPhoto.fields.file.url} layout="fill" />
									</ProfilePicWrapper>

									<InfoWrapper>
										<InfoGroupOne>
											<UserName>{userName}</UserName>
											<UserRegistration>{userRegistration}</UserRegistration>
										</InfoGroupOne>

										<InfoGroupTwo>
											<InfoGroupOne>
												<InfoTitle>RG</InfoTitle>
												<InfoResponse>{userDocument}</InfoResponse>
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

				<Button orange>Vantagens Carcará</Button>
				
			</CardWrapper>
		</CardContainer>
		);
}
 
export default Card;