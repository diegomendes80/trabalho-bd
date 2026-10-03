import "./toggleButton.scss";
import { useState } from "react";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";

export const SwitchButton = () => {
  const [alignment, setAlignment] = useState<string | null>("movies");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
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
      <ToggleButton value="movies" aria-label="movies">
        Filmes
      </ToggleButton>
      <ToggleButton value="series" aria-label="series">
        Séries
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
