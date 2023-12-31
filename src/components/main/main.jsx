import React, { useState } from "react";
import Map from "../map/map";
import { FlagOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import { toggleRoutes } from "../../store/actions/actions";
import { useDispatch, useSelector } from "react-redux";

const { Content, Sider } = Layout;

const Main = () => {
  const { routes, currentPoint } = useSelector((state) => state);
  const dispatch = useDispatch();
  const toTogglePoint = (point) => dispatch(toggleRoutes(point));
  const [collapsed, setCollapsed] = useState(false);

  const isActive = (point) => {
    const wayNumber = Number(point.name.slice(8));
    if (wayNumber === currentPoint) {
      return "green";
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={["0"]} mode="inline">
          {routes.map((item) => (
            <Menu.Item
              key={item.id}
              onClick={() => toTogglePoint(item.id)}
              style={{ backgroundColor: isActive(item) }}
            >
              <FlagOutlined />
              <span>{item.name}</span>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>{routes[currentPoint - 1].name}</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              width: "100%",
              height: "700px",
              position: "relative",
            }}
          >
            <Map route={routes[currentPoint - 1]} />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Main;
