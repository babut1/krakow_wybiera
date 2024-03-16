import { Box, Divider, Grid, IconButton, Typography } from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { useState } from "react";
import { District } from "../common/types";

export function DistrictSelectorManager() {
  const [selectedDistrict, setSelectedDistrict] = useState<number | null>(null);

  const handleDistrictSelect = (districtNumber: number) => {
    setSelectedDistrict(districtNumber);
  };

  // todo: move it to parent
  const districts: District[] = [
    {
      districts: ["Stare Miasto", "Grzegórzki", "Prądnik Czerwony"],
      constituency: 1,
    },
    { districts: ["Prądnik Biały", "Krowodrza"], constituency: 2 },
    { districts: ["Bronowice", "Zwierzyniec", "Dębniki"], constituency: 3 },
    {
      districts: [
        "Łagiewniki-Borek Fałęcki",
        "Swoszowice",
        "Podgórze Duchackie",
      ],
      constituency: 4,
    },
    { districts: ["Bieżanów-Prokocim", "Podgórze"], constituency: 5 },
    {
      districts: ["Czyżyny", "Mistrzejowice", "Wzgórza Krzesławickie"],
      constituency: 6,
    },
    { districts: ["Bieńczyce", "Nowa Huta"], constituency: 7 },
  ];

  return (
    <>
      {districts.map((district: District, index: number) => (
        <Box key={district.constituency} width={"100%"}>
          <DistrictSelector
            district={district}
            selected={selectedDistrict === district.constituency}
            onSelect={handleDistrictSelect}
          />
          {index < districts.length - 1 && <Divider orientation="horizontal" />}
        </Box>
      ))}
    </>
  );
}

function DistrictSelector(props: {
  district: District;
  selected: boolean;
  onSelect: (districtNumber: number) => void;
}) {
  return (
    <Grid container alignItems="center" justifyContent="space-between">
      <Box style={{ flex: "0 0 70%" }}>
        <Typography variant="h5" fontWeight="bold">
          Okręg {props.district.constituency}
        </Typography>
        <Typography variant="h6">
          {props.district.districts.join(", ")}
        </Typography>
      </Box>
      <IconButton onClick={() => props.onSelect(props.district.constituency)}>
        {props.selected ? (
          <CheckBoxIcon sx={{ fontSize: "60px", color: "black" }} />
        ) : (
          <CheckBoxOutlineBlankIcon sx={{ fontSize: "60px", color: "black" }} />
        )}
      </IconButton>
    </Grid>
  );
}
