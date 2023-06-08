import { Component, OnInit } from '@angular/core';
import { WalletService } from '../../services/wallet.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  account: any;
  constructor(private walletServ: WalletService) { }

  ngOnInit(): void {
    console.log('ok');
  }

  connectWallet() {
    if(!this.account) {
      this.walletServ.connectWalletNew();
    } 
  }
}
