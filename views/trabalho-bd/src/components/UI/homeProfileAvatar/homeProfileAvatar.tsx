import "./homeProfileAvatar.scss";
import { Box } from "@mui/material";

interface HomeProfileAvatarProps {
  username: String;
}

export const HomeProfileAvatar = ({ username }: HomeProfileAvatarProps) => {
  const initials = username
    .trim()
    .split(/\s+/)
    .map((word) => word[0])
    .join("");
  return <Box component="div" className="home-profile-avatar-root">{initials}</Box>;
};
