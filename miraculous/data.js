export const confirmed = [
	{
		"country": "🇫🇷",
		"episode": "AWK",
		"timestamp": 1659515700,
		"global": true
	},
	{
		"country": "🇩🇪",
		"episode": "AWK",
		"timestamp": 1674755400,
		"global": false
	}
].filter(e => e.timestamp >= Math.floor(Date.now() / 1000)).map(e => {
    e.confirmed = true;
    return e;
});

export const unconfirmed = [
	{
		"country": "🇧🇷",
		"episode": "503",
		"timestamp": 1656973800,
		"global": true
	},
	{
		"country": "🇧🇷",
		"episode": "504",
		"timestamp": 1657578600,
		"global": true
	},
	{
		"country": "🇧🇷",
		"episode": "505",
		"timestamp": 1658183400,
		"global": true
	},
	{
		"country": "🇧🇷",
		"episode": "506",
		"timestamp": 1658788200,
		"global": true
	},
	{
		"country": "🇧🇷",
		"episode": "507",
		"timestamp": 1659997800,
		"global": true
	},
	{
		"country": "🇧🇷",
		"episode": "508",
		"timestamp": 1660602600,
		"global": true
	},
	{
		"country": "🇺🇸",
		"episode": "501",
		"timestamp": 1660971600,
		"global": false
	},
	{
		"country": "🇧🇷",
		"episode": "509",
		"timestamp": 1661207400,
		"global": true
	},
	{
		"country": "🇧🇷",
		"episode": "510",
		"timestamp": 1661812200,
		"global": true
	},
	{
		"country": "🇧🇷",
		"episode": "511",
		"timestamp": 1662417000,
		"global": true
	},
	{
		"country": "🇧🇷",
		"episode": "512",
		"timestamp": 1664231400,
		"global": true
	},
	{
		"country": "🇧🇷",
		"episode": "513",
		"timestamp": 1664836200,
		"global": true
	},
	{
		"country": "🇧🇷",
		"episode": "514",
		"timestamp": 1666650600,
		"global": true
	},
	{
		"country": "🇧🇷",
		"episode": "515",
		"timestamp": 1667255400,
		"global": true
	},
	{
		"country": "🇪🇸",
		"episode": "501",
		"timestamp": 1668241800,
		"global": false
	},
	{
		"country": "🇫🇷",
		"episode": "501",
		"timestamp": 1669019700,
		"global": false
	},
	{
		"country": "🇧🇷",
		"episode": "516",
		"timestamp": 1669678200,
		"global": true
	},
	{
		"country": "🇧🇷",
		"episode": "517",
		"timestamp": 1670283000,
		"global": true
	},
	{
		"country": "🇧🇷",
		"episode": "518",
		"timestamp": 1670887800,
		"global": true
	},
	{
		"country": "🇩🇪",
		"episode": "501",
		"timestamp": 1671213000,
		"global": false
	},
	{
		"country": "🇧🇷",
		"episode": "519",
		"timestamp": 1672702200,
		"global": true
	},
	{
		"country": "🇧🇷",
		"episode": "520",
		"timestamp": 1673307000,
		"global": true
	},
	{
		"country": "🇧🇷",
		"episode": "521",
		"timestamp": 1673911800,
		"global": true
	},
	{
		"country": "🇧🇷",
		"episode": "522",
		"timestamp": 1676331000,
		"global": true
	},
	{
		"country": "🇧🇷",
		"episode": "523",
		"timestamp": 1676935800,
		"global": true
	},
	{
		"country": "🇨🇭",
		"episode": "501",
		"timestamp": 1678518600,
		"global": false
	},
	{
		"country": "🇧🇷",
		"episode": "524",
		"timestamp": 1679351400,
		"global": true
	},
	{
		"country": "🇧🇷",
		"episode": "525",
		"timestamp": 1679956200,
		"global": true
	},
	{
		"country": "🇧🇷",
		"episode": "526",
		"timestamp": 1680561000,
		"global": true
	},
	{
		"country": "🇧🇷",
		"episode": "527",
		"timestamp": 1681770600,
		"global": true
	}
].filter(e => e.timestamp >= Math.floor(Date.now() / 1000)).map(e => {
    e.confirmed = false;
    return e;
});

export const names = {
    "MCN": "Miraculous World: Shanghai",
    "MNY": "Miraculous World: New York",
    "MBR": "Miraculous World: Brazil",
    "MUK": "Miraculous World: London",
    "MAF": "Miraculous World: Africa",
    "MJP": "Miraculous World: Japan",
    "AWK": "Miraculous: Awakening",
	
    "101": "Stormy Weather",
    "102": "The Evillustrator",
    "103": "Lady Wifi",
    "104": "Princess Fragrance",
    "105": "Dark Cupid",
    "106": "Mr. Pigeon",
    "107": "Pixelator",
    "108": "Copycat",
    "109": "The Bubbler",
    "110": "Simon Says",
    "111": "Rogercop",
    "112": "Gamer",
    "113": "Animan",
    "114": "Darkblade",
    "115": "The Pharoah",
    "116": "Timebreaker",
    "117": "Horrificator",
    "118": "The Puppeteer",
    "119": "The Mime",
    "120": "Guitar Villain",
    "121": "Reflekta",
    "122": "Ladybug & Chat Noir",
    "123": "Stoneheart",
    "124": "Antibug",
    "125": "Kung Food",
    "126": "Volpina",

    "201": "The Collector",
    "202": "Prime Queen",
    "203": "Glaciator",
    "204": "Despair Bear",
    "205": "Troublemaker",
    "206": "Gigantitan",
    "207": "Riposte",
    "208": "Befana",
    "209": "Frightningale",
    "210": "Gorizilla",
    "211": "Robustus",
    "212": "Sapotis",
    "213": "The Dark Owl",
    "214": "Syren",
    "215": "Zombizou",
    "216": "Captain Hardrock",
    "217": "Frozer",
    "218": "Style Queen",
    "219": "Queen Wasp",
    "220": "Reverser",
    "221": "Anansi",
    "222": "Malediktator",
    "223": "Sandboy",
    "224": "Catalyst",
    "225": "Mayura",
    "226": "Santa Claws",

    "301": "Chameleon",
    "302": "Animaestro",
    "303": "Bakerix",
    "304": "Backwarder",
    "305": "Reflekdoll",
    "306": "Weredad",
    "307": "Silencer",
    "308": "Oni-Chan",
    "309": "Miraculer",
    "310": "Oblivio",
    "311": "Desperada",
    "312": "Chrismaster",
    "313": "Startrain",
    "314": "Kwamibuster",
    "315": "Feast",
    "316": "Gamer 2.0",
    "317": "Stormy Weather 2",
    "318": "Ikari Gozen",
    "319": "Timetagger",
    "320": "Party Crasher",
    "321": "The Puppeteer 2",
    "322": "Chat Blanc",
    "323": "Félix",
    "324": "Ladybug",
    "325": "Heart Hunter",
    "326": "Miracle Queen",

    "401": "Truth",
    "402": "Lies",
    "403": "Gang of Secrets",
    "404": "Mr. Pigeon 72",
    "405": "Psychomedian",
    "406": "Furious Fu",
    "407": "Sole Crusher",
    "408": "Queen Banana",
    "409": "Gabriel Agreste",
    "410": "Mega Leech",
    "411": "Guiltrip",
    "412": "Crocoduel",
    "413": "Optigami",
    "414": "Sentibubbler",
    "415": "Glaciator 2",
    "416": "Hack-San",
    "417": "Rocketear",
    "418": "Wishmaker",
    "419": "Simpleman",
    "420": "Qilin",
    "421": "Dearest Family",
    "422": "Ephemeral",
    "423": "Kuro Neko",
    "424": "Penalteam",
    "425": "Risk",
    "426": "Strike Back",
    "4??": "???",

    "501": "Evolution",
    "502": "Multiplication",
    "503": "Destruction",
    "504": "Jubilation",
    "505": "Illusion",
    "506": "Determination",
    "507": "Passion",
    "508": "Reunion",
    "509": "Exaltation",
    "510": "Transmission",
    "511": "Deflagration",
    "512": "Perfection",
    "513": "Migration",
    "514": "Derision",
    "515": "Intuition",
    "516": "Protection",
    "517": "Adoration",
    "518": "Emotion",
    "519": "Pretension",
    "520": "Revelation",
    "521": "Confrontation",
    "522": "Collusion",
    "523": "Revolution",
    "524": "Representation",
    "525": "Conformation",
    "526": "Re-creation",
    "527": "Action",
    "5??": "???"
}
