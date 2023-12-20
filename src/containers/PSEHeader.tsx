import RepeatIcon from "@mui/icons-material/Repeat";
import { Icon, Stack, Typography } from "@mui/material";
import dayjs from "dayjs";

const PSEHeader = () => {
  return (
    <div className="stretchSelf">
      <Stack spacing={5} direction="row" alignItems="center">
        <Stack
          sx={{ color: "#7900D9" }}
          spacing={1}
          direction="row"
          alignItems="center"
        >
          <Icon>
            <RepeatIcon />
          </Icon>
          <Typography variant="h6" sx={{ fontWeight: 500 }}>
            Étapes de production
          </Typography>
        </Stack>
        <div>
          <p>
            Étapes de production / Sucy - Légumerie -{" "}
            {dayjs.utc().format("DD/MM/YYYY")}
          </p>
        </div>
      </Stack>
    </div>
  );
};

export default PSEHeader;
