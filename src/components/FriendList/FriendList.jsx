import PropTypes from "prop-types";
import FriendListItem from '../FriendListItem/FriendListItem'
import { FriendListCard } from './FriendList.styled';
const FriendList = ( {friends}) => {
    return (
        <FriendListCard>
         {friends.map(({ avatar, name, isOnline, id }) => (
                <FriendListItem key={id} isOnline={isOnline} 
                avatar={avatar} name={name}/>
            ))}     
      </FriendListCard>
    )
  }
  
  export default FriendList;

  FriendList.propTypes = {
    friends:PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      })
    )
  };
  