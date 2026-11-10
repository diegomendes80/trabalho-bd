import "./profileIcon.scss";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";

interface ProfileIconProps {
  name: string;
}

export const ProfileIcon = ({ name}: ProfileIconProps) => {
  let initials: string[] = [];
    const navigate = useNavigate();

  for (const c of name) {
    if(initials.length >= 2) break;
    initials.push(c[0].toUpperCase());
  }

  return (
    <Avatar alt="Profile Icon" className="profile-icon" onClick={() => {navigate("/profile")}}>
      {initials.join("")}
    </Avatar>
  );
};
