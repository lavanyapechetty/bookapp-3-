import { RouterModule, Routes } from '@angular/router';
import { StateComponent } from '../admin/components/state/state.component';
import { UserLoginComponent } from '../authentication/user-login/user-login.component';
import { AdminLoginComponent } from '../authentication/admin-login/admin-login.component';
import { UserRegisterComponent } from '../authentication/user-register/user-register.component';
import { CategoryComponent } from '../admin/components/category/category.component';
import { PublisherComponent } from '../admin/components/publisher/publisher.component';
import { BookreviewComponent } from '../admin/components/bookreview/bookreview.component';
import { ReviewerComponent } from '../admin/components/reviewer/reviewer.component';
import { AdminhomepageComponent } from '../admin/components/adminhomepage/adminhomepage.component';
import { AuthorComponent } from '../admin/components/author/author.component';
import { BookComponent } from '../admin/components/book/book.component';
import { InventoryComponent } from '../admin/components/inventory/inventory.component';
import { BookConditionComponent } from '../admin/components/bookcondition/bookcondition.component';
import { UsersComponent } from '../admin/components/users/users.component';
import { PurchaseLogComponent } from '../admin/components/purchaselog/purchaselog.component';
import { ShoppingCartComponent } from '../admin/components/shoppingcart/shoppingcart.component';
import { StateuserComponent } from '../user/components/state/stateuser.component';
import { PermroleuserComponent } from '../admin/components/permrole/permroleuser.component';
import { CategoryuserComponent } from '../user/components/category/categoryuser.component';
import { BookreviewuserComponent } from '../user/components/bookreview/bookreviewuser.component';
//import { BookConditionuserComponent } from '../user/components/bookcondition/bookconditionuser.component';
import { BookuserComponent } from '../user/components/book/bookuser.component';
import { AuthoruserComponent } from '../user/components/author/authoruser.component';
import { UsersuserComponent } from '../user/components/users/usersuser.component';
import { ShoppingCartuserComponent } from '../user/components/shoppingcart/shoppingcartuser.component';
import { PurchaseLoguserComponent } from '../user/components/purchaselog/purchaseloguser.component';
import { RevieweruserComponent } from '../user/components/reviewer/revieweruser.component';
import { LoginhomepageComponent } from '../user/components/loginhomepage/loginhomepage.component';
import { PublisheruserComponent } from '../user/components/publisher/publisheruser.component';



export const routes: Routes = [
   
    {path:'state',component:StateComponent},
    {path: 'user-login', component: UserLoginComponent},
    {path: 'user-register', component: UserRegisterComponent},
    {path: 'admin-login', component: AdminLoginComponent},
    {path:'category',component:CategoryComponent},
    {path:'publisher',component:PublisherComponent},
    {path:'users',component:UsersComponent},
    {path:'bookreview',component:BookreviewComponent},
    {path:'reviewer',component:ReviewerComponent},
    {path:'author',component:AuthorComponent},
    {path:'book',component:BookComponent},
    {path:'purchaselog',component:PurchaseLogComponent},
    {path:'shoppingcart',component:ShoppingCartComponent},
    {path:'inventory',component:InventoryComponent},
    {path:'bookcondition',component:BookConditionComponent},
    {path: 'adminhomepage', component: AdminhomepageComponent },
    {path : 'permrole', component: PermroleuserComponent},
    {path: '', redirectTo: '/adminhomepage', pathMatch: 'full' },



    {path:'loginhomepage',component:LoginhomepageComponent},
    {path:'publisheruser',component:PublisheruserComponent},
    {path:'purchaseloguser',component:PurchaseLoguserComponent},
    {path:'revieweruser',component:RevieweruserComponent},
    {path:'shoppingcartuser',component:ShoppingCartuserComponent},
    {path:'stateuser',component:StateuserComponent},
    {path:'usersuser',component:UsersuserComponent},
    {path:'authoruser',component:AuthoruserComponent},
    {path:'bookuser',component:BookuserComponent},
    {path:'permrole', component: PermroleuserComponent},
    //{path:'bookconditionuser',component:BookConditionuserComponent},
    {path:'bookreviewuser',component:BookreviewuserComponent},
    {path:'categoryuser',component:CategoryuserComponent},
    { path: '', redirectTo: '/adminhomepage', pathMatch: 'full' },
    {path: '', redirectTo: '/loginhomepage',pathMatch:'full'}

];

 