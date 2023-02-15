import PropTypes from "prop-types";
import {StatisticsCard, Title, StatList, Item, Label, Percentage } from './Statistacs.styled';

const Statistics = ({title, stats}) => {
  return (
    <StatisticsCard>
  <Title>{title}</Title>
  <StatList>
    {stats.map( stat => (
      <Item key= {stat.id}>
      <Label>{stat.label}</Label>
      <Percentage>{stat.percentage}%</Percentage>
    </Item>
    ))
    }
    
  </StatList>
</StatisticsCard>
  )
}

export default Statistics;

Statistics.propTypes = {
  id: PropTypes.node,
  label: PropTypes.string,
  percentage: PropTypes.string,
};