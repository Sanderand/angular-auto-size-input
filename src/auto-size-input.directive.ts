import { Directive, ElementRef, AfterViewInit, HostBinding } from '@angular/core';

/* tslint:disable:directive-selector */
@Directive({
	selector: 'textarea[asAutoSizeInput]'
})
export class AutoSizeInputDirective implements AfterViewInit {
	@HostBinding('class.as-auto-size-input') true;

	constructor(
		private _elementRef: ElementRef
	) {}

	public ngAfterViewInit(): void {
		this._elementRef.nativeElement.addEventListener('change', this.resize);
		this._elementRef.nativeElement.addEventListener('cut', this.delayedResize);
		this._elementRef.nativeElement.addEventListener('paste', this.delayedResize);
		this._elementRef.nativeElement.addEventListener('drop', this.delayedResize);
		this._elementRef.nativeElement.addEventListener('keydown', this.delayedResize);
		this.delayedResize();
	}

	public resize = () => {
		this._elementRef.nativeElement.style.height = 'auto';
		this._elementRef.nativeElement.style.height = this._elementRef.nativeElement.scrollHeight + 'px';
	}

	public delayedResize = () => {
		setTimeout(this.resize, 0);
	}
}
