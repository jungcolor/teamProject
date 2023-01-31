import styled from '@emotion/styled';

export const Weather = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   padding: 8px 14px;
   gap: 20px;
   
   width: 335px;
   height: 64px;
   left: 20px;
   top: 104px;
   
   background: #FFFFFF;
   box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
   border-radius: 12px;
   
`;

export const Title = styled.text`
    width: 90px;
    height: 18px;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    /* identical to box height */   
    
    color: #666666;
`
export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 8px;
    
    width: 200px;
    height: 105px;
    /* Inside auto layout */
    
    flex: none;
    order: 0;
    flex-grow: 0;
`

export const TempeatureBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 8px;
    
    width: 322px;
    height: 25px;

`

export const Temperature = styled.text`
    order:1;
    width: 43px;
    height: 25px;
    
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 21px;
    line-height: 25px;
    
    /* black */
    
    color: #222222;
`

export const Description = styled.text`
    order:2;
    width: 90px;
    height: 22px;
    
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    
    
    /* black */
    
    color: #222222;
    
    
    /* Inside auto layout */
    
    flex: none;
    order: 1;
    flex-grow: 0;
`

export const Icon = styled.text`
    order:3;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    line-height: 100%;
    /* or 44px */
    
    
    color: #000000;
`