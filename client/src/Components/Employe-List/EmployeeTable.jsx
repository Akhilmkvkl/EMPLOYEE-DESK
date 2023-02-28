import React, { useState, useEffect } from "react";
import { Table, Input, Button } from "antd";
import  {EmployeeInstance}  from "../../Instance/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [change, setChange] = useState(true);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    fetchData();
  }, [currentPage, change]);

  const fetchData = async() => {
    try {
      setLoading(true);
      console.log('nnn')
    const response = await EmployeeInstance.post("/getEmployees");
    console.log(response,"this is response")
    setEmployees(response.data.employeeDetails);
    setLoading(false);
      
    } catch (error) {
      console.log(error)
       return error
    }


  };

  const Navigate = useNavigate();

  const handlePaginationChange = (page, pageSize) => {
    setCurrentPage(page);
  };

  const handleDelete = async (id) => {
    try {
      console.log(id);
      const res = await EmployeeInstance.post("/delete-Employees", { id });
      if (res.statusText === "OK") {
        setChange(!change);
        toast.success(" Employee Removed successfully", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      console.log("an error occured");
      toast.error(" An error occured", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const employeeView = (record) => {
    try {
      console.log(record);
      Navigate("/View-Employee", { state: record });
    } catch (error) {}
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Job Title",
      dataIndex: "jobTitle",
      key: "jobTitle",
    },
    {
      title: "Contact",
      dataIndex: "email",
      key: "contact",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          <Button
            style={{ backgroundColor: "green" }}
            onClick={() => employeeView(record)}
          >
            view
          </Button>{" "}
          |{" "}
          <Button
            style={{ backgroundColor: "red" }}
            onClick={() => handleDelete(record._id)}
          >
            Delete
          </Button>
        </span>
      ),
    },
  ];

  const onSearch = (value) => {
    setSearchKeyword(value);
  };
  
  

  // const filteredEmployees = employees.filter((employee) =>
  //   employee.name.toLowerCase().includes(searchKeyword.toLowerCase())
  // );

  return (
    <div style={{ marginTop: "7vh", width: "90vw", marginLeft: "4vw" }}>
      <ToastContainer />

      <Input.Search
        placeholder="Search by name"
        allowClear
        onSearch={onSearch}
        style={{ marginBottom: 16 }}
      />

      <Table
        columns={columns}
        dataSource={employees}
        loading={loading}
        pagination={{
          current: currentPage,
          onChange: handlePaginationChange,
        }}
      />
    </div>
  );
};

export default EmployeeTable;
