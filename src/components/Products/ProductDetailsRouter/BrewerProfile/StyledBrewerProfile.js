import styled from "styled-components";

export const StyledBrewerProfile = styled.div`
    font-size: 1.5rem;

    @media (min-width: ${({ theme }) => theme.screenMed}) {
        font-size: 1.75rem;
    }
`;

export const StyledProfileInner = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 80%;
`;

export const StyledProfileSegment = styled.div`
    margin: 10px auto;
`;

export const StyledSegmentPhoto = styled.img`
    height: 150px;
    width: 200px;
`;

export const StyledFloatedPhoto = styled(StyledSegmentPhoto)`
    padding: 10px;

    @media (min-width: ${({ theme }) => theme.screenMed}) {
        float: left;
    }
`;

export const StyledTextBodyLink = styled.a`
    color: ${({ theme }) => theme.themeRed}
`;