import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutNContactComponent } from './about-ncontact/about-ncontact.component';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';
import { LogInRegisterComponent } from './log-in-register/log-in-register.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { RegisterComponent } from './register/register.component';
import { PrivacyPolicyComponent} from './privacy-policy/privacy-policy.component';
import { WhyUsComponent} from './why-us/why-us.component';
import { OriginalProductComponent} from './original-product/original-product.component';
import { AboutUsComponent} from './about-us/about-us.component';
import { PhoneOrderComponent} from './phone-order/phone-order.component';
import { ReklamaciqComponent} from './reklamaciq/reklamaciq.component';
import { ReturnProductComponent} from './return-product/return-product.component';
import { ErrorPageComponent} from './error-page/error-page.component';
import { AfterCartComponent} from './after-cart/after-cart.component';
import { AuthGuard } from './auth/auth.guard';
import { RoleGuard } from './auth/role.guard';
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: AboutNContactComponent},
  {path: 'cart', component:  CartComponent},
  {path: 'account', component: AccountComponent,
  canActivate: [ AuthGuard ]},
  {path: 'login', component: LogInRegisterComponent},
  {path: 'admin', component: AdminPanelComponent,
  canActivate: [RoleGuard]},
  {path: 'product', component: ProductComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'wishlist', component: WishlistComponent,
  canActivate: [ AuthGuard ]},
  {path: 'register', component: RegisterComponent},
  {path: 'privacy', component: PrivacyPolicyComponent},
  {path: 'why-us', component: WhyUsComponent},
  {path: 'original-product', component: OriginalProductComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'phone-order', component: PhoneOrderComponent},
  {path: 'reklamaciq', component: ReklamaciqComponent},
  {path: 'return-product', component: ReturnProductComponent},
  {path: 'after-cart', component: AfterCartComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: [ AuthGuard,RoleGuard ]
})
export class AppRoutingModule { }
