import PropTypes from "prop-types";
import { Container, Description, Avatar, Name, Tag, Location, Stats, Label, Quantity } from "./Profile.styled";

const Profile = ({username, tag, location, avatar, stats}) => {
  return (
    <Container>
  <Description>
    <Avatar
      src= {avatar}
      alt="User avatar"></Avatar>
    <Name>{username}</Name>
    <Tag>@{tag}</Tag>
    <Location>{location}</Location>
  </Description>
  <Stats>
    <li>
      <Label>Followers</Label>
      <Quantity>{stats.followers}</Quantity>
    </li> 
    <li>
      <Label>Views</Label>
      <Quantity>{stats.views}</Quantity>
    </li>
    <li>
      <Label>Likes</Label>
      <Quantity>{stats.likes}</Quantity>
    </li>
  </Stats>
</Container>
  )
}

export default Profile;


Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar:PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
