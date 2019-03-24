import Dashboard from 'layouts/Dashboard/Dashboard'
import Submission from 'layouts/Submission/Submission'

var indexRoutes = [
  { path: '/attempt', name: 'Submission', component: Submission },
  { path: '/', name: 'Home', component: Dashboard }
]

export default indexRoutes
