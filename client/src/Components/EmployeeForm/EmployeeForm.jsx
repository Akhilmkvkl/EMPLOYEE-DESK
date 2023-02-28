import { useState } from "react";
import { Form, Input, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { EmployeeInstance } from "../../Instance/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EmployeeForm = () => {
  const [educationItems, setEducationItems] = useState([
    { degree: "", school: "", year: "" },
  ]);
  const [experienceItems, setExperienceItems] = useState([
    { company: "", position: "", duration: "" },
  ]);
  const [form] = Form.useForm();
  const handleFormSubmit = (values) => {
    onSubmit({
      ...values,
      education: educationItems,
      experience: experienceItems,
    });
  };

  const onSubmit = async (values) => {
    console.log(values);

    try {
      form.resetFields();
      const res = await EmployeeInstance.post("/add-Employee", { values });
      console.log(res);
      if (res.statusText === "OK") {
        toast.success(" Employee added successfully", {
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
      console.log(error);
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

  const handleFormReset = () => {
    setEducationItems([{ degree: "", school: "", year: "" }]);
    setExperienceItems([{ company: "", position: "", duration: "" }]);
  };

  const handleAddEducationItem = () => {
    setEducationItems([
      ...educationItems,
      { degree: "", school: "", year: "" },
    ]);
  };

  const handleEducationItemChange = (index, key, value) => {
    const newEducationItems = [...educationItems];
    newEducationItems[index][key] = value;
    setEducationItems(newEducationItems);
  };

  const handleAddExperienceItem = () => {
    setExperienceItems([
      ...experienceItems,
      { company: "", position: "", duration: "" },
    ]);
  };

  const handleExperienceItemChange = (index, key, value) => {
    const newExperienceItems = [...experienceItems];
    newExperienceItems[index][key] = value;
    setExperienceItems(newExperienceItems);
  };

  const educationItemsFields = educationItems.map((item, index) => (
    <div key={index} style={{ display: "flex", marginBottom: 8 }}>
      <Input
        value={item.degree}
        onChange={(e) =>
          handleEducationItemChange(index, "degree", e.target.value)
        }
        placeholder="Degree"
        style={{ marginRight: 8 }}
      />
      <Input
        value={item.school}
        onChange={(e) =>
          handleEducationItemChange(index, "school", e.target.value)
        }
        placeholder="School"
        style={{ marginRight: 8 }}
      />
      <Input
        value={item.year}
        onChange={(e) =>
          handleEducationItemChange(index, "year", e.target.value)
        }
        placeholder="Year"
        style={{ marginRight: 8 }}
      />
      {index === educationItems.length - 1 && (
        <Button
          type="dashed"
          onClick={handleAddEducationItem}
          icon={<PlusOutlined />}
          style={{ width: "auto" }}
        >
          Add Education
        </Button>
      )}
    </div>
  ));

  const experienceItemsFields = experienceItems.map((item, index) => (
    <div key={index} style={{ display: "flex", marginBottom: 8 }}>
      <Input
        value={item.company}
        onChange={(e) =>
          handleExperienceItemChange(index, "company", e.target.value)
        }
        placeholder="Company"
        style={{ marginRight: 8 }}
      />
      <Input
        value={item.position}
        onChange={(e) =>
          handleExperienceItemChange(index, "position", e.target.value)
        }
        placeholder="Position"
        style={{ marginRight: 8 }}
      />
      <Input
        value={item.duration}
        onChange={(e) =>
          handleExperienceItemChange(index, "duration", e.target.value)
        }
        placeholder="Duration"
        style={{ marginRight: 8 }}
      />
      {index === experienceItems.length - 1 && (
        <Button
          type="dashed"
          onClick={handleAddExperienceItem}
          icon={<PlusOutlined />}
          style={{ width: "auto" }}
        >
          Add Experience
        </Button>
      )}
    </div>
  ));

  return (
    <div style={{ width: "80vw", marginLeft: "6vw", marginTop: "7vh" }}>
      <ToastContainer />

      <Form
        onFinish={handleFormSubmit}
        onReset={handleFormReset}
        layout="vertical"
        form={form}

      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            { required: true,message: "Please input the employee's name!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Job Title"
          name="jobTitle"
          rules={[{ required: true, message: "Please input the jobTitle!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { type: "email", message: "Please enter a valid email address" },
            { required: true, message: "Please input the jobTitle!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Phone"
          name="phone"
          rules={[{ required: true, message: "Please input the phone!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Education" name="education">
          {educationItemsFields}
        </Form.Item>
        <Form.Item label="Experience" name="experience">
          {experienceItemsFields}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="reset" style={{ marginLeft: 8 }}>
            Reset
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EmployeeForm;
