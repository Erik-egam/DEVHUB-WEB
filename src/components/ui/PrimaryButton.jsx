import PropTypes from 'prop-types';

const PrimaryButton = ({ children, href = '#', className = '', onClick, variant = 'default' }) => {
  const baseClasses = 'inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-300 rounded-full hover:shadow-lg hover:shadow-purple-500/25 hover:-translate-y-1';
  
  const variants = {
    default: 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500',
    discord: 'bg-gradient-to-r from-[#5865F2] to-[#4752C4] hover:from-[#4752C4] hover:to-[#5865F2] shadow-[#5865F2]/30',
  };

  return (
    <a 
      href={href}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant] || variants.default} ${className}`}
    >
      {children}
    </a>
  );
};

PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['default', 'discord']),
};

export default PrimaryButton;
