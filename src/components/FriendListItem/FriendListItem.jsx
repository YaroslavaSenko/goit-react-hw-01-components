import PropTypes from "prop-types";

const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <li class="item">
        <span class="status">{isOnline}</span>
        <img class="avatar"  src={avatar} alt="User avatar" width="48" />
        <p class="name">{name}</p>
      </li>
    )
  }
  
  export default FriendListItem;

  FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  };
