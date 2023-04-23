import { Profile } from 'components/User/Profile';
import { Statistics } from 'components/statistic/Statistics';
import { FriendList } from 'components/friends/FriendList';
import { TransactionHistory } from 'components/transactions/Transaction';
import user from './User/User.json';
import data from './statistic/data.json';
import friends from './friends/friends.json';
import transactions from './transactions/transactions.json';

export const App = () => {
  return (
    <div>
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
    </div>
  );
};
