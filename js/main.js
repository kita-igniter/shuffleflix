import { API_KEY, BASE_URL, language } from "./api.js";
import { block } from "./movie_block.js";
const movie_block = document.querySelector(".movies__info");
const button = document.querySelector(".button");

async function getMovie() {
	try {
		let id = Math.round(Math.random() * 1000);
		const response = await fetch(`${BASE_URL}${id}?${API_KEY}&${language}`);
		const data = await response.json();
		block(data);
	} catch (e) {
		console.log(e);
		movie_block.innerHTML = `
			<div class="animate">
				<p>Not found! Try again...</p>
			</div>`;
	}
}
button.addEventListener("click", getMovie);
