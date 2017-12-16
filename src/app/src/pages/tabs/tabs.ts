import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { RelatarPage } from '../relatar/relatar';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = RelatarPage;

  constructor() {
  }
}
