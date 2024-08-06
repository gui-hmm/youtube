import { useContext, useState } from "react";
import { Container, Input, InputContainer, Title } from "./styles";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

function Login() {
    const { handleLogin } = useContext(UserContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async () => {
        const loginSuccess = await handleLogin(email, password);
        if (loginSuccess) {
            navigate('/');
        } else {
            console.log('Falha no login:');
            alert('Usuário ou senha incorreto');
        }
    };

    return (
        <Container>
            <Title>Login</Title>
            <InputContainer>
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
            <button onClick={handleSubmit}>Login</button>
        </Container>
    );
}

export default Login;
