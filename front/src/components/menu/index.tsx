import { 
    ButtonIcon, 
    Container, 
    Direitos, 
    MenuItem, 
    SectionTitle, 
    Separator } from "./styles";
import homeIcon from '../../assets/inicio.png';
import shortsIcon from '../../assets/shorts.png';
import inscricaoIcon from '../../assets/se-inscrever.png';
import seuCanalIcon from '../../assets/seu-canal.png';
import historicoIcon from '../../assets/historico.png';
import playlistIcon from '../../assets/playlist.png';
import seusVideosIcon from '../../assets/video_menu.png';
import assistirMaisTardeIcon from '../../assets/relogio.png';
import gosteiIcon from '../../assets/gostei.png';
import emAltaIcon from '../../assets/topico-em-alta.png';
import shoppingIcon from '../../assets/shopping.png';
import musicaIcon from '../../assets/musica.png';
import filmesIcon from '../../assets/filmes.png';
import aoVivoIcon from '../../assets/ao-vivo.png';
import jogosIcon from '../../assets/jogos.png';
import noticiasIcon from '../../assets/noticias.png';
import esportesIcon from '../../assets/esportes.png';
import cursosIcon from '../../assets/cursos.png';
import podcastsIcon from '../../assets/podcasts.png';
import configIcon from '../../assets/settings.png';
import denunciaIcon from '../../assets/denuncia.png';
import ajudaIcon from '../../assets/ajuda.png';
import feedbackIcon from '../../assets/feedback.png';
import { useNavigate } from "react-router-dom";


const sections = [
    {
        itens: [
            { label: "Inicio", icon: homeIcon, link: '/' },
            { label: "Shorts", icon: shortsIcon, link: '/library' },
            { label: "Inscrições", icon: inscricaoIcon, link: '/history' },
        ]
    },
    {
        title: "Você",
        itens: [
            { label: "Seu canal", icon: seuCanalIcon, link: '/'},
            { label: "Histórico", icon: historicoIcon, link: '/' },
            { label: "Playlist", icon: playlistIcon, link: '/' },
            { label: "Seus vídeos", icon: seusVideosIcon, link: '/' },
            { label: "Assistir mais tarde", icon: assistirMaisTardeIcon, link: '/' },
            { label: "Vídeos com 'gostei'", icon: gosteiIcon, link: '/' },
        ]
    },
    {
        title: "Explorar",
        itens: [
            { label: "Em alta", icon: emAltaIcon, link: '/' },
            { label: "Shopping", icon: shoppingIcon, link: '/' },
            { label: "Música", icon: musicaIcon, link: '/' },
            { label: "filmes", icon: filmesIcon, link: '/' },
            { label: "Ao vivo", icon: aoVivoIcon, link: '/' },
            { label: "Jogos", icon: jogosIcon, link: '/' },
            { label: "Notícias", icon: noticiasIcon, link: '/' },
            { label: "Esportes", icon: esportesIcon, link: '/' },
            { label: "Cursos", icon: cursosIcon, link: '/' },
            { label: "Podcasts", icon: podcastsIcon, link: '/' },
        ]
    },
    {
        itens: [
            { label: "Configurações", icon: configIcon, link: '/' },
            { label: "Histórico de denúncias", icon: denunciaIcon, link: '/' },
            { label: "Ajuda", icon: ajudaIcon, link: '/' },
            { label: "Enviar feedback", icon: feedbackIcon, link: '/' },
        ]
    },
];

interface IProps {
    openMenu: boolean;
}

function Menu({openMenu}: IProps) {
    const sectionsToRender = openMenu ? sections : [sections[0]];
    const navigate = useNavigate();

    return (
        <Container openMenu={openMenu}>
            {sectionsToRender.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                    {section.title && <SectionTitle openMenu={openMenu}>{section.title}</SectionTitle>}
                    
                    {section.itens.map((item, itemIndex) => (
                        <MenuItem key={itemIndex} openMenu={openMenu} onClick={() => item.link && navigate(item.link)}>
                            <ButtonIcon alt={item.label} src={item.icon} />
                            <span>{item.label}</span>
                        </MenuItem>
                    ))}
                    {sectionIndex < sectionsToRender.length && <Separator openMenu={openMenu}/>}
                </div>
            ))}
            {openMenu && <Direitos>Desenvolvido por &copy; Guilherme Henrique</Direitos>}
        </Container>
    );
}

export default Menu;
