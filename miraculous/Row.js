import { names } from './data.js';

export default class {
    constructor(num) {
        this.num = num;
    }

    get(letter){
        return document.getElementById(this.num + letter);
    }

    set c(confirmed){
        if (confirmed) this.get('c').innerHTML = '<i class="twa twa-white-check-mark"></i>';
        else this.get('c').innerHTML = '<i class="twa twa-x"></i>';
    }

    set d(number){
        this.get('d').innerHTML = number + 'd';
    }

    set e(number){
        //this.get('e').innerHTML = '<a href="episode/?episode=' + number + '">' + names[number] + '</a>';
        this.get('e').innerHTML = names[number];
    }

    set f(flag){
        flag = flag.replace('🇧🇷', 'brazil-flag')
            .replace('🇨🇭', 'switzerland-flag')
            .replace('🇩🇪', 'de')
            .replace('🇪🇸', 'es')
            .replace('🇫🇷', 'fr')
            .replace('🇺🇸', 'us');

        this.get('f').innerHTML = '<i class="twa twa-' + flag + '"></i>';
    }

    set h(number){
        this.get('h').innerHTML = number + 'h';
    }

    set m(number){
        this.get('m').innerHTML = number + 'm';
    }

    set s(number){
        this.get('s').innerHTML = number + 's';
    }

    set timeLeft(amt){
        let rest = amt;

        const days = Math.floor(rest / (60 * 60 * 24));
        this.d = days;
        rest = amt - days * (60 * 60 * 24);

        const hours = Math.floor(rest / (60 * 60));
        this.h = hours;
        rest -= hours * (60 * 60);

        const minutes = Math.floor(rest / 60);
        this.m = minutes;
        rest -= minutes * 60;

        const seconds = rest;
        this.s = seconds;

        setTimeout(() => amt > 0 ? this.timeLeft = amt - 1 : window.location.reload(), 1000);
    }
}
