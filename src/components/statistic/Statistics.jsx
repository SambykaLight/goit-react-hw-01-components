import PropTypes from 'prop-types';
import {  StatisticsSection, StatTitle, StatList, StatItem, StatLabel, StatPercentage} from './Statistics.styled.jsx';

const createColor = () => {
  const color =
    'rgba(' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    0.5 +
    ')';

  return color;
};

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      <StatTitle>{title}</StatTitle>

      <StatList>
        {stats.map(stat => (
          <StatItem
            key={stat.id}
            style={{ backgroundColor: createColor() }}
          >
            <StatLabel>{stat.label}</StatLabel>
            <StatPercentage>{stat.percentage}%</StatPercentage>
          </StatItem>
        ))}
      </StatList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
};
