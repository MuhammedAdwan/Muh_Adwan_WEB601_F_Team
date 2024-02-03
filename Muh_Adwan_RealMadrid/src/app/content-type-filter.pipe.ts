import { Pipe, PipeTransform } from "@angular/core";
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'contentTypeFilter'
})
export class ContentTypeFilterPipe implements PipeTransform {

  transform(value: Content[], type: string): Content[] {
    if (!type) {
      return value;
    }
    return value.filter((item: Content) => item.type === type);
  }

}