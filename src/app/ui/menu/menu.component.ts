import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/classes/user';
import { UserService } from 'src/app/core/services/users/user.service';
import { UtilityService } from 'src/app/core/services/utility/utility.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() activeSidebar: string = "is-active";
  activeOrder: string = "";
  activeOrderList: string = "";
  activeStore: string = "";
  activeStoreList: string = "";
  activeCategory: string = "";
  activeCategoryList: string = "";
  activeTransaction: string = "";
  activeTransactionList: string = "";
  activeReport: string = "";
  activeReportList: string = "";
  activeProfile: string = "";
  user: User;
  constructor( private utilityService: UtilityService,
    private router: Router,
    private userService: UserService) {
      this.user = new User();
     }

  ngOnInit(): void {
    this.getConnectedUser();
    
  }

  logout() {
    this.utilityService.deleteToken();
    this.router.navigateByUrl("login");
  }

  getConnectedUser() {
    
  }

  // getRole(){
  //   this.utilityService.getUserRole(this.utilityService.loadToken()).forEach((role :any)=>{
  //     console.log("Role::", role);
      
  // })
  // }

  onActiveOrder() {
    if (this.activeOrder ==  "") {
      this.activeOrder = "active";
      this.activeOrderList = "display: block;"
    } else {
      this.activeOrder = "";
      this.activeOrderList = "display: none;"
    }
  }

  onActiveStore() {
    if (this.activeStore ==  "") {
      this.activeStore = "active";
      this.activeStoreList = "display: block;"
    } else {
      this.activeStore = "";
      this.activeStoreList = "display: none;"
    }
  }

  onActiveCategory() {
    if (this.activeCategory ==  "") {
      this.activeCategory = "active";
      this.activeCategoryList = "display: block;"
    } else {
      this.activeCategory = "";
      this.activeCategoryList = "display: none;"
    }
  }

  onActiveTransaction() {
    if (this.activeTransaction ==  "") {
      this.activeTransaction = "active";
      this.activeTransactionList = "display: block;"
    } else {
      this.activeTransaction = "";
      this.activeTransactionList = "display: none;"
    }
  }

  onActiveReport() {
    if (this.activeReport ==  "") {
      this.activeReport = "active";
      this.activeReportList = "display: block;"
    } else {
      this.activeReport = "";
      this.activeReportList = "display: none;"
    }
  }

  onActiveProfile() {
    if (this.activeProfile == "") {
      this.activeProfile = "is-active";
    } else {
      this.activeProfile = "";
    }
  }
  
}
