import PropTypes from "prop-types";
import FriendListItem from '../FriendListItem/FriendListItem'
import styles from './FriendList.module.css'
const FriendList = ( {friends}) => {
    return (
        <ul className={styles.friendList}>
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
        id: PropTypes.number.isRequired,
      })
    )
  };
  