import Profile from './Profile/Profile'
import user from '../database/user.json'

import Statistics from './Statistics/Statistics'
import data from '../database/data.json'

import FriendList from './FriendList/FriendList'
import friends from '../database/friends.json'

export const App = () => {
  return (
    <>
    <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}/>

  <Statistics 
  title="Upload stats" 
  stats={data} />

  <FriendList 
  friends={friends} />;
</>
    
  );
};
