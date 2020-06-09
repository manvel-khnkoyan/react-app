import BackendApi from "./backend.api";
import BackendMock from "./backend.mock";

export default process.env.REACT_APP_MODE === "test" ? BackendMock : BackendApi;
