import PropTypes from 'prop-types';

const Card = ({ children, className = '', hoverable = true }) => (
  <div className={`p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm transition-colors duration-300 ${hoverable ? 'hover:border-indigo-500/30 hover:-translate-y-2' : ''} ${className}`}>
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hoverable: PropTypes.bool,
};

export default Card;
