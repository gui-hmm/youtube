import { useContext, useState } from "react";
import { Container, Input, InputContainer, Title } from "./styles";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

function CadastroVideo() {
    const { handleCadastroVideo } = useContext(UserContext);

    const [title, setTitle] = useState('');
    const [channel, setChannel] = useState('');
    const [description, setDescription] = useState('');
    const [views, setViews] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async () => {
        const loginSuccess = await handleCadastroVideo(title, channel, description, views);
        console.log('dados enviados ao userContext');
        
        
        
        
        if (loginSuccess) {
            navigate('/');
        } else {
            console.log('Falha no cadastro do vídeo:');
            alert('incorreto');
        }
    };

    return (
        <Container>
            <Title>Cadastro</Title>
            <InputContainer>
                <Input 
                    type="title" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="titulo"
                />
                <Input 
                    type="channel" 
                    value={channel} 
                    onChange={(e) => setChannel(e.target.value)}
                    placeholder="canal"
                />
                <Input 
                    type="description" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="descrição do vídeo"
                />
                <Input 
                    type="views" 
                    value={views} 
                    onChange={(e) => setViews(e.target.value)}
                    placeholder="visualizações"
                />
            </InputContainer>
            <button onClick={handleSubmit}>Enviar</button>
        </Container>
    );
}

export default CadastroVideo;