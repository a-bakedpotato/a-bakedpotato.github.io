const character = new URLSearchParams(window.location.search).get('character');

const elements = {
    anemo: '#' + Number(3331230).toString(16),
    geo: '#' + Number(16229376).toString(16),
    electro: '#' + Number(13336573).toString(16),
    dendro: '#' + Number(9423616).toString(16),
    hydro: '#' + Number(47870).toString(16),
    pyro: '#' + Number(15818755).toString(16),
    cryo: '#' + Number(8190971).toString(16),
}

import('./characters/' + character.toLowerCase() + '.js')
    .then(({ name, codename, element, rarity, constellation, weapon, guideTitle, guideImgUrl, guide2Title, guideImgUrl2,
               story, playstyle, weapons, ascensionImgUrl, constellationImgUrl }) => {

        const bigTable = document.createElement('table');
        bigTable.style.width = '100%';
        const tableRow = document.createElement('tr');
        const staticArea = document.createElement('td');
        staticArea.style.width = '30%';
        staticArea.style.position = 'fixed';

        const scrollableArea = document.createElement('td');
        scrollableArea.style.width = '65%';

        const gachaImgUrl = '../../../assets/img/genshin/UI_Gacha_AvatarImg_' + codename + '.png';
        const style = document.createElement('style');
        style.innerHTML = 'body::before {\n' +
            '                background: url("' + gachaImgUrl + '") no-repeat center center/cover;\n' +
            '                content: "";\n' +
            '                height: 90vw;\n' +
            '                left: 5vw;\n' +
            '                opacity: 20%;\n' +
            '                overflow: hidden;\n' +
            '                position: fixed;\n' +
            '                top: 0;\n' +
            '                width: 90vw;\n' +
            '                z-index: -1;\n' +
            '            }';
        document.head.appendChild(style);

        const h1 = document.createElement('h1');
        h1.innerHTML = '<i class="twa twa-' + element + '"></i> ' + name;
        staticArea.appendChild(h1);

        const h2 = document.createElement('h2');
        h2.innerHTML = '<i class="twa twa-genshin-star"></i>'.repeat(rarity);
        staticArea.appendChild(h2);

        const p = document.createElement('p');
        p.innerHTML = story;
        p.style.textAlign = 'justify';
        staticArea.appendChild(p);

        const p2 = document.createElement('p');
        p2.innerHTML  = '<b>Weapon Type</b>: ' + weapon + '<br>';
        p2.innerHTML += '<b>Constellation</b>: ' + constellation;
        scrollableArea.appendChild(p2);

        if (playstyle) {
            const h22 = document.createElement('h2');
            h22.innerHTML = 'Playstyle';
            scrollableArea.appendChild(h22);

            const p3 = document.createElement('p');
            p3.innerHTML = playstyle;
            p3.style.textAlign = 'justify';
            scrollableArea.appendChild(p3);
        }

        const h23 = document.createElement('h2');
        h23.innerHTML = guideTitle ?? 'Build';
        scrollableArea.appendChild(h23);

        const a = document.createElement('a');
        const img = document.createElement('img');
        img.src = guideImgUrl;
        img.style.border = '2px solid ' + elements[element];
        a.href = img.src;
        a.target = '_blank';
        a.appendChild(img);
        scrollableArea.appendChild(a);

        if (guideImgUrl2){
            const h23 = document.createElement('h2');
            h23.innerHTML = guide2Title ?? 'Build 2';
            scrollableArea.appendChild(h23);

            const a = document.createElement('a');
            const img = document.createElement('img');
            img.src = guideImgUrl2;
            img.style.border = '2px solid ' + elements[element];
            a.href = img.src;
            a.target = '_blank';
            a.appendChild(img);
            scrollableArea.appendChild(a);
        }

        if (weapons) {
            const h24 = document.createElement('h2');
            h24.innerHTML = 'Weapons';
            scrollableArea.appendChild(h24);

            const table = document.createElement('table');
            const trTop = document.createElement('tr');
            const tdLH = document.createElement('td');
            tdLH.innerHTML = '<i class="twa twa-star"></i>'.repeat(5);
            trTop.appendChild(tdLH);

            const tdRH = document.createElement('td');
            tdRH.innerHTML = '<i class="twa twa-star"></i>'.repeat(4);
            trTop.appendChild(tdRH);

            const trBottom = document.createElement('tr');
            trBottom.style.verticalAlign = 'top';
            const tdLB = document.createElement('td');
            const ol = document.createElement('ol');
            ol.style.paddingLeft = '0';
            ol.style.listStylePosition = 'inside';
            for (const item of weapons[5]) ol.innerHTML += '<li>' + item + '</li>';
            tdLB.appendChild(ol);
            trBottom.appendChild(tdLB);

            const tdRB = document.createElement('td');
            const ol2 = document.createElement('ol');
            ol2.style.paddingLeft = '0';
            ol2.style.listStylePosition = 'inside';
            for (const item of weapons[4]) ol2.innerHTML += '<li>' + item + '</li>';
            tdRB.appendChild(ol2);
            trBottom.appendChild(tdRB);

            table.style.textAlign = 'left';
            table.style.width = '50%';
            table.appendChild(trTop);
            table.appendChild(trBottom);
            scrollableArea.appendChild(table);
        }

        const h25 = document.createElement('h2');
        h25.innerHTML = 'Ascension';
        scrollableArea.appendChild(h25);

        const a2 = document.createElement('a');
        const img2 = document.createElement('img');
        img2.src = ascensionImgUrl;
        img2.style.border = '2px solid ' + elements[element];
        a2.href = img2.src;
        a2.target = '_blank';
        a2.appendChild(img2);
        scrollableArea.appendChild(a2);

        const h26 = document.createElement('h2');
        h26.innerHTML = 'Constellation Overview';
        scrollableArea.appendChild(h26);

        const a3 = document.createElement('a');
        const img3 = document.createElement('img');
        img3.src = constellationImgUrl;
        img3.style.border = '2px solid ' + elements[element];
        a3.href = img3.src;
        a3.target = '_blank';
        a3.appendChild(img3);
        scrollableArea.appendChild(a3);

        const h6 = document.createElement('h6');
        h6.innerHTML = 'All information provided by <a href="https://twitter.com/worldofteyvat">@WorldOfTeyvat</a>.'
        scrollableArea.appendChild(h6);

        document.title = name + ' Guide';
        document.getElementById('loading').remove();
        tableRow.appendChild(staticArea);
        tableRow.appendChild(scrollableArea);
        bigTable.appendChild(tableRow);
        document.body.appendChild(bigTable);
    })
    .catch(e => document.getElementById('loading').innerHTML = 'Failed to find the character: "' + character + '".' + e);