import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';

//all these imports just give us access to these modules to actually use it we have to add 
//below in the @ngModule bit
//Adding Dependency Injection import for the shared module
import { SharedModule } from './shared/shared.module'
import { environment } from 'src/environments/environment';

//Import(s) for AngularFire Line 34 diff from Firebase congfig file 
//because we are using Typescript
import { AngularFireModule} from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule} from '@angular/fire/auth';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeHomeComponent,
    EmployeeUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
