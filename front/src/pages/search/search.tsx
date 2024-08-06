import { useContext } from "react";
import VideoComponent from "../../components/videoComponent";
import { Container } from "./styles";
import { UserContext } from "../../context/userContext";

interface IProps {
    openMenu: boolean;
}

const Search: React.FC<IProps> = ({ openMenu }) => {
    const { search } = useContext(UserContext);

    return (
        <Container openMenu={openMenu}>
            {search.map((video: any) => (
                <VideoComponent key={video.videos_id} video={video} />
            ))}
        </Container>
    );
};

export default Search;