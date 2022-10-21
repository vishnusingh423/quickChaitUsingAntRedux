import React, { useState, useEffect } from "react";
import { Card, Col, Input, Row, Statistic, Button, Avatar, Badge } from "antd";
import { UserOutlined } from "@ant-design/icons";

import UserService from "../services/user.service";
// import  from "./ChaitUI"
const Home = () => {
  const [content, setContent] = useState("");
  const [count, setCount] = useState(0); // Name it however you wish

  const [data1, setData] = useState([]);
  const [data2, setData2] = useState("");

  const funCall = (e) => {
    console.log(e);
    const getCurrent = [...data1, data2];

    setData(getCurrent);
  };
  const callOnchange = (e) => {
    const data3 = e.target.value;

    setData2(data3);
  };
  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        console.log("__home__", response);
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div style={{backgroundColor: "#F3F7FA",width: 800, heigh: 580 ,borderRadius:12}}>
    <div style={{ height:600, overflow:'scroll'}}>
      <div>
        <div style={{}}>
          {data1.map((dataEach, index) => {
            return (
              <Row>
                {/* <Col span={24}>{data1[index]}</Col> */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column"
                    , overflow:'scroll'
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      marginLeft: 640,
                      flexDirection: "row",
                    }}
                  >
                    <div style={{ marginTop: 8 }}>
                      <div
                        style={{
                          backgroundColor: "#1A233C",
                          borderRadius: 4,
                          color: "white",
                          paddingTop: 10,
                          paddingLeft: 5,
                          paddingRight: 5,
                          marginRight: 4,
                          fontSize: 9,
                          height: 33,
                        }}
                      >
                        {data1[index]}
                      </div>
                      <div style={{ fontSize: 8 }}>9h ago</div>
                    </div>

                    <div>
                      <span>
                        <Badge
                          dot
                          color="green"
                          style={{ marginRight: 14 }}
                          offset={[10, 30]}
                        >
                          <Avatar
                            shape="circle"
                            size="large"
                            icon={<UserOutlined />}
                            src="https://joeschmoe.io/api/v1/random"
                          />
                        </Badge>
                      </span>
                    </div>
                  </div>

                  <div style={{ display: "flex" }}>
                    <div>
                      <span>
                        <Badge
                          dot
                          color="green"
                          style={{ marginRight: 14 }}
                          offset={[10, 30]}
                        >
                          <Avatar
                            shape="circle"
                            size="large"
                            icon={<UserOutlined />}
                            src="https://joeschmoe.io/api/v1/random"
                          />
                        </Badge>
                      </span>
                    </div>
                    <div style={{ marginTop: 8, marginLeft: 4 }}>
                      <div
                        style={{
                          backgroundColor: "white",
                          borderRadius: 4,
                          color: "black",
                          paddingTop: 10,
                          paddingLeft: 5,
                          paddingRight: 5,
                          marginRight: 4,
                          fontSize: 9,
                          height: 33,
                          borderWidth: 13,
                          border: 4,
                          boxShadow: "inherit",
                        }}
                      >
                        {data1[index]}
                      </div>
                      <div style={{ fontSize: 8 }}>9h ago</div>
                    </div>
                  </div>
                </div>
              </Row>
            );
          })}
        </div>
      </div>
 
    </div>
     <div style={{paddingBottom:14}}>
     <Input.Group compact>
       <Input
         style={{
           width: "calc(100% - 200px)",
           borderRadius:8,
           marginLeft:34,
           
         }}
         defaultValue="https://ant.design"
         onChange={(e) => callOnchange(e)}
       />
       <Button color="#0E4CFE" onClick={(e) => funCall(e)} shape="round" style={{borderRadius:8}}>
         Submit
       </Button>
     </Input.Group>
   </div>
    </div>
  );
};

export default Home;
