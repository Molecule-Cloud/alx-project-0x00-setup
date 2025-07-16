export interface ButtonProps {
    title: string;
    size?: 'sm' | 'md' | 'lg';
    shape?: 'rounded_full' | 'rounded_md' | 'rounded_sm';
    color?: 'primary' | 'secondary' | 'danger';
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({
    title,
    size = 'md',
    shape = 'rounded_md',
    color = 'primary',
    className = '',
}) => {
    const sizeClasses = {
        sm: 'px-2 py-1 text-sm',
        md: 'px-4 py-2 text-md',
        lg: 'px-6 py-3 text-lg',
    };

    const ShapeClasses = {
        rounded_full: 'rounded-full',
        rounded_md: 'rounded-md',
        rounded_sm: 'rounded-sm',
    };

    const colorClasses = {
        primary: 'bg-blue-500 text-white',
        secondary: 'bg-gray-500 text-white',
        danger: 'bg-red-500 text-white',
    };

    return (
        <button
            className={`font-medium transition-colors hover:opacity-80 ${sizeClasses[size]} ${ShapeClasses[shape]} ${colorClasses[color]} ${className}`}
        >
            {title}
        </button>
    );
};

export default Button