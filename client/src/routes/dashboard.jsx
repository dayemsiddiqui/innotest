import Dashboard from 'views/Dashboard/Dashboard'
import QuizList from 'views/Quiz/QuizList'
import TableList from 'views/TableList/TableList'
import CreateQuiz from '../views/Quiz/CreateQuiz'

const dashboardRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'pe-7s-graph',
    component: Dashboard
  },
  {
    path: '/quizes',
    name: 'Quizes',
    icon: 'pe-7s-news-paper',
    component: QuizList
  },
  {
    path: '/responses',
    name: 'Responses',
    icon: 'pe-7s-note2',
    component: TableList
  },
  {
    path: '/createQuiz',
    name: 'Create Quiz',
    icon: 'pe-7s-note2',
    invisible: true,
    component: CreateQuiz
  },
  { redirect: true, path: '/', to: '/dashboard', name: 'Dashboard' }
]

export default dashboardRoutes
