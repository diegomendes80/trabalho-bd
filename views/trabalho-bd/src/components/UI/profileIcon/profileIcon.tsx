import "./profileIcon.scss";
import Avatar from "@mui/material/Avatar";

interface ProfileIconProps {
  name: string;
  onHandleOpenProfile: (type: string) => void;
}

export const ProfileIcon = ({ name, onHandleOpenProfile }: ProfileIconProps) => {
  let initials: string[] = [];

  for (const c of name) {
    if(initials.length >= 2) break;
    initials.push(c[0].toUpperCase());
  }

  return (
    <Avatar alt="Profile Icon" className="profile-icon" onClick={() => {onHandleOpenProfile(name)}}>
      {initials.join("")}
    </Avatar>
  );
};
