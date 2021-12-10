export const confirmed = [
    {
        "country": "🇩🇪",
        "episode": "416",
        "timestamp": 1639763400,
        "global": false
    },
    {
        "country": "🇩🇪",
        "episode": "419",
        "timestamp": 1639849800,
        "global": false
    },
    {
        "country": "🇩🇪",
        "episode": "421",
        "timestamp": 1639936200,
        "global": false
    }
].filter(e => e.timestamp >= Math.floor(Date.now() / 1000)).map(e => {
    e.confirmed = true;
    return e;
});

export const unconfirmed = [
    {
        "country": "🇧🇷",
        "episode": "423",
        "timestamp": 1642545000,
        "global": true
    },
    {
        "country": "🇫🇷",
        "episode": "423",
        "timestamp": 1642926900,
        "global": false
    },
    {
        "country": "🇧🇷",
        "episode": "425",
        "timestamp": 1643149800,
        "global": true
    },
    {
        "country": "🇫🇷",
        "episode": "425",
        "timestamp": 1643531700,
        "global": false
    },
    {
        "country": "🇩🇪",
        "episode": "415",
        "timestamp": 1643651400,
        "global": false
    },
    {
        "country": "🇧🇷",
        "episode": "426",
        "timestamp": 1643754600,
        "global": true
    },
    {
        "country": "🇩🇪",
        "episode": "409",
        "timestamp": 1643824200,
        "global": false
    },
    {
        "country": "🇺🇸",
        "episode": "423",
        "timestamp": 1644039000,
        "global": false
    },
    {
        "country": "🇫🇷",
        "episode": "426",
        "timestamp": 1644136500,
        "global": false
    },
    {
        "country": "🇧🇷",
        "episode": "405",
        "timestamp": 1644359400,
        "global": true
    },
    {
        "country": "🇺🇸",
        "episode": "425",
        "timestamp": 1644643800,
        "global": false
    },
    {
        "country": "🇫🇷",
        "episode": "405",
        "timestamp": 1644741300,
        "global": false
    },
    {
        "country": "🇧🇷",
        "episode": "424",
        "timestamp": 1644964200,
        "global": true
    },
    {
        "country": "🇺🇸",
        "episode": "426",
        "timestamp": 1645248600,
        "global": false
    },
    {
        "country": "🇫🇷",
        "episode": "424",
        "timestamp": 1645346100,
        "global": false
    },
    {
        "country": "🇧🇷",
        "episode": "420",
        "timestamp": 1645569000,
        "global": true
    },
    {
        "country": "🇫🇷",
        "episode": "420",
        "timestamp": 1645950900,
        "global": false
    },
    {
        "country": "🇺🇸",
        "episode": "405",
        "timestamp": 1647063000,
        "global": false
    },
    {
        "country": "🇺🇸",
        "episode": "424",
        "timestamp": 1647667800,
        "global": false
    },
    {
        "country": "🇺🇸",
        "episode": "420",
        "timestamp": 1648272600,
        "global": false
    },
    {
        "country": "🇩🇪",
        "episode": "422",
        "timestamp": 1648489800,
        "global": false
    },
    {
        "country": "🇩🇪",
        "episode": "423",
        "timestamp": 1648576200,
        "global": false
    },
    {
        "country": "🇩🇪",
        "episode": "425",
        "timestamp": 1648662600,
        "global": false
    },
    {
        "country": "🇩🇪",
        "episode": "426",
        "timestamp": 1648749000,
        "global": false
    },
    {
        "country": "🇩🇪",
        "episode": "405",
        "timestamp": 1648835400,
        "global": false
    },
    {
        "country": "🇩🇪",
        "episode": "424",
        "timestamp": 1648921800,
        "global": false
    },
    {
        "country": "🇩🇪",
        "episode": "420",
        "timestamp": 1649008200,
        "global": false
    },
    {
        "country": "🇧🇷",
        "episode": "5??",
        "timestamp": 1650407400,
        "global": true
    },
    {
        "country": "🇨🇭",
        "episode": "5??",
        "timestamp": 1651907400,
        "global": false
    },
    {
        "country": "🇪🇸",
        "episode": "5??",
        "timestamp": 1655541000,
        "global": false
    },
    {
        "country": "🇺🇸",
        "episode": "5??",
        "timestamp": 1655703000,
        "global": false
    },
    {
        "country": "🇫🇷",
        "episode": "5??",
        "timestamp": 1656232500,
        "global": false
    },
    {
        "country": "🇩🇪",
        "episode": "5??",
        "timestamp": 1656352200,
        "global": false
    },
    {
        "country": "🇺🇸",
        "episode": "5??",
        "timestamp": 1656912600,
        "global": false
    },
    {
        "country": "🇧🇷",
        "episode": "5??",
        "timestamp": 1657665000,
        "global": true
    },
    {
        "country": "🇪🇸",
        "episode": "5??",
        "timestamp": 1668241800,
        "global": false
    },
    {
        "country": "🇫🇷",
        "episode": "5??",
        "timestamp": 1669019700,
        "global": false
    },
    {
        "country": "🇧🇷",
        "episode": "5??",
        "timestamp": 1670365800,
        "global": true
    },
    {
        "country": "🇩🇪",
        "episode": "5??",
        "timestamp": 1671213000,
        "global": false
    },
    {
        "country": "🇨🇭",
        "episode": "5??",
        "timestamp": 1678518600,
        "global": false
    }
].filter(e => e.timestamp >= Math.floor(Date.now() / 1000)).map(e => {
    e.confirmed = false;
    return e;
});

export const names = {
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

    "5??": "S5 Premiere"
}