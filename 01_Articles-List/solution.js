function solve() {
	let createTitleElement = document.getElementById('createTitle');
	let createdContentElement = document.getElementById('createContent');

	let createtitleValue = createTitleElement.value;
	let createcontentValue = createdContentElement.value;

	if (createtitleValue && createcontentValue) {
		let titleElement = document.createElement('h3');
		titleElement.textContent = createtitleValue;

		let contentElement = document.createElement('p');
		contentElement.textContent = createcontentValue;

		let articleElement = document.createElement('article');
		articleElement.appendChild(titleElement);
		articleElement.appendChild(contentElement);

		let articlesElement = document.getElementById('articles');
		articlesElement.appendChild(articleElement)

		createTitleElement.value = "";
		createdContentElement.value = "";
	}

}