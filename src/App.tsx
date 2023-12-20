import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

import PSEHeader from "./containers/PSEHeader";
import PSEToDoneDialogForm from "./containers/PSEToDoneDialogForm";

const App = () => {
  return (
    <div className="flexCenter minHeight100">
      <PSEHeader />
      <PSEToDoneDialogForm />
    </div>
  );
};

export default App;
