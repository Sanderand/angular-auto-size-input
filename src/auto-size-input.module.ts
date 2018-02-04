import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoSizeInputDirective } from './auto-size-input.directive';

@NgModule({
	declarations: [ AutoSizeInputDirective ],
	exports: [ AutoSizeInputDirective ],
	imports: [ CommonModule ]
})
export class AutoSizeInputModule {}
