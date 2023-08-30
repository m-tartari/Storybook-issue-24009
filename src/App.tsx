import * as React from "react";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { FormatAlignLeft, FormatAlignCenter, FormatAlignRight, FormatAlignJustify } from "@mui/icons-material";

import ToggleButton from "./ToggleButton";

export default function App() {
  const [alignment, setAlignment] = React.useState<string | null>("left");

  const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup value={alignment} exclusive onChange={handleAlignment} aria-label="text alignment">
      <ToggleButton value="left" aria-label="left aligned">
        <FormatAlignLeft />
      </ToggleButton>
      <ToggleButton value="center" aria-label="centered">
        <FormatAlignCenter />
      </ToggleButton>
      <ToggleButton value="right" aria-label="right aligned">
        <FormatAlignRight />
      </ToggleButton>
      <ToggleButton value="justify" aria-label="justified" disabled>
        <FormatAlignJustify />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
