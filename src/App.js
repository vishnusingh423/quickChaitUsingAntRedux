import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  ProfileOutlined,
  UsergroupDeleteOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { Card, Menu, Row, Col, Button, Avatar, Image,Switch } from "antd";
import {} from "@ant-design/icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

// import AuthVerify from "./common/AuthVerify";
import EventBus from "./common/EventBus";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    Menu,
    label,
    type,
  };
}
const items = [
  getItem("Navigation Two", "sub2", "", [
    getItem(
      "Option 5",
      "5",
      <Avatar
        src={
          <Image
            src="https://joeschmoe.io/api/v1/random"
            style={{ width: 32 }}
          />
        }
      />
    ),
    getItem(
      "Option 6",
      "6",
      <Avatar
        src={
          <Image
            src="https://joeschmoe.io/api/v1/random"
            style={{ width: 32 }}
          />
        }
      />
    ),
    getItem(
      "Option 7",
      "7",
      <Avatar
        src={
          <Image
            src="https://joeschmoe.io/api/v1/random"
            style={{ width: 32 }}
          />
        }
      />
    ),
    getItem(
      "Option 8",
      "8",
      <Avatar
        src={
          <Image
            src="https://joeschmoe.io/api/v1/random"
            style={{ width: 32 }}
          />
        }
      />
    ),
    getItem(
      "Option 9",
      "9",
      <Avatar
        src={
          <Image
            src="https://joeschmoe.io/api/v1/random"
            style={{ width: 32 }}
          />
        }
      />
    ),
    getItem(
      "Option 10",
      "10",
      <Avatar
        src={
          <Image
            src="https://joeschmoe.io/api/v1/random"
            style={{ width: 32 }}
          />
        }
      />
    ),
  ]),
  getItem("Navigation Three", "sub4", <SettingOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),
];
const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  let location = useLocation();

  useEffect(() => {
    if (["/login", "/register"].includes(location.pathname)) {
      dispatch(clearMessage()); // clear message when changing location
    }
  }, [dispatch, location]);

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    } else {
      setShowModeratorBoard(false);
      setShowAdminBoard(false);
    }

    // EventBus.on("logout", () => {
    //   logOut();
    // });

    // return () => {
    //   EventBus.remove("logout");
    // };
  }, [currentUser, logOut]);
  const onClick = (e) => {
    console.log("click ", e);
  };
  return (
    <div style={{ display: "flex" ,marginLeft:38}}>
      <div>
        <div style={{marginTop:10}}>
        <span style={{marginLeft:12,marginBottom:12}}>

       <Avatar size={"large"} src="https://thumbs.dreamstime.com/b/blue-facebook-messenger-app-icon-flat-design-blue-facebook-messenger-app-icon-136584549.jpg"></Avatar>
        </span >

        <span style={{fontFamily:"sans-serif" ,fontWeight:10, marginLeft:4,paddingTop:3}}>QuickChait</span>
        </div>

        <div>
          <div
            style={{
              backgroundColor: "#F3F7FA",
              height: 200,
              display: "flex",
              flexDirection: "column",
              marginTop: 15,
              border: 12,
              borderBlockColor: "red",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 14,
              marginLeft: 15,
            }}
          >
            <div>
              <Avatar
                size={74}
                style={{ color: "#3D5874", backgroundColor: "#B1C9FF" }}
                src="https://joeschmoe.io/api/v1/random"

              >
                HB
              </Avatar>
            </div>
            <div>
              <span>
                <MailOutlined />
              </span>
              <span>vms@gmail.com</span>
            </div>
            <div>
              <span>
                <UsergroupDeleteOutlined />
              </span>
              <span>Andry</span>
            </div>
            <div style={{ fontSize: "22", fontWeight: 2 }}>
            <Switch defaultChecked style={{backgroundColor:'#0E4CFE'}} size={"small"} />Active
            </div>
          </div>
        </div>
        <Menu
          mode="inline"
          style={{ backgroundColor: "white", borderRight: 0 }}
        >
          <Menu.SubMenu title="Active Conversation" style={{ margin: 4 }}>
            <Menu.Item style={{ backgroundColor: "white", borderRadius: 4 }}>
              John
            </Menu.Item>
            <Menu.Item style={{}}>Wuld</Menu.Item>
            <Menu.Item style={{}}>Trets</Menu.Item>
          </Menu.SubMenu>

          <Menu.SubMenu title="Archive Conversation">
            <Menu.Item style={{ backgroundColor: "#F3F7FA", borderRadius: 4 }}>
              item 3
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </div>

      {/* <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          bezKoder
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>

          {showModeratorBoard && (
            <li className="nav-item">
              <Link to={"/mod"} className="nav-link">
                Moderator Board
              </Link>
            </li>
          )}

          {showAdminBoard && (
            <li className="nav-item">
              <Link to={"/admin"} className="nav-link">
                Admin Board
              </Link>
            </li>
          )}

          {currentUser && (
            <li className="nav-item">
              <Link to={"/user"} className="nav-link">
                User
              </Link>
            </li>
          )}
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </nav> */}

      <div style={{ marginLeft: 19, marginTop: 14 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/user" element={<BoardUser />} />
          <Route path="/mod" element={<BoardModerator />} />
          <Route path="/admin" element={<BoardAdmin />} />
        </Routes>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: 190,
          marginLeft: 4,
        }}
      >
        <div
          style={{
            backgroundColor: "#F3F7FA",
            height: 200,
            display: "flex",
            flexDirection: "column",
            marginTop: 15,
            border: 12,
            borderBlockColor: "red",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 14,
            marginLeft: 15,
          }}
        >
          <div>
            <Avatar
              size={74}
              style={{ color: "#3D5874", backgroundColor: "#B1C9FF" }}
            >
              HB
            </Avatar>
          </div>
          <div>
            <span>
              <MailOutlined />
            </span>
            <span>vms@gmail.com</span>
          </div>
          <div>
            <span>
              <UsergroupDeleteOutlined />
            </span>
            <span>Andry</span>
          </div>
          <div style={{ fontSize: "22", fontWeight: 2 }}>
            <Button
              color="#0E4CFE"
              style={{ borderRadius: 8 }}
              icon={<ProfileOutlined />}
            >
              {" "}
              Archive
            </Button>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#F3F7FA",
            height: 230,
            display: "flex",
            flexDirection: "column",
            marginLeft: 15,

            marginTop: 15,
            border: 12,
            borderBlockColor: "red",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 14,
          }}
        ></div>

        <div
          style={{
            backgroundColor: "#F3F7FA",
            height: 180,
            marginLeft: 15,
            display: "flex",
            flexDirection: "column",
            marginTop: 15,
            border: 12,
            borderBlockColor: "red",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 14,
          }}
        ></div>
      </div>

      {/* <AuthVerify logOut={logOut}/> */}
    </div>
  );
};

export default App;
