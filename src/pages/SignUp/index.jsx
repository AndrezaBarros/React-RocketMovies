import { Container, Form, Background } from "./style";
import { FiMail, FiLock, FiUser} from "react-icons/fi"
import { AiOutlineArrowLeft } from "react-icons/ai"

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function SignUp() {  
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo o que assistir.</p>

                <h2>Crie sua conta</h2>

                <Input 
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                />
                <Input 
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />
                <Input 
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title= "Cadastrar"/>

                <ButtonText title="Voltar para o login" icon={AiOutlineArrowLeft}/>
            </Form>

            <Background/>

        </Container>
    )
};
