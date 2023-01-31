import styled from '@emotion/styled';

export const Button = styled.button`
box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;
padding: 6px 12px;
gap: 10px;

width: 55px;
height: 29px;

border: 1px solid #999999;
 /* #365FF1; */
border-radius: 4px;
background-color:white;
/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
`;
