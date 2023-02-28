import { Layout,Card, List } from 'antd';
import {useLocation} from "react-router-dom";

const { Content } = Layout;




const renderEducation = (education) => (
  <Card title={<p style={{color:"red",fontSize:"1.2rem"}}> Education</p>} style={{marginBottom:'2vh'}}>
    <List
      itemLayout="horizontal"
      dataSource={education}
      renderItem={(edu) => (
        <List.Item>
          <List.Item.Meta
            title={edu.degree}
            description={`${edu.school} (${edu.year})`}
          />
        </List.Item>
      )}
    />
  </Card>
);

const renderExperience = (experience) => (
  <Card title={<p style={{color:"red",fontSize:"1.2rem"}}>Experience</p>}>
    <List
      itemLayout="horizontal"
      dataSource={experience}
      renderItem={(exp) => (
        <List.Item>
          <List.Item.Meta
            
            title={exp.position}
            description={`${exp.company} (${exp.duration})`}
          />
        </List.Item>
      )}
    />
  </Card>
);

const EmployeeView = () => {
  const location = useLocation()
  const data = location.state;


 
  
  return(
    <Layout>
    <Content style={{ backgroundColor: 'rgba(0,0,0,0.2)', height: '120vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card title="Employee Info" style={{ width: '80%'}}>
        <p>Name: {data.name}</p>
        <p>Job Title: {data.jobTitle}</p>
        <p>Email: {data.email}</p>
        <p>Phone: {data.Phone}</p>
        {renderEducation(data.education)}
        {renderExperience(data.experience)}
      </Card>
    </Content>
  </Layout>
  )
};

export default EmployeeView;
