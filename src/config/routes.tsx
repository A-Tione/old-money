import { First } from '../components/welcome/First'
import { FirstActions } from '../components/welcome/FirstActions'
import { Forth } from '../components/welcome/Forth'
import { ForthActions } from '../components/welcome/ForthActions'
import { Second } from '../components/welcome/Second'
import { SecondActions } from '../components/welcome/SecondActions'
import { Third } from '../components/welcome/Third'
import { ThirdActions } from '../components/welcome/ThirdActions'
import { ItemCreate } from '../views/ItemCreate'
import { ItemList } from '../views/ItemList'
import { ItemPage } from '../views/ItemPage'
import { StartPage } from '../views/StartPage'
import { Welcome } from '../views/Welcome'



export const routes = [
  {path: '/', redirect: '/welcome'},
  {
    path: '/welcome', 
    component: Welcome,
    children: [
      {path: '', redirect: '/welcome/1'},
      {path: '1', components: {main: First, footer: FirstActions}, name: 'welcome1'},
      {path: '2', components: {main: Second, footer: SecondActions}, name: 'welcome2'},
      {path: '3', components: {main: Third, footer: ThirdActions}, name: 'welcome3'},
      {path: '4', components: {main: Forth, footer: ForthActions}, name: 'welcome4'},
    ]
  },
  { path: '/start', component: StartPage },
  {
    path: '/items', component: ItemPage,
    children: [
      { path: '', component: ItemList},
      { path: 'create', component: ItemCreate}
    ]
  }
]