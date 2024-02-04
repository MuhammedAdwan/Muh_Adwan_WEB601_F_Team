import { Pipe, PipeTransform } from "@angular/core";
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'contentTypeFilter'
})
export class ContentTypeFilterPipe implements PipeTransform {

  transform(value: Content[], type: string): Content[] {
    // if no type is provided, return the original array
    if (!type) {
      return value;
    }
    // filter the array and return the new array
    return value.filter((item: Content) => item.type === type);
  }

}