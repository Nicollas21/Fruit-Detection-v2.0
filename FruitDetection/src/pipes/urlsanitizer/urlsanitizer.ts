import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'urlsanitizer',
})
export class UrlsanitizerPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  public transform(value: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }
}
