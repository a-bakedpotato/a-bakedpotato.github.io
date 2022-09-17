let chars = [
    'Albedo',
    'Aloy',
    'Ambor',
    'Ayaka',
    'Ayato',
    'Barbara',
    'Beidou',
    'Bennett',
    'Chongyun',
    'Collei',
    'Diluc',
    'Diona',
    'Dori',
    'Eula',
    'Feiyan',
    'Fischl',
    'Ganyu',
    'Gorou',
    'Heizo',
    'Hutao',
    'Itto',
    'Kaeya',
    'Kazuha',
    'Keqing',
    'Klee',
    'Kokomi',
    'Lisa',
    'Mona',
    'Ningguang',
    'Noel',
    'PlayerBoy',
    'Qin',
    'Qiqi',
    'Razor',
    'Rosaria',
    'Sara',
    'Sayu',
    'Shenhe',
    'Shinobu',
    'Shougun',
    'Sucrose',
    'Tartaglia',
    'Tighnari',
    'Tohma',
    'Venti',
    'Xiangling',
    'Xiao',
    'Xingqiu',
    'Xinyan',
    'Yae',
    'Yelan',
    'Yoimiya',
    'Yunjin',
    'Zhongli'
];

const table = document.getElementById('chars');
let tr = document.createElement('tr');
let i = -1;
for (const char of chars){
    if (++i >= 10){
        i = 0;
        table.appendChild(tr);
        tr = document.createElement('tr');
    }

    const td = document.createElement('td');
    const a = document.createElement('a');
    const img = document.createElement('img');
    img.src = '../assets/img/genshin/UI_AvatarIcon_' + char + '.png';
    img.style = 'width: 100%';
    a.href = '#title';
    a.onclick = () => {
        if (chars.includes(char)) {
            chars = chars.filter(c => c !== char).sort();
            img.style = 'filter: grayscale(100%); width: 100%; transition: 0.5s;';
        } else {
            chars.push(char);
            chars = chars.sort();
            img.style = 'filter: grayscale(0%); width: 100%; transition: 0.5s;';
        }
    }
    a.appendChild(img);
    td.appendChild(a);
    tr.appendChild(td);
}
table.appendChild(tr);

function generate(){
    const nums = [];
    const length = chars.length >= 8 ? 8 : chars.length;

    const output = document.getElementById('output');
    output.innerHTML = '';
    if (length <= 1) return output.innerHTML = 'Abyss is gonna be kinda hard without any characters, huh?';

    while (nums.length < length){
        const randNum = Math.floor(Math.random() * chars.length);
        if (!nums.includes(randNum)) nums.push(randNum);
    }

    let i = 0;
    for (const num of nums){
        if (i++ === Math.ceil(nums.length / 2)){
            const br = document.createElement('br');
            output.appendChild(br);
        }

        const char = chars[num];
        const img = document.createElement('img');
        img.src = '../assets/img/genshin/UI_AvatarIcon_' + char + '.png';
        img.style = 'width: 10%';
        output.appendChild(img);
    }
}
window.generate = generate;