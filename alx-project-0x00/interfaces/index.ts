export interface PillProps {
    title: string;
}

export interface ButtonProps {
    title: string;
    styles: string;
    size?: string
}

export interface ButtonSizes extends ButtonProps {
    size?: 'small' | 'medium' | 'large';
}