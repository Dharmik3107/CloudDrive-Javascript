import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home/Home";
import Navigation from "./routes/Navigation/Navigation";
import Login from "./routes/Login/Login";
import Register from "./routes/Register/Register";
import Shared from "./routes/Shared/Shared";
import Starred from "./routes/Starred/Starred";
import Trash from "./routes/Trash/Trash";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path="/shared" element={<Shared />} />
				<Route path="/starred" element={<Starred />} />
				<Route path="/trash" element={<Trash />} />
			</Route>
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
		</Routes>
	);
}

export default App;
