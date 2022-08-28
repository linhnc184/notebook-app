import './Button.css';

const Button = ({ children, className, ...props }) => {
  return (
    <button {...props} className={`btn ${className}`}>
      {children}
    </button>
  );
};

export default Button;
