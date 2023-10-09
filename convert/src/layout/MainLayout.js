import Header from "./Header";
import React, {useEffect} from "react";
import {Outlet} from "react-router-dom";

function MainLayout(){
	useEffect(() => {
		console.log('ádalk')
		const handleScroll = (event) => {
			console.log(event)
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return <>
		<Header/>
		<Outlet />
	</>
}
export default MainLayout;