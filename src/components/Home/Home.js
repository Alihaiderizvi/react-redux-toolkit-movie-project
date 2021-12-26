import React, { useState, useEffect } from "react";
import "./Home.scss";
import MovieListing from "../MovieListing/MovieListing";
import MovieApi from "../../common/apis/MovieApi";
import { APIKEY } from "../../common/apis/MovieKey";
const Home = () => {
	const fetchMovies = async () => {
		const movieText = "Harry";
		const response = await MovieApi.get(
			`?apiKey=${APIKEY}&s=${movieText}&type=movie`
		);
		console.log(response.data);
	};
	useEffect(() => {
		fetchMovies();
	}, []);

	return (
		<div>
			<div className='banner-img'></div>
			<MovieListing />
		</div>
	);
};

export default Home;
