import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    cursor: pointer;
`;

export const ImageBanner = styled.img`
    width: 100%;
    height: 210px;
    border-radius: 12px;
`;

export const TitleContainer = styled.div`
    width: 100%;
    display: flex;
`;

export const ChannelImage = styled.div`
    background-color: brown;
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 10px;
    margin-top: 7px;
`;

export const TextContainer = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 5px;
`;

export const Title = styled.span`
    font-weight: 600;
    color: #0f0f0f;
`;

export const TextCard = styled.span`
    font-size: 14px;
    color: #8c8c8c;
`;