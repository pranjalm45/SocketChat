import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainForm from './component/MainForm';
import ChatRoom from './component/ChatRoom';

function App() {
  return (
    <div className="container-fluid bg-light text-dark d-flex align-items-center justify-content-center" style={{height: "100vh"}}>
			<Router>
				<Routes>
					<Route index element={<MainForm/>}/>
					<Route path="/chat/:roomName" element={<ChatRoom/>}/>
					<Route path="*" element={<h1>No match</h1>} />
				</Routes>
			</Router>
		</div>
  );
}

export default App;
