import styled from '@emotion/styled';

export const StatisticsCard = styled.section`
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

export const Title = styled.h2`
text-align: center;
padding-top: 30px;
  padding-bottom: 30px;
`;

export const StatList = styled.ul`
height: 100px;
display: flex;
justify-content: center;
box-sizing: border-box;
position: relative;
background-color: #f4f5f6;
border: 1px solid #d8e4e2;
padding-bottom: 20px;
`;

export const Item = styled.li`
display: flex;
flex-direction: column;
justify-content: space-evenly;
margin-left: auto;
margin-right: auto;
`;

export const Label = styled.span`
color: #959980;
`;

export const Percentage = styled.span`
font-weight: 900;
`;
