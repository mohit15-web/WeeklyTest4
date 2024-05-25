import EmplyoeeList from "./components/EmplyoeeList";
import TeamList from "./components/TeamList";
import { EmployeeProvider } from "./context/Context";

const App = () => {
  return (
    <EmployeeProvider>
      <div className="flex gap-20 px-40 mt-40">
        <EmplyoeeList />
        <TeamList />
      </div>
    </EmployeeProvider>
  );
};

export default App;
