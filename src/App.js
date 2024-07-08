import { RouterProvider } from "react-router-dom";
import "./Reset.css";
import "./App.css";
import routes from "./routes/route";

function App() {
    return <RouterProvider router={routes} />;
}

export default App;
