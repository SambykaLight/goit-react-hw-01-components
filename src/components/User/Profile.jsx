import PropTypes from 'prop-types';
import {ProfileCard, Description, AvatarUser, UserName, UserTag, UserLocation, UserStats, UserLabel, UserQuantity} from './User.styled.jsx'

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <Description>
        <AvatarUser src={avatar} alt="User avatar"/>
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </Description>

      <UserStats>
        <li>
          <UserLabel>Followers</UserLabel>
          <UserQuantity>{stats.followers}</UserQuantity>
        </li>
        <li>
          <UserLabel>Views</UserLabel>
          <UserQuantity>{stats.views}</UserQuantity>
        </li>
        <li>
          <UserLabel>Likes</UserLabel>
          <UserQuantity>{stats.likes}</UserQuantity>
        </li>
      </UserStats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
