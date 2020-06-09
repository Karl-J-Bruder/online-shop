import styled from "styled-components";

export const StyledLabel = styled.span`
    font-size: 25px;
`;

export const StyledSocialButton = styled.button`
    height: 35px;
	display: block;
	font-family: Arial, "Helvetica", sans-serif;
	font-size: 14px;
	color: #fff;
	text-decoration: none;
	text-align: center;
	text-shadow: 0px -1px 0px rgba(0,0,0,0.4);
	padding: 4px 20px 0;
	margin: 10px auto;
	left: 30px;
	position: relative;
	cursor: pointer;
	border: none;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
    outline: 0;
    transition: all 0s ease-out;

    &:active {
        top: 3px;
    }

    &:before {
        content: "1";
        width: 35px;
        height: 35px;
        display: block;
        position: absolute;
        padding-top: 10px;
        line-height: 20px;
        top: 0px;
        margin-left: -54px;
        font-size: 16px;
        font-weight: bold;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;

        &:active {
            height: 25px;
        }
    }
`;

export const StyledFacebookButton = styled(StyledSocialButton)`
    border-left: solid 1px #2E4476;
	background: #3B5999;
	-webkit-box-shadow: 0px 5px 0px 0px #2E4476;
	box-shadow: 0px 5px 0px 0px #2E4476;

    &:active {
        box-shadow: 0px 2px 0px 0px #2E4476;

        &:before{
            -webkit-box-shadow: 0px 2px 0px 0px #2E4476, 6px 4px 2px rgba(0,0,0,0.3);
            box-shadow: 0px 2px 0px 0px #2E4476, 6px 0px 2px rgba(0,0,0,0.3);
        }
    }

    &:before {
        border-right: solid 1px #2E4476;
        background: #3B5999;
        -webkit-box-shadow: 0px 5px 0px 0px #2E4476;
        box-shadow: 0px 5px 0px 0px #2E4476;
    }
`;

export const StyledInstagramButton = styled(StyledSocialButton)`
	border-left: solid 1px #C02B21;
	background: #DE463B;
	-webkit-box-shadow: 0px 5px 0px 0px #C02B21;
	box-shadow: 0px 5px 0px 0px #C02B21;

    &:active {
        box-shadow: 0px 2px 0px 0px #C02B21;

        
        &:before{
            -webkit-box-shadow: 0px 2px 0px 0px #C02B21, 6px 4px 2px rgba(0,0,0,0.3);
	        box-shadow: 0px 2px 0px 0px #C02B21, 6px 0px 2px rgba(0,0,0,0.3);
        }
    }

    &:before {
        border-right: solid 1px #C02B21;
	    background: #DE463B;
	    -webkit-box-shadow: 0px 5px 0px 0px #C02B21;
	    box-shadow: 0px 5px 0px 0px #C02B21;
    }
`;

export const StyledTwitterButton = styled(StyledSocialButton)`
	border-left: solid 1px #269BD0;
	background: #46C1F6;
	-webkit-box-shadow: 0px 5px 0px 0px #269BD0;
	box-shadow: 0px 5px 0px 0px #269BD0;

    &:active {
        box-shadow: 0px 2px 0px 0px #269BD0;

        
        &:before{
            -webkit-box-shadow: 0px 2px 0px 0px #269BD0, 6px 4px 2px rgba(0,0,0,0.3);
	        box-shadow: 0px 2px 0px 0px #269BD0, 6px 0px 2px rgba(0,0,0,0.3);
        }
    }

    &:before {
        border-right: solid 1px #269BD0;
        background: #46C1F6;
        -webkit-box-shadow: 0px 5px 0px 0px #269BD0;
        box-shadow: 0px 5px 0px 0px #269BD0;
    }
`;