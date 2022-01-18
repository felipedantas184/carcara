import { ButtonLink, CardsWrapper, Container, DiscountCard, GridWrapper, HalfWrapper, Heading, ImageWrapper, SectionHeading, Subtitle, TextWrapper } from "./DiscountsStyles";
import Image from 'next/image'
import { Sales } from "./DiscountsData";
import { Slide } from "react-awesome-reveal";
import { FiExternalLink } from "react-icons/fi"

const Discounts = () => {
	return (
		<Container id="discounts">
			<GridWrapper>
				<SectionHeading>Vantagens</SectionHeading>
				<Slide triggerOnce direction="up" duration={1000} >
				<CardsWrapper>
				{Sales.map((item) => (
					<DiscountCard key={item.instagram} >
						<ImageWrapper>
							<Image src={item.imageUrl} layout="fill" />
						</ImageWrapper>
						<TextWrapper>
							<Heading>{item.name}</Heading>
							<Subtitle>{item.description}</Subtitle>
						</TextWrapper>
						<ButtonLink href={`https://www.instagram.com/${item.instagram.slice(1)}`} target='_blank' >{item.instagram}<FiExternalLink size={16} color="#E6E6E6" style={{position: 'absolute', top: 0, right: '5%', bottom: 0, marginTop: 'auto', marginBottom: 'auto'}} /></ButtonLink>
					</DiscountCard>	
				))}			
				</CardsWrapper>
				</Slide>
			</GridWrapper>
    </Container>
	);
}

export default Discounts;