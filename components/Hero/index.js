import { Heading, HeroContainer, HeroWrapper, LogoWrapper, Subtitle, TextWrapper } from "./HeroStyles";
import Image from 'next/image';
import Link from "next/link";
import { Button, ButtonWrapper } from "../ButtonElement";

const Hero = () => {
	return ( 
		<HeroContainer>
			<HeroWrapper>
				<TextWrapper>
					<LogoWrapper>
						<Image src="/LogoCarcara.png" width={80} height={80} />
					</LogoWrapper>
					<Heading>A.A.A. <br />CARCARÁ</Heading>
					<Subtitle>Associação Atlética Acadêmica<br />da Medicina UFPI</Subtitle>
				</TextWrapper>

				<ButtonWrapper>
					<Link href={'/carteira-digital'} passHref > 
						<Button white>Carteira Digital</Button>
					</Link>
					<Button orange>Conhecer Mais</Button>
				</ButtonWrapper>
				
			</HeroWrapper>
		</HeroContainer>
		);
}
 
export default Hero;