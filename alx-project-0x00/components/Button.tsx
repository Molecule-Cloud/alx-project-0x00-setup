import { ButtonProps } from "@/interfaces"; 

export const Button: React.FC<ButtonProps> = ({title, styles}: ButtonProps) => {
    return (
        <button className={`bg-blue-500 text-white font-light items-center justify-center ${styles} hover:bg-blue-400 transition px-3 py-2`}>
            {title}
        </button>
    )
}
export default Button