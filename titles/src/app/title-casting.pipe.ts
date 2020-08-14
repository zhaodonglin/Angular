import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'casting'
})
export class TitleCastingPipe implements PipeTransform{
    upperCaseTheFirstChar(word) {
        if (!word){
            return;
        }
        let chars = word.split('');
        chars[0] = chars[0].toUpperCase();
        let str= chars.join('');
        return str;
    }

    transform(value: string, args?:any) {
        if (!value) {
            return null;
        }

        let words = value.split(" ");
        words[0] = this.upperCaseTheFirstChar(words[0]);
        for (let i =1; i< words.length; i++) {
            if (words[i] === 'the'  || words[i] === 'of') {
                continue;
            }
            words[i] = this.upperCaseTheFirstChar(words[i]);
        }
        return words.join(' ');
    }
}
