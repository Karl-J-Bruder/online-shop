import styled from "styled-components";

export const StyledProductBuy = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const StyledProductQtyForm = styled.form`
    align-items: center;
    display: flex;
    flex-direction: row;
    height: 35px;
    margin-right: 20px;
    width: 100px;
`;

export const StyledQtyLabel = styled.div`
    align-items: center;
    background: darkgray;
    border: 2px solid lightgray;
    color: black;
    display: flex;
    font-size: 16px;
    height: 35px;
    justify-content: center;
    width: 45px;
`;

export const StyledQtyInput = styled.input`
    height: 35px;
    padding-left: 16px;
    width: 45px;
`;

export const StyledATCButton = styled.button`
  background: linear-gradient(#ff0322, #cc021b);
  border: solid 1px #7f0111;
  border-radius: 3px;
  box-shadow: 0 2px 3px darkred;
  color: white;
  font: 12px Arial;
  height: 30px;
  margin: 10px 5px;
  outline: 0;
  position: relative;
  text-align: center;
  text-shadow: 0 1px 0 #fafafa;
  vertical-align: center;
  width: 95px;

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