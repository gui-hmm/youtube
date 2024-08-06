import styled  from "styled-components";

export const Container = styled.div<{ openMenu: boolean }>`
    width: 100%;
    max-width: 1600px;
    display: grid;
    grid-template-columns: ${({ openMenu }) => openMenu ? 'repeat(3, 1fr)' : 'repeat(4, 1fr)'};
    column-gap: 20px;
    row-gap: 50px;
    position: relative;
    top: 60px;
    right: 20px;
    z-index: 1;    
    padding-bottom: 20px;
`;