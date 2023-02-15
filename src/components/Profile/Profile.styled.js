import styled from '@emotion/styled';

export const Container = styled.div`
width: 370px;
margin-left: auto;
margin-right: auto;
margin-top: 50px;
background-color: white;
border: 1px solid #d8e4e2;
border-radius: 8px;
overflow: hidden;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px,
  rgb(0 0 0 / 12%) 0px 1px 8px 0px;
`;

export const Description = styled.div`
text-align: center;
padding-top: 30px;
  padding-bottom: 30px;
`;

export const Avatar = styled.img`
width: 100px;
border-radius: 50% 5px solid
`;

export const Name = styled.p`
font-weight: 900;
 color: #3c3e32;
`;

export const Tag = styled.p`
color: #959980;
`;

export const Location = styled.p`
color: #959980;
`;

export const Stats = styled.ul`
display: flex;
justify-content: center;
box-sizing: border-box;
position: relative;
background-color: #f4f5f6;
border: 1px solid #d8e4e2;
padding-bottom: 20px;
`;

export const Label = styled.span`
display: flex;
justify-content: center;
padding-top: 20px;
padding-right: 30px;
color: #959980;
`;

export const Quantity = styled.span`
font-weight: 900;
padding-top: 20px;
`;
