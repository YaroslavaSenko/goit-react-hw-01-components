import styled from '@emotion/styled';

export const FriendListItemCard = styled.li`
margin-top: 20px;
height: 70px;
padding: 10px 10px;
background-color: white;
border: 1px solid #d8e4e2;
border-radius: 8px;
box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px,
rgb(0 0 0 / 12%) 0px 1px 8px 0px;
display: flex;
justify-content: flex-start;
align-items: center;
`;

export const Status = styled.span`
  /* display: inline-block; */
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${props => (props.statusType ? 'green' : 'red')};
`;


export const Avatar = styled.img`
width: 70px;
padding-left: 40px;
`;

export const Name = styled.p`
padding-left: 50px;
font-size: 20px;
font-weight: 700;
`;

