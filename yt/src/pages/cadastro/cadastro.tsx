import { useContext, useState } from "react";
import { Container, Input, InputContainer, Title } from "./styles";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

function Cadastro() {
    const { handleCadastro } = useContext(UserContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async () => {
        const loginSuccess = await handleCadastro(name, email, password);
        console.log('dados enviados ao userContext');
        if (loginSuccess) {
            navigate('/');
        } else {
            console.log('Falha no login:');
            alert('Usuário ou senha incorreto');
        }
    };

    return (
        <Container>
            <Title>Cadastro</Title>
            <InputContainer>
                <Input 
                    type="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    placeholder="nome"
                />
                <Input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <Input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
            </InputContainer>
            <button onClick={handleSubmit}>Enviar</button>
        </Container>
    );
}

export default Cadastro;
