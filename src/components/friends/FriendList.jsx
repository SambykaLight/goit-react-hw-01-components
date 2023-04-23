import { FriendListItem } from '../friends/FriendListItem';
import { FriendListBox, FriendItem } from './FriendList.styled.jsx';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <FriendListBox>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendItem key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </FriendItem>
      ))}
    </FriendListBox>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
};
