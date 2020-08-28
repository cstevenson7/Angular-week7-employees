import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//need to do these all seperate
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule,MatSidenavContent } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

//the cdk developer kit - custom sizing of screens
import { LayoutModule } from '@angular/cdk/layout';
import { ShellComponent } from './shell/shell.component';
import { RouterModule } from '@angular/router';
import { GoogleSigninDirective } from '../custom-directives/google-signin.directive';



//USE THIS SHORTCUT TO SEE TO MAKE THINGS EASIER  uses the SPREAD operator "..."
// only for arrays ngModel Below - imports and exports- All these modules are for page styling
const modules = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  LayoutModule,
  CommonModule,
  RouterModule
]

const components= [
  ShellComponent
]


@NgModule({
  declarations: [...components, GoogleSigninDirective],
  imports: [
    ...modules
  ],
  exports:[
    ...modules,
    ...components
  ]
})
export class SharedModule { }
