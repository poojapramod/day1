import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'; 
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { SiderbarComponent } from './siderbar/siderbar.component';
import { FeaturesComponent } from './features/features.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { WhishlistComponent } from './whishlist/whishlist.component';
import { CategoryFilterComponent } from './category-filter/category-filter.component';
import { RegisterComponent } from './register/register.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },  
  { path: 'cart', component: CartComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: FeaturesComponent },  
  { path: 'filterComponent/:a/:b', component: CategoryFilterComponent } 

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    SiderbarComponent,
    FeaturesComponent,
    LoginComponent,
    CartComponent,
    WhishlistComponent,
    CategoryFilterComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
   
     RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
