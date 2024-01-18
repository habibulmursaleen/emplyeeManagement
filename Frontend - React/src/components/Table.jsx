import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Table = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    dateJoined: "",
    email: "",
  });

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/employee");
      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const handleAdd = async () => {
    try {
      const formattedDate = new Date(newEmployee.dateJoined).toLocaleDateString(
        "en-CA"
      );

      await fetch("http://localhost:8080/api/v1/employee", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: newEmployee.name,
          email: newEmployee.email,
          joinDate: formattedDate,
        }),
      });

      fetchEmployees();

      setNewEmployee({
        name: "",
        dateJoined: "",
        email: "",
      });
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  const handleUpdate = async (id, updatedEmployee) => {
    try {
      await fetch(`http://localhost:8080/api/v1/employee/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedEmployee),
      });
      fetchEmployees();
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:8080/api/v1/employee/${id}`, {
        method: "DELETE",
      });
      fetchEmployees();
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  const handleSignout = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full md:w-2/3">
        <div className="px-4 py-3 text-right sm:px-6">
          <button
            className="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline-green focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={handleSignout}
          >
            Sign out
          </button>
        </div>
        <div className="overflow-x-auto mt-4 border rounded-lg">
          <table className="divide-y-1 text-base divide-gray-600 w-full">
            <thead className="bg-gray-50 rounded">
              <tr>
                <th className="table-th py-3 px-8 text-left">Name</th>
                <th className="table-th py-3 px-8 text-left">Date Joined</th>
                <th className="table-th py-3 px-8 text-left">Email</th>
                <th className="table-th py-3 px-8 text-left">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-600/50">
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td className="table-td py-6 pl-8">{employee.name}</td>
                  <td className="table-td py-6 pl-8">
                    {" "}
                    {new Date(employee.joinDate).toLocaleDateString(
                      "en-US"
                    )}{" "}
                  </td>
                  <td className="table-td py-6 pl-8">{employee.email} </td>
                  <td className="table-td flex gap-x-2 px-8 py-6">
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      onClick={handleUpdate}
                      className="w-6 h-6 hover:text-blue-500 cursor-pointer transition-all"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      onClick={handleDelete}
                      className="w-6 h-6 hover:text-red-500 cursor-pointer transition-all "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </td>
                </tr>
              ))}

              <tr>
                <td className="table-td py-6 px-8">
                  <div className="mb-4">
                    <input
                      value={newEmployee.name}
                      onChange={(e) =>
                        setNewEmployee({ ...newEmployee, name: e.target.value })
                      }
                      className="appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                </td>
                <td className="table-td py-6 px-8">
                  <div className="mb-4">
                    <input
                      className="appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500"
                      type="date"
                      onChange={(e) =>
                        setNewEmployee({
                          ...newEmployee,
                          dateJoined: e.target.value,
                        })
                      }
                      placeholder="Date Joined"
                    />
                  </div>
                </td>
                <td className="table-td py-6 px-8">
                  <div className="mb-4 ">
                    <input
                      value={newEmployee.email}
                      onChange={(e) =>
                        setNewEmployee({
                          ...newEmployee,
                          email: e.target.value,
                        })
                      }
                      className="appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500"
                      type="text"
                      placeholder="Email"
                    />
                  </div>
                </td>
                <td className="table-td py-6 px-8">
                  <div className="mb-4">
                    <button
                      className="shadow bg-gray-400 hover:bg-gray-300 focus:shadow-outline-green focus:outline-none text-black font-bold py-2 px-4 rounded"
                      type="submit"
                      onClick={handleAdd}
                    >
                      +
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
