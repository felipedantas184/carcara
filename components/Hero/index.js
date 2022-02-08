import { DoubleDown, Heading, HeroContainer, HeroWrapper, LogoWrapper, Subtitle, TextWrapper } from "./HeroStyles";
import Image from 'next/image';
import Link from "next/link";
import { Button, ButtonWrapper } from "../ButtonElement";
import { Link as LinkS } from "react-scroll";

const Hero = () => {
	return (
		<HeroContainer>
			<HeroWrapper>
				<LogoWrapper>	
					<Image src="/LogoCarcara.png" alt="Carcará" placeholder="blur" blurDataURL='/LogoCarcara.png' layout="fill" />
				</LogoWrapper>

				<TextWrapper>
					<Heading>A.A.A. <br />CARCARÁ</Heading>
					<Subtitle>Associação Atlética Acadêmica<br />da Medicina UFPI</Subtitle>

					<ButtonWrapper>
						<Link href={'/carteira-digital'} passHref >
							<Button white>Carteira Digital</Button>
						</Link>
						<Button orange>
						<LinkS to='discounts'
						smooth={true} duration={500} spy={true} exact='true' offset={0}>
							Conhecer Vantagens
						</LinkS>
						</Button>
					</ButtonWrapper>
				</TextWrapper>
			</HeroWrapper>
		</HeroContainer>
	);
}

export default Hero;