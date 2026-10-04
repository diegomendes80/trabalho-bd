import './actionButton.scss';
import Button, { type ButtonProps } from "@mui/material/Button";

interface ActionButtonProps extends ButtonProps {
    icon?: React.ReactNode;
}

export const ActionButton = ({ children, icon, className, ...props }: ActionButtonProps) => {
    return (
        <Button className={`action-button ${className ?? ""}`} {...props}>
            {icon}
            {children}
        </Button>
    )
}