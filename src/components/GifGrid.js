import React, { useState, useEffect } from "react";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
	const [images, setImages] = useState([]);

	useEffect(() => {
		getGifs();
	}, []);

	const getGifs = async () => {
		const apiKey = "DiwjgpmnTacHgHTFdpK49FofZluO2IMG";
		const url = `https://api.giphy.com/v1/gifs/search?q=dragon+ball&limit=20&api_key=${apiKey}`;
		const response = await fetch(url);
		const { data } = await response.json();
		const gifs = data.map((img) => {
			return {
				id: img.id,
				title: img.title,
				url: img.images?.downsized_medium.url,
			};
		});

		setImages(gifs);
	};

	return (
		<div>
			<h3>{category}</h3>
			{images.map((img) => (
				<GifGridItem key={img.id} {...img} />
			))}
		</div>
	);
};
