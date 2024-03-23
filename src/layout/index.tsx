import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const Layout = () => {
	return (
		<div className="w-full h-full relative px-20">
			<Navbar />
			<div className="py-10 w-full h-full overflow-y-auto">
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;
