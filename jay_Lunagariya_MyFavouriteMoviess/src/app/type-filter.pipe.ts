import { Pipe, PipeTransform } from '@angular/core';
import { Content } from '../content-interface.ts';

@Pipe({
  name: 'typeFilter'
})
export class TypeFilterPipe implements PipeTransform {
  transform(contents: Content[], typeFilter?: string): Content[] {
    if (!contents) {
      return [];
    }
    if (!typeFilter) {
      return contents.filter(content => !content.type);
    }
    return contents.filter(content => content.type === typeFilter);
  }
}
