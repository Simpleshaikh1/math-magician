// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const ResultDisplayScreen = ({ total, next, operation }) => (
  <div className="result-display-screen">
    <div className="previous-operand">{next || operation}</div>
    <div className="current-operand">{total || next || '0'}</div>
  </div>
);
ResultDisplayScreen.propTypes = {
  total: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,
};
ResultDisplayScreen.defaultProps = {
  total: null,
  next: null,
  operation: null,
};

export default ResultDisplayScreen;
