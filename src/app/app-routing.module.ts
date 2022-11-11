import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminComponent } from './admin/admin.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { ProductviewComponent } from './productview/productview.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './_auth/auth.guard';
import { ProductViewService } from './_services/product-view.service';

const routes: Routes = [
  {path:'',component: HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent, canActivate:[AuthGuard], data:{roles:['Admin']} },
  { path: 'user', component: UserComponent, canActivate:[AuthGuard], data:{roles:['User']} },
  { path: 'login', component: LoginComponent },
  {path: 'create', component: CreateuserComponent},
  { path: 'forbidden', component: ForbiddenComponent },
  {path: 'product', component: ProductComponent},
  {path: 'productview', component:ProductviewComponent,
    resolve: {
      product: ProductViewService
    }
  },
  {path: 'addproduct', component: AddProductComponent,
  resolve: {
    product: ProductViewService
  }
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
