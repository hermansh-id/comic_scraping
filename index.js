const axios = require('axios');
const cheerio = require('cheerio');

const getComicDesc = async () => {
	try {
		const { data } = await axios.get(
			'https://komikindo.id/komik/isekai-walking/', { 
        headers: { "Accept-Encoding": "gzip,deflate,compress" } 
    }
		);
		const $ = cheerio.load(data);
		const postTitles = {};

    console.log($('h1.entry-title').text())
	const genre = [];
    $('div.infox > div.spe > span').each((_idx, el) => {
			var postTitle = $(el).text()
			key_post = postTitle.split(':')[0].trim()
			value = postTitle.split(':')[1].trim()
			postTitles[key_post] = value
		});


		$('div.genre-info > a').each((_idx, el) => {
			var title = $(el).text()
			genre.push(title)
		});
		const list_manga = []
		$('span.lchx').each((_idx, el) => {
			var title = $(el).text()
			list_manga.push(title)
		});
		console.log(list_manga)
		console.log(postTitles)
		console.log($('div.entry-content-single').text())
	} catch (error) {
		throw error;
	}
};

const getImageComic = async () => {
	try {
		const { data } = await axios.get(
			'https://komikindo.id/tomb-raider-king-chapter-378/', { 
        headers: { "Accept-Encoding": "gzip,deflate,compress" } 
    }
		);
		const $ = cheerio.load(data);
		const postTitles = [];

		$('div#chimg-auh > img').each((_idx, el) => {
			const postTitle = $(el).attr('src')
			postTitles.push(postTitle)
		});

		return postTitles;
	} catch (error) {
		throw error;
	}
};

getComicDesc();