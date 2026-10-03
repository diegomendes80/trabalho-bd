import './actionButton.scss';
import Button from "@mui/material/Button";

interface ActionButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    icon: React.ReactNode;
    
}

export const ActionButton = ({children, onClick, icon}: ActionButtonProps) => {
    return (
        <Button className="action-button" onClick={onClick}>
            {icon}
            {children}
        </Button>
    )
} 