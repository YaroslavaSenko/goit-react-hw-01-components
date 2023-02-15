import PropTypes from "prop-types";
import {TransactionsHistory} from './TransactionHistory.styled';

const Transactions = ({items }) => {
    return (
        <TransactionsHistory >
     <thead >
     <tr>
        <th>Type </th>
        <th>Amount </th>
       <th>Currency </th>
       </tr>
       </thead>
      <tbody>
        {items.map( item =>(
    <tr>
      <td key= {item.id}>{item.type}</td>
      <td >{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
        ))}
    
  </tbody> 
  
    </TransactionsHistory>
    )
  }
  export default Transactions;

  Transactions.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency:PropTypes.string.isRequired,
  };
  