import type { CardProps } from '../../types';

function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-200 hover:border-orange-500/40 ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
