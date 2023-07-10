const DEMO_ONLY = true;

const decks = (() => {
	const expansionTypes = [
		{
			cardType: 'agent',
			endPage: 5,
		},
		{
			cardType: 'engine',
			endPage: 9,
		},
		{
			cardType: 'anchor',
			endPage: 13,
		},
		{
			cardType: 'conflict',
			endPage: 17,
		},
		{
			cardType: 'aspect',
			endPage: 21,
		},
	];
	function getFounderTypes(types) {
		return [
			{
				cardType: 'agent',
				endPage: 11,
			},
			{
				cardType: 'engine',
				endPage: 15,
			},
			{
				cardType: 'anchor',
				endPage: 25,
			},
			{
				cardType: 'conflict',
				endPage: 29,
			},
			{
				cardType: 'aspect',
				endPage: 37,
			},
		].map(t => ({ ...(types[t.cardType] ?? { startCard: 0, endCard: 0}), ...t }));
	}
	function getDreamerTypes(start, end) {
		return [
			{
				cardType: 'agent',
				endPage: 9,
			},
			{
				cardType: 'engine',
				endPage: 17,
			},
			{
				cardType: 'anchor',
				endPage: 25,
			},
			{
				cardType: 'conflict',
				endPage: 33,
			},
			{
				cardType: 'aspect',
				endPage: 41,
			},
		].map(t => ({ startCard:start, endCard:end, ...t }));
	}
	let data = [];
	if(DEMO_ONLY) {
		data = [
			{
				id: 'demo',
				deckType: 'core',
				rawDirectory: 'The Story Engine Deck - Demo Version',
				pdfFile: 'The Story Engine Deck - Cards.pdf',
				name: 'The Story Engine Deck - Demo',
				types: expansionTypes,
			},
		];
	} else {
		data = [
			{
				id: 'story-engine',
				deckType: 'core',
				rawDirectory: 'Story Engine Deck',
				pdfFile: 'Story Engine Main Deck_HQ Cards.pdf',
				name: 'The Story Engine Deck',
				types: [
					{
						cardType: 'agent',
						endPage: 13,
					},
					{
						cardType: 'engine',
						endPage: 25,
					},
					{
						cardType: 'anchor',
						endPage: 37,
					},
					{
						cardType: 'conflict',
						endPage: 49,
					},
					{
						cardType: 'aspect',
						endPage: 61,
					},
				],
			},
			{
				id: 'fantasy',
				deckType: 'expansion',
				rawDirectory: 'Story Engine Deck_Starter Expansion Set',
				pdfFile: 'Starter Story Engine Expansion_Fantasy_HQ Cards.pdf',
				name: 'Written in Dragonfire: Fantasy Expansion',
				types: expansionTypes,
			},
			{
				id: 'horror',
				deckType: 'expansion',
				rawDirectory: 'Story Engine Deck_Starter Expansion Set',
				pdfFile: 'Starter Story Engine Expansion_Horror_HQ Cards.pdf',
				name: 'Written in Ash & Bone: Horror Expansion',
				types: expansionTypes,
			},
			{
				id: 'sci-fi',
				deckType: 'expansion',
				rawDirectory: 'Story Engine Deck_Starter Expansion Set',
				pdfFile: 'Starter Story Engine Expansion_Science Fiction_HQ Cards.pdf',
				name: 'Written in the Light of Strange Worlds: Science Fiction Expansion',
				types: expansionTypes,
			},
			{
				id: 'backstory',
				deckType: 'expansion',
				rawDirectory: 'Story Engine Deck_Curio Expansion Set',
				pdfFile: 'Curio Story Engine Expansion_Backstories_HQ Cards.pdf',
				name: 'Humble Roots & Epic Origins: Backstory Expansion',
				types: [
					{
						cardType: 'engine',
						endPage: 11,
					},
					{
						cardType: 'conflict',
						endPage: 21,
					},
				],
			},
			{
				id: 'mystery',
				deckType: 'expansion',
				rawDirectory: 'Story Engine Deck_Curio Expansion Set',
				pdfFile: 'Curio Story Engine Expansion_Mystery_HQ Cards.pdf',
				name: 'Written in Blood & Alibi: Mystery Expansion',
				types: expansionTypes,
			},
			{
				id: 'items',
				deckType: 'expansion',
				rawDirectory: 'Story Engine Deck_Curio Expansion Set',
				pdfFile: 'Curio Story Engine Expansion_Unique Items_HQ Cards.pdf',
				name: 'Enchanted Items & Cursed Curios: Unique Items Expansion',
				types: [
					{
						cardType: 'anchor',
						endPage: 5,
					},
					{
						cardType: 'aspect',
						endPage: 21,
					},
				],
			},
			{
				id: 'eldritch-horror',
				deckType: 'booster',
				rawDirectory: 'Story Engine Deck_Founder Booster Set',
				pdfFile: 'Founder Story Engine Boosters_HQ Cards.pdf',
				name: 'Dark Crafts & Ancient Horrors: Eldritch Horror Booster',
				types: getFounderTypes({
					agent: {
						startCard: 1,
						endCard: 6,
					},
					engine: {
						startCard: 1,
						endCard: 3,
					},
					anchor: {
						startCard: 1,
						endCard: 6,
					},
					conflict: {
						startCard: 1,
						endCard: 3,
					},
					aspect: {
						startCard: 1,
						endCard: 5,
					},
				}),
			},
			{
				id: 'steampunk',
				deckType: 'booster',
				rawDirectory: 'Story Engine Deck_Founder Booster Set',
				pdfFile: 'Founder Story Engine Boosters_HQ Cards.pdf',
				name: 'Cog Hearts & Steam Souls: Steampunk Booster',
				types: getFounderTypes({
					agent: {
						startCard: 6,
						endCard: 11,
					},
					engine: {
						startCard: 3,
						endCard: 5,
					},
					anchor: {
						startCard: 6,
						endCard: 11,
					},
					conflict: {
						startCard: 3,
						endCard: 5,
					},
					aspect: {
						startCard: 5,
						endCard: 9,
					},
				}),
			},
			{
				id: 'cyberpunk',
				deckType: 'booster',
				rawDirectory: 'Story Engine Deck_Founder Booster Set',
				pdfFile: 'Founder Story Engine Boosters_HQ Cards.pdf',
				name: 'Circuits & Cybernetics: Cyberpunk Booster',
				types: getFounderTypes({
					agent: {
						startCard: 11,
						endCard: 16,
					},
					engine: {
						startCard: 5,
						endCard: 7,
					},
					anchor: {
						startCard: 11,
						endCard: 16,
					},
					conflict: {
						startCard: 5,
						endCard: 7,
					},
					aspect: {
						startCard: 9,
						endCard: 13,
					},
				}),
			},
			{
				id: 'post-apocalyptic',
				deckType: 'booster',
				rawDirectory: 'Story Engine Deck_Founder Booster Set',
				pdfFile: 'Founder Story Engine Boosters_HQ Cards.pdf',
				name: 'Wastelands & Wanderers: Post-Apocalyptic Booster',
				types: getFounderTypes({
					agent: {
						startCard: 16,
						endCard: 21,
					},
					engine: {
						startCard: 7,
						endCard: 9,
					},
					anchor: {
						startCard: 16,
						endCard: 21,
					},
					conflict: {
						startCard: 7,
						endCard: 9,
					},
					aspect: {
						startCard: 13,
						endCard: 17,
					},
				}),
			},
			{
				id: 'mythology',
				deckType: 'booster',
				rawDirectory: 'Story Engine Deck_Founder Booster Set',
				pdfFile: 'Founder Story Engine Boosters_HQ Cards.pdf',
				name: 'Mythwalkers & Eternals: Mythology Booster',
				types: getFounderTypes({
					agent: {
						startCard: 21,
						endCard: 26,
					},
					engine: {
						startCard: 9,
						endCard: 11,
					},
					anchor: {
						startCard: 21,
						endCard: 26,
					},
					conflict: {
						startCard: 9,
						endCard: 11,
					},
					aspect: {
						startCard: 17,
						endCard: 21,
					},
				}),
			},
			{
				id: 'dystopian',
				deckType: 'booster',
				rawDirectory: 'Story Engine Deck_Founder Booster Set',
				pdfFile: 'Founder Story Engine Boosters_HQ Cards.pdf',
				name: 'Jackboots & Chainlink: Dystopian Booster',
				types: getFounderTypes({
					agent: {
						startCard: 25,
						endCard: 31,
					},
					engine: {
						startCard: 11,
						endCard: 13,
					},
					anchor: {
						startCard: 26,
						endCard: 31,
					},
					conflict: {
						startCard: 11,
						endCard: 13,
					},
					aspect: {
						startCard: 21,
						endCard: 25,
					},
				}),
			},
			{
				id: 'gothic-horror',
				deckType: 'booster',
				rawDirectory: 'Story Engine Deck_Dreamer Booster Set',
				pdfFile: 'Dreamer Story Engine Boosters_HQ Cards.pdf',
				name: 'Empty Graves & Haunted Halls: Gothic Booster',
				types: getDreamerTypes(1, 5),
			},
			{
				id: 'superhero',
				deckType: 'booster',
				rawDirectory: 'Story Engine Deck_Dreamer Booster Set',
				pdfFile: 'Dreamer Story Engine Boosters_HQ Cards.pdf',
				name: 'Superpowers & Sidekicks: Superhero Booster',
				types: getDreamerTypes(5, 9),
			},
			{
				id: 'western',
				deckType: 'booster',
				rawDirectory: 'Story Engine Deck_Dreamer Booster Set',
				pdfFile: 'Dreamer Story Engine Boosters_HQ Cards.pdf',
				name: 'Outlaws & Gunslingers: Western Booster',
				types: getDreamerTypes(9, 13),
			},
			{
				id: 'fairy-tales',
				deckType: 'booster',
				rawDirectory: 'Story Engine Deck_Dreamer Booster Set',
				pdfFile: 'Dreamer Story Engine Boosters_HQ Cards.pdf',
				name: 'Fairy Trails & Grim Tales: Fairy Tale Booster',
				types: getDreamerTypes(13, 17),
			},
			{
				id: 'pulp',
				deckType: 'booster',
				rawDirectory: 'Story Engine Deck_Dreamer Booster Set',
				pdfFile: 'Dreamer Story Engine Boosters_HQ Cards.pdf',
				name: 'Pulp Tales & Penny Dreadfuls: Pulp Fiction Booster',
				types: getDreamerTypes(17, 21)
			},
			{
				id: 'military',
				deckType: 'booster',
				rawDirectory: 'Story Engine Deck_Dreamer Booster Set',
				pdfFile: 'Dreamer Story Engine Boosters_HQ Cards.pdf',
				name: 'Dropships & War Hawks: Military Sci Fi Booster',
				types: getDreamerTypes(21, 25),
			},
		];
	}
	data.forEach(deck => {
		for(let i in deck.types) {
			let setIndex = parseInt(i);
			let set = deck.types[setIndex];
			if(set.startCard) {
				set.count = set.endCard - set.startCard;
			} else {
				let startPage = deck.types[setIndex-1]?.endPage ?? 1;
				let pageCount = (set.endPage - startPage) / 2;
				set.count = pageCount * 6;
			}
		}
	});
	return data;
})();
module.exports.decks = decks;
