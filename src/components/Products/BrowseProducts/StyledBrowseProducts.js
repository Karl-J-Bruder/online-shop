import styled from "styled-components";
import { StarFull } from "styled-icons/icomoon/StarFull";

export const StyledProductListGrid = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  @media (min-width: ${({ theme }) => theme.screenLrg}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, 1fr);
  }
`;

export const StyledProductContainer = styled.div`
  align-items: center;
  border: 1px solid lightgray;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  min-height: 30vh;
  padding-right: 3px;
`;

export const StyledProductInfo = styled.div`
  display: block;

  @media (min-width: ${({ theme }) => theme.screenLrg}) {
    width: 250px;
  }

  @media (min-width: ${({ theme }) => theme.screenXLrg}) {
    width: 300px;
  }
`;

export const StyledProductName = styled.p`
  font: bold 2rem arial;
  margin-bottom: 0;

  @media (min-width: ${({ theme }) => theme.screenLrg}) {
    font-size: 2.25rem;
  }
`;

export const StyledParameterRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const StyledProductParameter = styled.span`
  font-size: 1.25rem;
  margin: 0 2px 0 2px;

  @media (min-width: ${({ theme }) => theme.screenLrg}) {
    font-size: 1.5rem;
  }
`;

export const StyledPrice = styled.span`
  color: rgb(252, 131, 100);
  font-weight: bold;
  font-size: 1.5rem;
  margin: 10px 15px 5px 0;

  @media (min-width: ${({ theme }) => theme.screenLrg}) {
    font-size: 1.75rem;
  }
`;

export const StyledRatings = styled.div`
  align-items: center;
  color: #0066c0;
  display: flex;
  flex-direction: row;
  font-size: 1.25rem;
  font-weight: bold;
  margin: 10px 0 5px 0;

  @media (min-width: ${({ theme }) => theme.screenLrg}) {
    font-size: 1.5rem;
  }
`;

export const StyledStar = styled(StarFull)`
  color: gold;
  height: 20px;
  width: 20px;
`;

export const StyledImg = styled.img`
  margin-left: 5px;
  height: 150px;
  width: 130px;

  @media (min-width: ${({ theme }) => theme.screenXLrg}) {
    margin-left: 50px;
  }
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const StyledATCButton = styled.button`
  background: linear-gradient(#ff0322, #cc021b);
  border: solid 1px #7f0111;
  border-radius: 3px;
  box-shadow: 0 2px 3px darkred;
  color: white;
  font: 1.25rem Arial;
  height: 30px;
  margin: 10px 3px;
  outline: 0;
  position: relative;
  text-align: center;
  text-shadow: 0 1px 0 #fafafa;
  vertical-align: center;
  width: 100px;

  &:hover {
    background: linear-gradient(#cc021b, #ff0322);
    border-bottom: solid 3px #ff0322;
    box-shadow: inset 0 0 0 1px #ff4e64;
    cursor: pointer;
  }

  &:active {
    border: solid 1px #cc021b;
    box-shadow: inset 0 10px 15px 0 #990114;
    top: 2px;
  }
`;