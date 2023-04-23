import PropTypes from 'prop-types';
import css from './friend.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <span className={`${css.status} ${css[isOnline]}`}>{isOnline}</span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

// function useFriendStatus(friendID) {
//   const [isOnline, setIsOnline] = useState(null);

// function FriendStatus(props) {
//   const isOnline = useFriendStatus(props.friend.id);

//   if (isOnline === null) {
//     return 'downloading...';
//   }
//   return isOnline ? 'is online' : 'not online';
//     }
