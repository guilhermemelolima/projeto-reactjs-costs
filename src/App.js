// IMPORTS
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// PAGINAS
import Home from "./components/pages/Home";
import Empresa from "./components/pages/Empresa";
import Contato from "./components/pages/Contato";
import Projects from "./components/pages/Projects";
import Project from "./components/pages/Project";

// LAYOUT
import Container from "./components/layout/Container";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import NewProject from "./components/pages/NewProject";

/*  PALETA
    #222831
    #393E46
    #00ADB5
    #31363F
    #76ABAE
    #EEEEEE
*/

function App() {
	return (
		<Router>
			<NavBar />

			<Routes>
				<Route
					path="/"
					element={
						<Container customClass="min_height">
							<Home />
						</Container>
					}
				/>
				<Route
					path="/empresa"
					element={
						<Container customClass="min_height">
							<Empresa />
						</Container>
					}
				/>
				<Route
					path="/contato"
					element={
						<Container customClass="min_height">
							<Contato />
						</Container>
					}
				/>
				<Route
					path="/project/:id"
					element={
						<Container customClass="min_height">
							<Project />
						</Container>
					}
				/>
				<Route
					path="/projects"
					element={
						<Container customClass="min_height">
							<Projects />
						</Container>
					}
				/>
				<Route
					path="/new-project"
					element={
						<Container customClass="min_height">
							<NewProject />
						</Container>
					}
				/>
			</Routes>

			<Footer />
		</Router>
	);
}

export default App;
