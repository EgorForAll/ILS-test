import "../../css/style.scss";
import { ConfigProvider } from "antd";
import Main from "../main/main";
import { useDispatch } from "react-redux";
import { routes } from "../../const";
import { setRoutes } from "../../store/actions/actions";

function App() {
  const dispatch = useDispatch();
  dispatch(setRoutes(routes));
  return (
    <ConfigProvider>
      <div className="app">
        <Main />
      </div>
    </ConfigProvider>
  );
}

export default App;
