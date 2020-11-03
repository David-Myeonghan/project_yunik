import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Classinfo from "./Components/Classinfo";
import Lessons from "./Components/Lessons";

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/classinfo" component={Classinfo} />
					<Route exact path="/private-lessons" component={Lessons} />
					<Route exact path="/covid-19-policies"></Route>
					<Route exact path="/faqs"></Route>
					<Route exact path="/contact"></Route>
				</Switch>
				{/* {footer} */}
			</Router>
		</div>
	);
}

export default App;
