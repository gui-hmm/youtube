import { useContext, useEffect } from "react";
import VideoComponent from "../../components/videoComponent";
import { Container } from "./styles";
import { UserContext } from "../../context/userContext";

interface IProps {
    openMenu: boolean;
}

const Home: React.FC<IProps> = ({ openMenu }) => {
    const { videos, getVideos } = useContext(UserContext);

    useEffect(() => {
        getVideos();
    }, [getVideos]);

    return (
        <Container openMenu={openMenu}>
            {videos.map((video: any) => (
                <VideoComponent key={video.videos_id} video={video} />
            ))}
        </Container>
    );
};

export default Home;