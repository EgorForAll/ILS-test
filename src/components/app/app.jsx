import "../../css/style.css";
import { ConfigProvider } from "antd";
import Main from "../main/main";
import { useDispatch } from "react-redux";
import { routes } from "../../const";
import { fetchRoutes } from "../../store/actions/actions";

function App() {
  const dispatch = useDispatch();
  dispatch(fetchRoutes(routes));
  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#00b96b" } }}>
      <div className="app">
        <Main />
      </div>
    </ConfigProvider>
  );
}

export default App;
