import { Component, OnInit} from '@angular/core';
import { AuthService } from 'shared/services/auth.service';
import { AppUser } from 'shared/models/app-user';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { Observable } from 'rxjs';
import { ShoppingCart } from 'shared/models/shopping-cart';


@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit{
  appUser:AppUser;
  cart$: Observable<ShoppingCart>;

  constructor(private auth:AuthService, private shoppingCartService: ShoppingCartService) {

  }

  logout() {
   this.auth.logout();
   this.appUser = null;
  }

  async ngOnInit() {
    this.auth.appUser$.subscribe(appUser=>{if(appUser) {this.appUser=appUser.val();}});
    this.cart$ = await this.shoppingCartService.getCart();
  }
}
