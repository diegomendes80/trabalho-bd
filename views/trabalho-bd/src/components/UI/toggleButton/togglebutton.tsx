import "./toggleButton.scss";
import { useState } from "react";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";

interface SwitchButtonProps{
  onToggleMediaType: (type: "movies" | "series") => void;

}

export const SwitchButton = ({onToggleMediaType} : SwitchButtonProps) => {
  const [alignment, setAlignment] = useState<string | null>("movies");

  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    if (newAlignment != null) setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      className="toggle-group"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="media-type"
    >
      <ToggleButton value="movies" aria-label="movies" onClick={() => {onToggleMediaType("movies")}}>
        Filmes
      </ToggleButton>
      <ToggleButton value="series" aria-label="series" onClick={() => {onToggleMediaType("series")}}>
        Séries
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
