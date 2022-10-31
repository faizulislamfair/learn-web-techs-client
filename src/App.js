import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import FAQ from './components/FAQ/FAQ';
import Main from './layout/Main';
import Blog from './components/Blog/Blog';
import RouteNotFound from './routes/RouteNotFound/RouteNotFound';
import CourseDetails from './components/CourseDetails/CourseDetails';
import CoursePremiumDetails from './components/CoursePremiumDetails/CoursePremiumDetails';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import PrivateRoute from './routes/PrivateRoute/PrivateRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        { path: '/', element: <Home></Home> },
        {
          path: '/courses',
          loader: async () => {
            return fetch('https://learn-web-techs-server.vercel.app/courses');
          },
          element: <Courses></Courses>
        },
        {
          path: '/course/:id',
          loader: async ({ params }) => {
            return fetch(`https://learn-web-techs-server.vercel.app/course/${params.id}`);
          },
          element: <CourseDetails></CourseDetails>
        },
        {
          path: '/coursePremium/:id',
          loader: async ({ params }) => {
            return fetch(`https://learn-web-techs-server.vercel.app/coursePremium/${params.id}`);
          },
          element: <PrivateRoute><CoursePremiumDetails></CoursePremiumDetails></PrivateRoute>
        },
        { path: '/faq', element: <FAQ></FAQ> },
        { path: '/blog', element: <Blog></Blog> },
        { path: '/login', element: <Login></Login> },
        { path: '/signup', element: <SignUp></SignUp> }
      ]
    },
    { path: '*', element: <RouteNotFound></RouteNotFound> }
  ])


  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
