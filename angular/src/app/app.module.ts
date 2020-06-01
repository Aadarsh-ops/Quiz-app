import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ResultComponent } from './navbar/result/result.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { AuthGuard } from './auth.guard';







@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ResultComponent,
    MainComponent
  ],
  exports:[MainComponent]
  ,
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatRadioModule,
    MatSnackBarModule,
    ReactiveFormsModule
    
  
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
