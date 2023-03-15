import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* BASIC MODULES AND COMPONENTS */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AboutNContactComponent } from './about-ncontact/about-ncontact.component';
import { AccountComponent } from './account/account.component';
import { LogInRegisterComponent } from './log-in-register/log-in-register.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ProductsComponent } from './products/products.component';
import { WishlistComponent } from './wishlist/wishlist.component';
/* IMPORTS */
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { RegisterComponent } from './register/register.component';
import {MatRadioModule} from '@angular/material/radio';
import { AboutUsComponent } from './about-us/about-us.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { OriginalProductComponent } from './original-product/original-product.component';
import { PhoneOrderComponent } from './phone-order/phone-order.component';
import { ReklamaciqComponent } from './reklamaciq/reklamaciq.component';
import { ReturnProductComponent } from './return-product/return-product.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AfterCartComponent } from './after-cart/after-cart.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    AboutNContactComponent,
    AccountComponent,
    LogInRegisterComponent,
    AdminPanelComponent,
    ProductComponent,
    ProductsComponent,
    WishlistComponent,
    RegisterComponent,
    AboutUsComponent,
    WhyUsComponent,
    PrivacyPolicyComponent,
    OriginalProductComponent,
    PhoneOrderComponent,
    ReklamaciqComponent,
    ReturnProductComponent,
    ErrorPageComponent,
    AfterCartComponent,

  ],
  imports: [
    MatExpansionModule,
    MatSelectModule,
    NgxUsefulSwiperModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatGridListModule,
    MatCardModule,
    MatRadioModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
