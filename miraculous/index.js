import Row from './Row.js';
import { confirmed, unconfirmed, updated } from './data.js';

const dubs = {
    de: false,
    en: false,
    fr: false,
    pt: false
}

const updateTag = document.getElementById('updated');
updateTag.innerHTML = 'Last Updated: ' + updated + ' UTC';

const timeline = [...confirmed, ...unconfirmed].sort((a, b) => a.timestamp - b.timestamp);
const timeTable = document.getElementById('timeline');

let j = 10;
function generateTimeTableRow(){
    const tr = document.createElement('tr');
    for (const letter of 'cfedhms'.split('')){
        const td = document.createElement('td');
        td.id = j + letter;
        tr.appendChild(td);
    }
    timeTable.appendChild(tr);

    return new Row(j++);
}

let i = 0;
for (const episode of timeline){
    const dub = episode.country === '🇧🇷' ? 'br'
        :       episode.country === '🇮🇹' ? 'br' //br was for br dub but is now not any of: en fr de
        :       episode.country === '🇨🇭' ? 'fr'
        :       episode.country === '🇩🇪' ? 'de'
        :       episode.country === '🇫🇷' ? 'fr'
        :       'en';

    if (!dubs[dub]){
        dubs[dub] = true;

        const row = new Row(i++);
        row.c = episode.confirmed;
        row.f = episode.country;
        row.e = episode.episode;

        const now = Math.floor(Date.now() / 1000);
        row.timeLeft = episode.timestamp - now;
    }

    const row = generateTimeTableRow();
    row.c = episode.confirmed;
    row.f = episode.country;
    row.e = episode.episode;

    const now = Math.floor(Date.now() / 1000);
    row.timeLeft = episode.timestamp - now;
}
