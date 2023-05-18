import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ratings'
})
export class RatingsPipe implements PipeTransform {

  transform(value: number): string {
    return value == 0 ? "Out of Stock": "In Stock";
  }

}
