import { Button } from "../ButtonElement";
import { FormContainer, FormWrapper, Heading, Input, InputWrapper, Label, Subtitle, TextWrapper } from "./FormStyles";
import { AiOutlineArrowRight } from 'react-icons/ai'
import Link from "next/link";
import { useState } from "react";

const Form = () => {
    const [registration, setRegistration] = useState('')

    return ( 
        <FormContainer>
            <FormWrapper>
                <TextWrapper>
					<Heading>Carteira<br />Digital</Heading>
                    <Subtitle>Digite sua matrícula para acessar sua carteira digital.</Subtitle>
				</TextWrapper> 

                <InputWrapper>
                    <Input type='number' placeholder="Digite sua matrícula" value={registration} onChange={(e) => {setRegistration(e.target.value)}} />
                    <Label>MATRÍCULA</Label>
                    <Link href={'/carteira-digital/' + registration } passHref >
                        <a>
                        <AiOutlineArrowRight size={32} color="#C4C4C4" style={{alignSelf: 'center'}} />
                        </a>
                    </Link>
                </InputWrapper>

                <Button orange >Vantagens Carcará</Button>
                

            </FormWrapper>
        </FormContainer>
     );
}
 
export default Form;