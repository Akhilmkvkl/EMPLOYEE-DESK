import React from "react";
import { Menu,Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
 
const Navbar = () => {
  return (
    <div>
  <Menu mode="horizontal">
    <Link to={'/'} style={{ textDecoration: "none" }}>
      <Menu.Item key="brand" style={{ fontWeight: "bold", fontSize: "1.2rem",textDecoration: "none" }}>
        EMPLOYE DESK
      </Menu.Item>
    </Link>
    <Menu.Item key="add-employee" style={{marginLeft:"65vw" }}>
      <Link to={'/Add-Employee'}>
        <Button type="primary" icon={<PlusOutlined />}>
          ADD EMPLOYEE
        </Button>
      </Link> 
    </Menu.Item>
  </Menu>
</div>

  );
};

export default Navbar;
