import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    padding: 0;

    @media only screen and (max-width: 800px){
        height: 60px;
        margin-bottom: 20px;
        padding-right: 10px;
    }

    @media only screen and (max-width: 600px){
        height: 60px;
        margin-bottom: 20px;
        padding-right: 0;
    }
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    margin-bottom: 5px;
    padding-top: 15px;

    @media screen and (max-width: 800px){
        width: 50px;
        padding: 0;
    }
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 800px){
        width: 80%;
    }
`;

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`;

