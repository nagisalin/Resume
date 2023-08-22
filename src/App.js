import Header from 'components/Header/Header';
import { Outlet } from "react-router-dom";

const App = (props) => {
	const { HeaderItems } = props;

	return (
		<div className="App">
			<Header HeaderItems={HeaderItems} />
			<div className='Container' style={{width: '100vw', height: '100vh', paddingTop: '60px'}}>
				<Outlet />
			</div>
		</div>
	);
}

export default App;