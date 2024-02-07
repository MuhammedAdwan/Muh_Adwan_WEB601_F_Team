import { Pipe, PipeTransform } from "@angular/core";
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'contentTypeFilter'
})
export class ContentTypeFilterPipe implements PipeTransform {

  transform(contentArray: Content[], type: string): Content[] {
    // if no type is provided, return the original array
    if (!type) {
      return contentArray;
    }
    // filter the array and return the new array
    return contentArray.filter((item: Content) => item.type === type);
  }

}