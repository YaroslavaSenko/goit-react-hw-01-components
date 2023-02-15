import PropTypes from "prop-types";
import { FriendListItemCard, Status, Avatar,  Name} from './FriendListItemCard.styled';

const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <FriendListItemCard >
        <Status statusType={isOnline}>{isOnline}</Status>
        <Avatar src={avatar} alt="User avatar" width="48"></Avatar> 
        <Name>{name}</Name>
      </FriendListItemCard>
    )
  }
  
  export default FriendListItem;

  FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number,
  };
