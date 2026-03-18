import PropTypes from 'prop-types';

const GradientText = ({ children, className = '' }) => (
  <span className={`text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 ${className}`}>
    {children}
  </span>
);

GradientText.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default GradientText;
