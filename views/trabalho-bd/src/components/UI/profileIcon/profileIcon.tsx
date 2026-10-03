import "./profileIcon.scss";
import Avatar from "@mui/material/Avatar";

interface ProfileIconProps {
  name: string;
}

export const ProfileIcon = ({ name }: ProfileIconProps) => {
  let initials: string[] = [];

  for (const c of name) {
    if(initials.length >= 2) break;
    initials.push(c[0].toUpperCase());
  }

  return (
    <Avatar alt="Profile Icon" className="profile-icon">
      {initials.join("")}
    </Avatar>
  );
};
