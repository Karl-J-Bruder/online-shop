import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StyledMailingList = styled.div`
    margin: 1rem auto 0.5rem auto;
    max-width: 95vw;
    min-height: 250px;
    min-width: 75vw;
`;

export const StyledImg = styled.img`
    height: 75px;
    justify-self: flex-start;
    width: 75px;
`;

export const StyledHeader = styled.div`
    align-items: center;
    background-color: ${theme.themeRed};
    color: ${theme.primaryLight};
    display: flex;
`;

export const StyledHeaderText = styled.div`
    font-size: 25px;
    margin-left: 30px;
`;

export const StyledMainBody = styled.div`
    background-color: white;
`;

export const StyledFeatures = styled.ul`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 60px;
    margin: .5rem auto;
    padding: 0;
    width: 80vw;
`;

export const StyledFeatureItem = styled.li`
    font-size: 15px;
    margin: 0;
    text-align: left;
`;

export const StyledSubmitButton = styled.button`
    background: rgb(202, 60, 60);
    border: none;
    border-radius: 4px;
    color: white;
    height: 30px;
    opacity: ${({ disabled }) => disabled ? '0.5' : '1'};
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    width: 100px;
`;

export const StyledConfirmationBox = styled.div`
color: ${ theme.themeRed};
font-size: 25px;
font-weight: 700;
max-height: 150px;
min-height: 50px;
margin: 10px auto;
width: 300px;
`;