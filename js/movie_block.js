import { IMG_URL } from "./api.js";
const movie_block = document.querySelector(".movies__info");
export const block = (data) => {
	if (data.status_code || data == null) {
		throw "Not found";
	} else {
		movie_block.innerHTML = `
		<div class="animate">
			<div class="info__img">
			<img src="${IMG_URL}${data.poster_path}" alt="movie image" />
			</div>
			<div class="info__text">
			<h3>${data.title}</h3>
			<p>${data.overview}</p>
			</div>
		</div>`;
	}
};
