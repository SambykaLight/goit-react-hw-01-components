import { Profile } from 'components/User/Profile';
import { Statistics } from 'components/statistic/Statistics';
import { FriendList } from 'components/friends/FriendList';
import { TransactionHistory } from 'components/transactions/Transaction';
import { Container } from './App.styled';
import user from 'components/User/User.json';
import data from 'components/statistic/data.json';
import friends from 'components/friends/friends.json';
import transactions from 'components/transactions/transactions.json';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
