import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'delimit',
    pure: false
})
export class DelimiterPipe implements PipeTransform {
    transform(val: string, Delimit: number): string {
        return val.length > Delimit ? val.substr(0, Delimit) + "..." : val;
    }
}