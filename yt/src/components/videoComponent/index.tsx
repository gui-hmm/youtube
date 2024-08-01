import { ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./styles";

function VideoComponent ({video}: any) {
    return (
        <Container>
            <ImageBanner src="https://i.ytimg.com/vi/gJKPZHB949g/maxresdefault.jpg" />
            <TitleContainer>
                <ChannelImage>
                    GH
                </ChannelImage>
                <TextContainer>
                    <Title>{video.title}</Title>
                    <TextCard>{video.channel}</TextCard>
                    <TextCard>{video.views} de visualizações - há {video.time}</TextCard>
                </TextContainer>
            </TitleContainer>
        </Container>
    )
}

export default VideoComponent;