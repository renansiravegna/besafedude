import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { RelatarPage } from '../relatar/relatar';
import { UsuarioPage } from '../usuario/usuario';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = RelatarPage;
  tab3Root = UsuarioPage;

  constructor() {
  }
}
