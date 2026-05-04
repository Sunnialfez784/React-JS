import * as React from "react";
import Box from "@mui/material/Box";
import MuiRating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";

const labels = {
  0.5: "Useless",
  1: "Bad",
  1.5: "Poor",
  2: "Ok",
  2.5: "Average",
  3: "Good",
  3.5: "Very Good",
  4: "Excellent",
  4.5: "Super",
  5: "Perfect",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}`;
}

export default function RatingComponent() {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <MuiRating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={
          <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
        }
      />

      {value !== null && (
        <Box sx={{ ml: 2 }}>
          {labels[hover !== -1 ? hover : value]}
        </Box>
      )}
    </Box>
  );
}