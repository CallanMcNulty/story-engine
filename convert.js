const sharp = require('sharp');
const converter = require('pdf-to-png-converter');
const fs = require('fs');
const decks = require('./decks.js').decks;

const cardSize = 468;
const leftMargin = 144;
const topMargin = 90;
(async () => {
	let cachedDeck = {
		file: null,
		data: null,
	};
	for(let deck of decks) {
		console.log(`Exporting cards for ${deck.name}`);
		const pageCount = deck.types[deck.types.length-1].endPage;
		const typeEnds = deck.types.map(s => s.endPage);
		const pages = [];
		for(let i=1; i<pageCount; i++) {
			if(i % 2 == 1 || typeEnds.includes(i+1)) {
				pages.push(i);
			}
		}
		console.log(`...reading pdf`);
		let pdfFile = `raw/${deck.rawDirectory}/${deck.pdfFile}`;
		let pngPages = null;
		if(cachedDeck.file == pdfFile) {
			pngPages = cachedDeck.data;
		} else {
			pngPages = await converter.pdfToPng(pdfFile, { pagesToProcess:pages, viewportScale: 2.0 });
			cachedDeck.file = pdfFile;
			cachedDeck.data = pngPages;
		}
		console.log(`...creating cards`);
		let deckDir = `./cards/${deck.id}-${deck.deckType}`;
		if(!fs.existsSync(deckDir)) {
			fs.mkdirSync(deckDir);
		}
		let typeIndex = -1;
		let type = null;
		let cardNumber = 1;
		let dir = deckDir;
		for(let page of pngPages) {
			if(type == null) {
				typeIndex++;
				type = deck.types[typeIndex];
				dir = `${deckDir}/${type.cardType}`;
				if(!fs.existsSync(dir)) {
					fs.mkdirSync(dir);
				}
			}
			let rowCount = 3;
			let colCount = 2;
			if(page.pageNumber % 2 == 0) {
				type = null;
				rowCount = 1;
				colCount = 1;
				cardNumber = 0;
			}
			for(let row=0; row<rowCount; row++) {
				for(let col=0; col<colCount; col++) {
					if(!type?.startCard || cardNumber == 0 || (cardNumber >= type.startCard && cardNumber < type.endCard)) {
						sharp(page.content)
							.extract({
								width: cardSize, height: cardSize,
								left: leftMargin + cardSize*col,
								top: topMargin + cardSize*row,
							})
							.resize({ width: 300 })
							.toFile(`${dir}/${cardNumber - ((type?.startCard ?? 1) - 1)}.png`)
						;
					}
					cardNumber++;
				}
			}
		}
	}
	console.log('Done');
})();
