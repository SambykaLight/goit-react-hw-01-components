import PropTypes from 'prop-types';
import { FriendStatus, FriendAvatar, FriendName } from './FriendListItem.styled.jsx';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <FriendStatus style={{backgroundColor: isOnline ? 'green' : 'red'}}>{isOnline}</FriendStatus>
      <FriendAvatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

