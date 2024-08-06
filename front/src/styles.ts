import styled  from "styled-components";

export const BodyRoutes = styled.div<{ openMenu: boolean }>`
    width: 100%;
    max-width: 1600px;
    padding: ${({ openMenu }) => openMenu ? '0px 0px 0px 280px' : '0px 0px 0px 100px'}; 
    box-Sizing: border-box;
    position: relative;
    top: 70px;
    z-index: 1;
`;