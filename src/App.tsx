import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

import PSEHeader from "./containers/PSEHeader";
import PSEToDoneDialogForm from "./containers/PSEToDoneDialogForm";
import { Box, Button } from "@mui/material";

const App = () => {
  return (
    <div className="flexCenter minHeight100">
      <PSEHeader />
      <Box sx={{ mt: 6 }}>
        <Button variant="contained">Terminer l'étape</Button>
      </Box>
      <PSEToDoneDialogForm open />
    </div>
  );
};

export default App;
