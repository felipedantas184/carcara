import { ButtonLink, CardsWrapper, Container, DiscountCard, GridWrapper, HalfWrapper, Heading, ImageWrapper, SectionHeading, Subtitle, TextWrapper } from "./DiscountsStyles";
import Image from 'next/image'
import { Sales } from "./DiscountsData";
import { Slide } from "react-awesome-reveal";

const Discounts = () => {
	return (
		<Container>
			<GridWrapper>
				<SectionHeading>Vantagens</SectionHeading>
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
						<ButtonLink href={item.imageUrl}>{item.instagram}</ButtonLink>
					</DiscountCard>	
				))}			
				</CardsWrapper>
			</GridWrapper>
    </Container>
	);
}

export default Discounts;