import { createBrowserRouter } from 'react-router';
import { LandingPage } from './pages/landing';
import { RegisterPage } from './pages/register';
import { LoginPage } from './pages/login';
import { SearchPage } from './pages/search';
import { ProfilePage } from './pages/profile';
import { ErrorPage } from './pages/error';
import { NotFoundPage } from './pages/not-found';
import { DesignSystemPage } from './pages/design-system';
import { NotificationsPage } from './pages/notifications';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: LandingPage,
        errorElement: <ErrorPage />,
    },
    {
        path: '/register',
        Component: RegisterPage,
        errorElement: <ErrorPage />,
    },
    {
        path: '/login',
        Component: LoginPage,
        errorElement: <ErrorPage />,
    },
    {
        path: '/search',
        Component: SearchPage,
        errorElement: <ErrorPage />,
    },
    {
        path: '/profile',
        Component: ProfilePage,
        errorElement: <ErrorPage />,
    },
    {
        path: '/notifications',
        Component: NotificationsPage,
        errorElement: <ErrorPage />,
    },

    {
        path: '/design-system',
        Component: DesignSystemPage,
    },

    {
        path: '*',
        Component: NotFoundPage,
    },
]);