import "./profileIcon.scss";
import Avatar from "@mui/material/Avatar";

interface ProfileIconProps {
  name: string;
  onClickProfile: () => void;
}

export const ProfileIcon = ({ name, onClickProfile }: ProfileIconProps) => {
  let initials: string[] = [];

  for (const c of name) {
    if(initials.length >= 2) break;
    initials.push(c[0].toUpperCase());
  }

  return (
    <Avatar alt="Profile Icon" className="profile-icon" onClick={() => {onClickProfile()}}>
      {initials.join("")}
    </Avatar>
  );
};
