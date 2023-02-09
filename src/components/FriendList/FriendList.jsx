import PropTypes from "prop-types";
import FriendListItem from '../FriendListItem/FriendListItem'

const FriendList = ( {friends}) => {
    return (
        <ul class="friend-list">
         {friends.map(({ avatar, name, isOnline, id }) => (
                <FriendListItem key={id} isOnline={isOnline} 
                avatar={avatar} name={name}/>
            ))}     
      </ul>
    )
  }
  
  export default FriendList;

  FriendList.propTypes = {
    friends:PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
      })
    )
  };
  