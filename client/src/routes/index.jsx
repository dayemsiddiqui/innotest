import Dashboard from './../layouts/Dashboard/Dashboard'
import Submission from './../layouts/Submission/Submission'
import Result from './../layouts/Submission/Result'

var indexRoutes = [
  { path: '/attempt/:id', name: 'Submission', component: Submission },
  { path: '/result/:id', name: 'Result', component: Result },
  { path: '/', name: 'Home', component: Dashboard }
]

export default indexRoutes
