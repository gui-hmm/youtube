import styled from "styled-components";

export const Container = styled.div<{ openMenu: boolean }>`
    width: ${({ openMenu }) => openMenu ? '240px' : '90px'};
    height: calc(100vh - 55px);
    box-sizing: border-box;
    padding: ${({ openMenu }) => openMenu ? '10px 0px 15px 15px' : '0px 0px 0px 5px'};
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    overflow-x: auto;
    position: fixed;
    top: 55px;
    z-index: 10;

    &:hover{
      scrollbar-color: #878787 #ffffff; 
    }

`;

export const MenuItem = styled.div<{ openMenu: boolean }>`
    width: 100%;
    min-height: ${({ openMenu }) => openMenu ? '40px' : '70px'};
    border-radius: 10px;
    cursor: pointer;
    padding: 2px 0px 2px 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: ${({ openMenu }) => openMenu ? 'row' : 'column'};
    align-items: center;
    justify-content: ${({ openMenu }) => openMenu ? 'flex-start' : 'center'};

    span {
        font-weight: ${({ openMenu }) => openMenu ? '495' : '400'};
        margin-left: ${({ openMenu }) => openMenu ? '20px' : 'none'};
        font-size: ${({ openMenu }) => openMenu ? '14px' : '11px'};
    }

    &:hover {
        background-color: rgb(207,207,207);
    }
`;

export const ButtonIcon = styled.img`
    width: 22px;
`;

export const SectionTitle = styled.div<{ openMenu: boolean }>`
    font-weight: 500;
    padding: 0px 0px 0px 10px;
`;

export const Separator = styled.hr<{ openMenu: boolean }>`
    width: ${({ openMenu }) => openMenu ? '210px' : '0'};
    margin: 20px 0;
    border: none;
    border-top: 1px solid #e0e0e0;
`;

export const Direitos = styled.div`
    font-weight: 500;
    padding-left: 10px;
`;
