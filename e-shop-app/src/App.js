import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header/Header";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Header />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
