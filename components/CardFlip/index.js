import Image from 'next/image'
import { BottomCard, BottomText, CardContainer, CardTextWrapper, CardWrapper, FlipCard, FlipCardBack, FlipCardFront, FlipCardInner, InfoGroupOne, InfoGroupTwo, InfoResponse, InfoTitle, InfoWrapper, LogoWrapper, ProfilePicWrapper, TopCard, UserName, UserRegistration } from "./CardFlipStyles";



const CardFlip = ({ member }) => {

	const { userName, slug, userPhoto, userRegistration, userDocument } = member.fields

  return (
		<FlipCard>
			<FlipCardInner>
				<FlipCardFront>
					<CardTextWrapper>
						<TopCard>
							<ProfilePicWrapper>
								<Image src="/FelipeMeuProf.jpg" layout="fill" />
							</ProfilePicWrapper>

							<InfoWrapper>
								<InfoGroupOne>
									<UserName>{userName}</UserName>
									<UserRegistration>20199006960</UserRegistration>
								</InfoGroupOne>

								<InfoGroupTwo>
									<InfoGroupOne>
										<InfoTitle>RG</InfoTitle>
										<InfoResponse>3.392.368</InfoResponse>
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
  );
}
 
export default CardFlip;