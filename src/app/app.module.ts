import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserContainerComponent } from './components/user-container/user-container.component';
import {UsersService} from './services/users.service';
import { WhenPipe } from './pipes/when.pipe';
import { KeysPipe } from './pipes/keys.pipe';
import { WordSpacingPipe } from './pipes/word-spacing.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';
import { AllValuesForPropPipe } from './pipes/all-values-for-prop.pipe';
import { UniquePipe } from './pipes/unique.pipe';
import { UserDisplayComponent } from './components/user-container/components/user-display/user-display.component';
import { UserControlComponent } from './components/user-container/components/user-control/user-control.component';
import { ControlComponent } from './components/control/control.component';
import { DisplayComponent } from './components/display/display.component';
import { SelectedUserComponent } from './components/selected-user/selected-user.component';
import { ShowDescriptionDirective } from './directives/show-description.directive';
import { ColorGeneratorDirective } from './directives/color-generator.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserContainerComponent,
    WhenPipe,
    KeysPipe,
    WordSpacingPipe,
    FilterPipe,
    SortByPipe,
    AllValuesForPropPipe,
    UniquePipe,
    UserDisplayComponent,
    UserControlComponent,
    ControlComponent,
    DisplayComponent,
    SelectedUserComponent,
    ShowDescriptionDirective,
    ColorGeneratorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [UsersService, KeysPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
