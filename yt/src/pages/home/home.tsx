import VideoComponent from "../../components/videoComponent";
import { Container } from "./styles";

interface IProps {
    openMenu: boolean;
}

const videos = [
    {
        image: '',
        title: 'Marília Mendonça - Leão - Decretos Reais 2',
        channel: 'Marília Mendonça',
        views: '109 mi',
        time: '2 meses'
    },
    {
        image: '',
        title: 'Marília Mendonça - Leão - Decretos Reais',
        channel: 'Marília',
        views: '109 mi',
        time: '2 meses'
    },
    {
        image: '',
        title: 'Marília Mendonça - Leão - Decretos',
        channel: 'Mendonça',
        views: '109 mi',
        time: '2 meses'
    },
    {
        image: '',
        title: 'Marília Mendonça - Leão - Reais 2',
        channel: 'Mendonça Marília',
        views: '109 mi',
        time: '2 meses'
    },
    {
        image: '',
        title: 'Marília Mendonça - Leão - Decretos Reais 2',
        channel: 'Marília Mendonça',
        views: '109 mi',
        time: '2 meses'
    },
    {
        image: '',
        title: 'Marília Mendonça - Leão - Decretos Reais 2',
        channel: 'Marília Mendonça',
        views: '109 mi',
        time: '2 meses'
    },
    {
        image: '',
        title: 'Marília Mendonça - Leão - Decretos Reais 2',
        channel: 'Marília Mendonça',
        views: '109 mi',
        time: '2 meses'
    },
    {
        image: '',
        title: 'Marília Mendonça - Leão - Decretos Reais 2',
        channel: 'Marília Mendonça',
        views: '109 mi',
        time: '2 meses'
    },
    {
        image: '',
        title: 'Marília Mendonça - Leão - Decretos Reais 2',
        channel: 'Marília Mendonça',
        views: '109 mi',
        time: '2 meses'
    },
    {
        image: '',
        title: 'Marília Mendonça - Leão - Decretos Reais 2',
        channel: 'Marília Mendonça',
        views: '109 mi',
        time: '2 meses'
    },
    {
        image: '',
        title: 'Marília Mendonça - Leão - Decretos Reais 2',
        channel: 'Marília Mendonça',
        views: '109 mi',
        time: '2 meses'
    },
    {
        image: '',
        title: 'Marília Mendonça - Leão - Decretos Reais 2',
        channel: 'Marília Mendonça',
        views: '109 mi',
        time: '2 meses'
    },
    {
        image: '',
        title: 'Marília Mendonça - Leão - Decretos Reais 2',
        channel: 'Marília Mendonça',
        views: '109 mi',
        time: '2 meses'
    },
    
]

function Home ({openMenu}: IProps) {
    return (
        <Container openMenu={openMenu}>
            {videos.map((video) => (
                <VideoComponent video={video} />
            ))}
        </Container>
    )
}

export default Home;