import PropTypes from 'prop-types';
import { TransactionHistoryBox } from './Transactions.styled.jsx';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryBox>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </TransactionHistoryBox>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id:PropTypes.string.isRequired
    })
  ),
};
