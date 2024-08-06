import styled  from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1600px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 150px;
    padding-right: 300px;
    position: fixed;
    bottom: 0;
    left: 0;
`;

export const Title = styled.div`
    font-size: large;
`;

export const InputContainer = styled.div`
    width: 350px;
    height: 150px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 3px 0 0 15px;
    margin-top: 2px;
`; 

export const Input = styled.input`
    width: 300px;
    height: 30px;
    outline: none;
    border: 1px solid #c2c2c2;
    border-radius: 10px;
    padding: 8px 15px;
    font-size: 15px;
`; 