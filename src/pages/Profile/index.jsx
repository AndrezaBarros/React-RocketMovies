import { Container, Form, Avatar } from "./style";

import { FiMail, FiLock, FiUser, FiArrowLeft, FiCamera} from "react-icons/fi"

import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function Profile() {
    return(
        <Container>
            <header>
                <ButtonText icon={FiArrowLeft} title="Voltar"/>
            </header>

            <Form>
                <Avatar>
                    <img 
                        src="https://github.com/AndrezaBarros.png" 
                        alt="Foto do usuário" 
                    />

                    <label htmlFor="avatar">
                        <FiCamera/>

                        <input 
                            id="avatar"
                            type="file" 
                        />
                    </label>
                </Avatar>

                <Input
                    icon={FiUser}
                    type="text"
                    placeholder="Usuário"
                />

                <Input
                    icon={FiMail}
                    type="text"
                    placeholder="E-mail"
                />

                <Input
                    icon={FiLock}
                    type="password"
                    placeholder="Senha atual"
                />

                <Input
                    icon={FiLock}
                    type="password"
                    placeholder="Nova senha"
                />

                <Button title="Salvar"/>
            </Form>
        </Container>
    )
}