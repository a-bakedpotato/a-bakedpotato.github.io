const spawned = [];
const tested = [];
const testOrder = ['20', '8', '9', '18', '19', '15', '14', '7', '5', '13', '11'];
let pending = [];
let choosing = true;
let testing;

function setPrompt(text){
	const prompt = document.getElementById('prompt');
	prompt.innerText = text;
}

function setGreen(idx){
	document.getElementById('spot' + idx).classList.remove('unk');
	document.getElementById('spot' + idx).classList.remove('translucent');
	document.getElementById('spot' + idx).classList.remove('fifty');
	spawned.push(idx);
}

function setBlue(idx){
	document.getElementById('spot' + idx).classList.remove('unk');
	document.getElementById('spot' + idx).classList.remove('translucent');
	document.getElementById('spot' + idx).classList.add('fifty');
}

function setRed(idx){
	if (!document.getElementById('spot' + idx)) return;
	document.getElementById('spot' + idx).classList.remove('unk');
	document.getElementById('spot' + idx).classList.remove('translucent');
	document.getElementById('spot' + idx).classList.remove('fifty');
	document.getElementById('spot' + idx).classList.add('no');
}

function setYellow(idx){
	document.getElementById('spot' + idx).classList.remove('unk');
	document.getElementById('spot' + idx).classList.remove('translucent');
	document.getElementById('spot' + idx).classList.remove('fifty');
	document.getElementById('spot' + idx).classList.add('rng');
}
	
function setAllYellow(name){
	const group = document.getElementsByClassName(name);
	for (let i = 0; i < group.length; i++) setYellow(group.item(i).id.split('spot')[1]);
}
	
function setAllRed(name){
	const group = document.getElementsByClassName(name);
	for (let i = 0; i < group.length; i++){ 
		for (let j = 0; j < 10; j++) setRed(group.item(i)?.id?.split?.('spot')?.[1]); //idk why running only one time doesnt work but this does and im so done with this mining spot that idc enough to fix
	}
}

function confirm(){
	if (pending.length < 4) return setPrompt('Please select all 4 spots the blacksmith marked.');
	
	function setAll(name){
		const group = document.getElementsByClassName(name);
		for (let i = 0; i < group.length; i++) setGreen(group.item(i).id.split('spot')[1]);
	}
	
	const groupNames = [];
	for (const idx of pending){
		const spot = spots.item(idx);
		const group = [...spot.classList].find(n => !['border', 'unk', 'translucent'].includes(n));
		if (!groupNames.includes(group)) groupNames.push(group);
	}
	
	if (groupNames.length !== 2 || groupNames.includes('the4') || groupNames.includes('si')) return setPrompt('Invalid data. Please verify the spots marked.');
	for (const group of groupNames) setAll(group);
	
	choosing = false;
	document.getElementById('confirm').classList.add('hidden');
	document.getElementById('yn').classList.remove('hidden');
	
	setPrompt('Is the spot marked in blue spawned?');
	next();
}

function next(){
	if (!testOrder.length){
		document.getElementById('yn').classList.add('hidden');
		document.getElementById('map').classList.add('hidden');
		document.getElementById('everythingelse').classList.add('hidden');
		return setPrompt('Invalid data. Please refresh the page and try again.');
	}
	testing = testOrder.shift();
	if (spawned.includes(testing)) next();
	setBlue(testing);
}

function no(){
	setRed(testing);
	next();
}

function yes(){
	const spot = spots.item(testing);
	const group = [...spot.classList].find(n => !['border', 'unk', 'translucent'].includes(n));
	
	if (group === 'si') setAllYellow('the4');
	else setAllYellow(group);
	document.getElementById('yn').classList.add('hidden');
	document.getElementById('prompt').classList.add('hidden');
	document.getElementById('unk').classList.add('hidden');
	
	setAllRed('translucent');
	setYellow(testing);
	setYellow(testing);
}

const spots = document.getElementsByClassName('border');
function toggleSpot(idx){
	const spot = spots.item(idx);
	
	if (!choosing || spot.classList.contains('no')) return;
	
	if (pending.includes(idx)){
		pending = pending.filter(i => i !== idx);
		spot.classList.add('translucent');
	} else if (pending.length < 4) {
		pending.push(idx);
		spot.classList.remove('translucent');
	}
}

document.getElementById('confirm').onclick = confirm;
document.getElementById('no').onclick = no;
document.getElementById('yes').onclick = yes;

for (let i = 0; i < spots.length; i++){
	spots.item(i).onclick = () => toggleSpot(i);
	spots.item(i).id = 'spot' + i;
}