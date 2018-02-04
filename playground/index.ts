/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AutoSizeInputModule } from 'angular-auto-size-input';

@Component({
	selector: 'app',
	template: `
<div class="h-flex-row h-padding">
	<div class="h-flex-max">
		<h3>Auto Size Input</h3>
		<textarea asAutoSizeInput>Hello</textarea>
	</div>
	<div class="h-flex-max">
		<h3>Default Input</h3>
		<textarea>G'day</textarea>
	</div>
</div>
`
})
export class AppComponent {}

@NgModule({
	bootstrap: [AppComponent],
	declarations: [AppComponent],
	imports: [ BrowserModule, AutoSizeInputModule ],
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
