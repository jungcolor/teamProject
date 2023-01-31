import styled from '@emotion/styled';

export const Head = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 10px;
    gap: 148px;

    width: 350px;
    height: 29px;
    left: 20px;
    top: 50px;
`;

export const ButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 10px;
    
    width: 110px;
    height: 29px;
    
    
    /* Inside auto layout */
    
    flex: none;
    order: 1;
    flex-grow: 0;
`