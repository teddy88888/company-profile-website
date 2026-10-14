import type { ButtonProps } from '../../types';

function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200';

  const variants = {
    primary:
      'bg-orange-500 text-white hover:bg-orange-400',
    secondary:
      'bg-white text-gray-900 hover:bg-gray-100',
    outline:
      'border border-gray-600 text-white hover:border-orange-500 hover:text-orange-500',
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={styles}
    >
      {children}
    </button>
  );
}

export default Button;
