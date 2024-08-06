import { 
    ButtonContainer, 
    ButtonIcon, 
    Container, 
    ContainerBotton, 
    ContainerTop, 
    DropDown, 
    DropDownItems, 
    HeaderButton, 
    LogoContainer, 
    LogoIcon,
    SearchButton, 
    SearchContainer,
    SearchInput,
    SearchInputContainer } from "./styles";
import HamburguerIcon from "../../assets/menu-hamburger.png";
import Logo from '../../assets/YouTube-Logo.png'
import SearchIcon from '../../assets/search.png'
import MicIcon from '../../assets/microfone-gravador.png'
import VideoIcon from '../../assets/video.png'
import NotificationIcon from '../../assets/sino.png'
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";

const tipos = [
                'Tudo',
                'Música',
                'Ao vivo',
                'Mixes',
                'Samba',
                'Lista de reprodução',
                'Hip hop brasileiro',
                'Tecnologia da informação',
                'Música brasileira',
                'Programação de computadores',
                'Kygo',
                'The Weeknd',
                'Música do Romantismo',
                'Jogos',
                'Vendas',
                'Empreendedorismo',
                'Música clássica',
                'Cálculo',
                'Enviados recentemente',
                'Assistidos',
                'Novidades para você'
            ];

interface Iprops{
    openMenu: boolean,
    setOpenMenu: (openMenu: boolean) => void
    dropDown: boolean,
    setDropDown: (dropDown: boolean) => void
}

function Header({openMenu, dropDown, setOpenMenu, setDropDown}: Iprops) {
    const { login, logOut } = useContext(UserContext);
    const { handleSearch } = useContext(UserContext);
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleSubmitSearch = async () => {
        const searchSuccess = await handleSearch(search);
        if (searchSuccess) {
            navigate('/search');
        } else {
            console.log('Falha no login:');
            alert('Usuário ou senha incorreto');
        }
    };


    return (
        <div>
            <Container>
                <ContainerTop>
                    <LogoContainer>
                        <ButtonContainer onClick={() => setOpenMenu(!openMenu)} margin="0 20px 0 0">
                            <ButtonIcon alt="" src={HamburguerIcon} />
                        </ButtonContainer >
                        <LogoIcon alt="" src={Logo} />
                    </LogoContainer>
                    
                    <div style={{width:'55px', height:'auto'}}></div>

                    <SearchContainer>
                        <SearchInputContainer>
                            <SearchInput 
                                        type="search" 
                                        value={search} 
                                        onChange={(e) => setSearch(e.target.value)}
                                        placeholder="Pesquisar" />
                        </SearchInputContainer>
                        <SearchButton>
                            <ButtonIcon alt="" src={SearchIcon} onClick={handleSubmitSearch}/>
                        </SearchButton>
                        <ButtonContainer margin="2px 0 0 18px" backgroundcolor = 'rgba(207,207,207,0.3)'>
                            <ButtonIcon alt="" src={MicIcon} />
                        </ButtonContainer>
                    </SearchContainer>

                    <div style={{width:'2px', height:'auto'}}></div>
                    <HeaderButton>
                        <ButtonContainer margin="0 0 0 10px">
                            <ButtonIcon alt="" src={VideoIcon} />
                        </ButtonContainer>
                        <ButtonContainer margin="0 0 0 10px">
                            <ButtonIcon alt="" src={NotificationIcon} />
                        </ButtonContainer>
                        
                        {login?
                            <>
                                <ButtonContainer onClick={() => setDropDown(!dropDown)}
                                                margin="0 20px 0 20px" 
                                                backgroundcolor = 'rgba(207,207,207,0.3)'>
                                    G
                                </ButtonContainer>
                            </>
                            :
                            <>
                                <button style={{cursor: 'pointer', marginLeft: '10px'}} onClick={() => navigate('/login')}>Fazer login</button>
                                <button style={{cursor: 'pointer'}} onClick={() => navigate('/cadastro')}>se cadastrar</button>
                            </>
                        }

                    </HeaderButton>
                </ContainerTop>
                        {login?
                            <DropDown dropDown={dropDown}>
                                <DropDownItems>
                                    <span style={{cursor: 'pointer'}} onClick={() => navigate('/cadastrar-video')}>Cadastrar vídeo</span>
                                </DropDownItems>
                                <DropDownItems>
                                    <span style={{cursor: 'pointer'}} onClick={() => logOut()}>Sair</span>
                                </DropDownItems>    
                            </DropDown>
                        :
                            <div></div>
                        }

                <ContainerBotton openMenu={openMenu}>
                    {tipos.map((tipo, tipoIndex) => (
                        <div className="tipo" key={tipoIndex}>
                            {tipo}
                        </div>
                    ))}
                </ContainerBotton>
            </Container>
        </div>
    )
}

export default Header;