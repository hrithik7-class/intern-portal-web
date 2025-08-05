import { Link } from "react-router-dom";

function Button({ children, asChild, size = 'default', variant = 'default',  className = '', ...props }) {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500';
  const sizeStyles = {
    default: 'px-4 py-2 text-base',
    lg: 'px-7 py-4 text-2xl',
  };
  const variantStyles = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-100',
  };

  const classes = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  return asChild ? (
    <Link className={classes} {...props}>
      {children}
    </Link>
  ) : (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;