import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from 'src/app/core/services/utility/utility.service';

@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar-mobile.component.html',
  styleUrls: ['./navbar-mobile.component.scss']
})
export class NavbarMobileComponent implements OnInit {

  activeBurger: string = "";
  activeMainSidebar: string = "";
  activeSubSidebar: string = "";
  imageUrl: string = "https://res.cloudinary.com/b2i-group/image/upload/v1673430409/kunta-organisation/images/t%C3%A9l%C3%A9chargement_vojsxd.png";
  activeProfil: string = "";
  isActive: string = "";

  constructor( private utilityService: UtilityService,
    private router: Router,) {
     }

  ngOnInit(): void {
    this.getConnectedUser();
  }

  activeMobileSider() {
    if (this.activeBurger == "") {
      this.activeBurger = "is-active";
      this.activeMainSidebar = "is-active";
      this.activeSubSidebar = "is-active";
    } else {
      this.activeBurger = "";
      this.activeMainSidebar = "";
      this.activeSubSidebar = "";
    }
  }

  onActive() {
    if (this.activeProfil == "") {
      this.activeProfil = "is-active";
    } else if (this.activeProfil == "is-active") {
      this.activeProfil = "";
    }
  }

  logout() {
    // this.utilityService.deleteToken();
    this.router.navigateByUrl("login");
  }

  getConnectedUser() {
    
  }

}
