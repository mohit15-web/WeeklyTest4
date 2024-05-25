import { useContext } from "react";
import { EmployeeContext } from "../context/Context";

function EmplyoeeList() {
    const {state, dispatch } = useContext(EmployeeContext);

    const handleAdd = (employee) => {
      dispatch({
        type: "ADD_EMPLOYEE",
        payload: employee,
      });
    };
  
    return (
      <div className="w-1/2 bg-gray-100 p-4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">All Employees</h2>
        {state.emplyoye.map(emp => (
          <div key={emp.id} className={`flex justify-between items-center p-2 bg-white mb-2 rounded
          ${emp.bgColor === true ? "bg-gray-200" : "bg-white"}
          `}>
            <div>
              <h3 className="text-xl">{emp.first_name}</h3>
              <p className="text-gray-600">{emp.age} years old</p>
            </div>
           {emp.bgColor ? null :  <button
              onClick={() => handleAdd(emp)}
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
            >
              Add
            </button>}
          </div>
        ))}
      </div>
    );
  }

export default EmplyoeeList