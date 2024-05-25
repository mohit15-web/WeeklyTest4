import { useContext } from 'react'
import { EmployeeContext } from '../context/Context';

function TeamList() {
    const { state, dispatch } = useContext(EmployeeContext);

    const handleRemove = (employee) => {
      dispatch({
        type: "REMOVE_EMPLOYEE",
        payload: employee,
      });
    };
  
    const handleSort = () => {
      dispatch({
        type: "SORT_TEAM"
      });
    };
  
    const averageAge = state.team.length > 0
      ? (state.team.reduce((sum, emp) => sum + emp.age, 0) / state.team.length).toFixed(2)
      : 0;
  
    return (
      <div className="w-1/2 bg-gray-100 p-4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Team Members</h2>
        <button
          onClick={handleSort}
          className="mb-4 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-700"
        >
          Sort by Age
        </button>
        {state.team.map(emp => (
          <div key={emp.id} className="flex justify-between items-center p-2 bg-white mb-2 rounded">
            <div>
              <h3 className="text-xl">{emp.first_name}</h3>
              <p className="text-gray-600">{emp.age} years old</p>
            </div>
            <button
              onClick={() => handleRemove(emp)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
            >
              Remove
            </button>
          </div>
        ))}
        <div className="mt-4">
          <h3 className="text-xl">Average Age: {averageAge}</h3>
        </div>
      </div>
    );
  }

export default TeamList