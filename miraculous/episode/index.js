import { names } from '../data.js';

const episode = new URLSearchParams(window.location.search).get('episode');

const ratings = [
    '<i class="twa twa-pink-s"></i> One of the best episodes in the whole series',
    '<i class="twa twa-a"></i> An amazing episode',
    '<i class="twa twa-b"></i> Great episode',
    '<i class="twa twa-cc"></i> Meh episode',
    '<i class="twa twa-dd"></i> Filler, bad episode',
    '<i class="twa twa-ff"></i> Skip this episode, it hurts to watch',
    '<i class="twa twa-question-mark"></i> This episode has not been released or just hasn\'t been rated by Potato yet. If that\'s the case, the following info may not be accurate.'
]

import('./episodes/' + episode + '.js')
    .then(({ rating = 6, plot = false, newMiraculous = false, lore = false, comments = 'None' }) => {
        const br = document.createElement('br');

        const season = Math.floor(parseInt(episode) / 100);
        const seasonEp = parseInt(episode) - (season * 100);

        document.getElementById('back').href = '../seasons/?s=' + season;

        const h1 = document.createElement('h1');
        h1.innerHTML = 's' + season + 'e' + seasonEp + ': ' + names[episode];
        document.head.title = names[episode] ?? '???';
        document.body.appendChild(h1);

        const p = document.createElement('p');
        p.innerHTML = '<b>Rating:</b> ' + ratings[rating];
        document.body.appendChild(p);
        document.body.appendChild(br);

        const p2 = document.createElement('p');
        p2.innerHTML = '<b>Plot?</b> <i class="twa twa-' + (plot ? 'yes' : 'no') + '"></i>';
        document.body.appendChild(p2);
        document.body.appendChild(br);

        const p3 = document.createElement('p');
        p3.innerHTML = '<b>Lore?</b> <i class="twa twa-' + (lore ? 'yes' : 'no') + '"></i>';
        document.body.appendChild(p3);
        document.body.appendChild(br);

        const p4 = document.createElement('p');
        p4.innerHTML = '<b>New Miraculous/Unification/Holder?</b> <i class="twa twa-' + (newMiraculous ? 'yes' : 'no') + '"></i>';
        document.body.appendChild(p4);
        document.body.appendChild(br);

        const p5 = document.createElement('p');
        p5.innerHTML = '<b>Extra Comments:</b> ' + comments;
        document.body.appendChild(p5);
        document.body.appendChild(br);

        const episodeNumber = parseInt(episode);
        const prev = (episodeNumber - 1) % 100 ? episodeNumber - 1 : (season - 1) * 100 + 26;
        const next = episode.endsWith('26') ? (season + 1) * 100 : episodeNumber + 1;

        const a = document.createElement('a');
        a.innerHTML = '<i class="twa twa-arrow-left"></i> Previous ';
        a.href = '?episode=' + prev;
        document.body.appendChild(a);

        const a2 = document.createElement('a');
        a2.innerHTML = '<i class="twa twa-arrow-right"></i> Next';
        a2.href = '?episode=' + next;
        document.body.appendChild(a2);

        document.getElementById('loading').remove();
    })
    .catch(() => document.getElementById('loading').innerHTML = 'Failed to find the episode: "' + episode + '".<br><br>' +
        'It\'s possible it hasn\'t been created yet.');