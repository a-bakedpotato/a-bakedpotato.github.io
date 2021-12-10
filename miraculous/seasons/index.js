import { names } from '../data.js';

const season = parseInt(new URLSearchParams(window.location.search).get('s'));
document.getElementById('h2').innerHTML = 'Season ' + season;

const p = document.createElement('p');
p.innerHTML = '<i class="twa twa-warning"></i> All of the following pages will contain spoilers for the corresponding episode. <i class="twa twa-warning"></i>';
document.body.appendChild(p);

for (let i = 1; i <= 26; i++){
    const a = document.createElement('a');
    const br = document.createElement('br');
    const prodCode = (season * 100) + i;
    const name = names[prodCode] ?? prodCode;
    a.href = '../episode/?episode=' + prodCode;
    a.innerHTML = '<code>' + prodCode + '</code>: ' + (name === prodCode ? '???' : name);

    document.body.appendChild(a);
    document.body.appendChild(br);
}
