import { Directive, ElementRef, HostListener, Input, input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlightcard]'
})
export class Highlightcard implements OnChanges {

@Input() externalColor:string='black'
@Input('appHighlightcard') defaultColor:string='red'
 constructor(private ele:ElementRef) {
   }
  ngOnChanges() {
        this.ele.nativeElement.style.backgroundColor = this.defaultColor

  }

   @HostListener ('mouseover') over (){
    this.ele.nativeElement.style.backgroundColor = this.externalColor
   }

   @HostListener ('mouseout') out (){
    this.ele.nativeElement.style.backgroundColor = this.defaultColor
   }

}
