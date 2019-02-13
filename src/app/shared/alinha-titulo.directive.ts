import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appAlinhaTitulo]'
})
export class AlinhaTituloDirective {

  constructor() { }
  @HostBinding('style.text-align') alinhamento = 'center';

}
