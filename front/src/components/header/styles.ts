import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 105px;
    background-color: #fff;
    padding: 0px 5px 0px 16px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0px;
    z-index: 5;

`;

export const ContainerTop = styled.div`
    width: 100%;
    height: 55px;
    background-color: #fff;
    padding: 0px 3px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ContainerBotton = styled.div<{ openMenu: boolean }>`
    background-color: #fff;
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    overflow-x: auto;
    position: fixed;
    top: 65px;
    left: ${({ openMenu }) => openMenu ? '250px' : '90px'};

    .tipo {
        background-color: rgba(207,207,207,0.3);
        width: auto;
        height: 8px;
        display: flex;
        align-items: center;
        padding: 10px 15px;
        border-radius: 5px;
        margin: 0 10px;
        cursor: pointer;
        white-space: nowrap;
        font-size: 15px;
        font-weight: 500;

        &:hover {
            background-color: rgb(207,207,207);
        }
    }

    &:hover {
        scrollbar-color: #878787 #ffffff; 
    }
`;


export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    `;

export const ButtonContainer = styled.div<{ margin?: string , backgroundcolor?: any }>`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: ${({ margin }) => margin? margin : 0};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: ${({ backgroundcolor }) => backgroundcolor? backgroundcolor : '#ffffff' };
    /* rgba(207,207,207,0.3) */

    &:hover{
        background-color: rgb(207,207,207);
    }
`;

export const ButtonIcon = styled.img`
    width: 20px;
`;

export const LogoIcon = styled.img`
    cursor: pointer;
    width: 90px;
    margin-top: 2px;
`;

export const SearchContainer = styled.div`
    display: flex;
`; 

export const SearchInputContainer = styled.div`
    width: 517px;
    height: 35px;
    border: 1px solid #c2c2c2;
    border-radius: 40px 0 0 40px;
    display: flex;
    align-items: center;
    padding: 3px 0 0 15px;
    margin-top: 2px;

    ::placeholder{
        font-size: 16px;
        display: flex;
        align-items: center;
    }
`; 

export const SearchInput = styled.input`
    width: 100%;
    height: 22px;
    outline: none;
    border: none;
    
`; 

export const SearchButton = styled.div`
    border-radius: 0 40px 40px 0;
    width: 65px;
    height: 38px;
    background-color: #f8f8f8;
    border: 1px solid #d3d3d3;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-top: 2px;

    & :hover{
        background-color: #dedede;
    }
`;

export const HeaderButton = styled.div`
    width: 200px;
    display: flex;
    justify-content: flex-end;
`;

export const DropDown = styled.div<{ dropDown: boolean }>`
    visibility: ${({ dropDown }) => dropDown ? 'visible' : 'hidden'};
    position: fixed;
    background-color: #fff;
    width: 300px;
    height: calc(96vh - 50px);
    top: 50px;
    right: 15px;
    z-index: 10;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const DropDownItems = styled.div`
    width: 100%;
    height: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;


    & :hover{
        background-color: #00000007;
    }
`;

