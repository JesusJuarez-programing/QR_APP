import { HomePage, AboutPage, Component } from '../index.paginas';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;

  constructor() {

  }
}
