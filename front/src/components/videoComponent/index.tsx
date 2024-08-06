import { ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./styles";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

const formatTimeAgo = (dateString: string): string => {
    const date = new Date(dateString);
    return formatDistanceToNow(date, { addSuffix: true, locale: ptBR });
};

function VideoComponent ({video}: any) {
    return (
        <Container>
            <ImageBanner src={video.url ? video.url : 'https://i.ytimg.com/vi/gJKPZHB949g/maxresdefault.jpg'} />
            <TitleContainer>
                <ChannelImage>
                    GH
                </ChannelImage>
                <TextContainer>
                    <Title>{video.title}</Title>
                    <TextCard>{video.channel}</TextCard>
                    <TextCard>{video.views} de visualizações - { formatTimeAgo(video.time)}</TextCard>
                </TextContainer>
            </TitleContainer>
        </Container>
    )
}

export default VideoComponent;