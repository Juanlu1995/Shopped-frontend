import React from 'react';

const Breadcrumbs = React.lazy(() => import('./components/Base/Breadcrumbs'));
const Cards = React.lazy(() => import('./components/Base/Cards'));
const Carousels = React.lazy(() => import('./components/Base/Carousels'));
const Collapses = React.lazy(() => import('./components/Base/Collapses'));
const Dropdowns = React.lazy(() => import('./components/Base/Dropdowns'));
const Forms = React.lazy(() => import('./components/Base/Forms'));
const Jumbotrons = React.lazy(() => import('./components/Base/Jumbotrons'));
const ListGroups = React.lazy(() => import('./components/Base/ListGroups'));
const Navbars = React.lazy(() => import('./components/Base/Navbars'));
const Navs = React.lazy(() => import('./components/Base/Navs'));
const Paginations = React.lazy(() => import('./components/Base/Paginations'));
const Popovers = React.lazy(() => import('./components/Base/Popovers'));
const ProgressBar = React.lazy(() => import('./components/Base/ProgressBar'));
const Switches = React.lazy(() => import('./components/Base/Switches'));
const Tables = React.lazy(() => import('./components/Base/Tables'));
const Tabs = React.lazy(() => import('./components/Base/Tabs'));
const Tooltips = React.lazy(() => import('./components/Base/Tooltips'));
const BrandButtons = React.lazy(() => import('./components/Buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./components/Buttons/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./components/Buttons/ButtonGroups'));
const Buttons = React.lazy(() => import('./components/Buttons/Buttons'));
const Charts = React.lazy(() => import('./components/Charts'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./components/Icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./components/Icons/Flags'));
const FontAwesome = React.lazy(() => import('./components/Icons/FontAwesome'));
const SimpleLineIcons = React.lazy(() => import('./components/Icons/SimpleLineIcons'));
const Alerts = React.lazy(() => import('./components/Notifications/Alerts'));
const Badges = React.lazy(() => import('./components/Notifications/Badges'));
const Modals = React.lazy(() => import('./components/Notifications/Modals'));
const Colors = React.lazy(() => import('./components/Theme/Colors'));
const Typography = React.lazy(() => import('./components/Theme/Typography'));
const Widgets = React.lazy(() => import('./components/Widgets/Widgets'));
const Users = React.lazy(() => import('./views/Users'));
const User = React.lazy(() => import('./views/Users/User'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard },
    { path: '/theme', exact: true, name: 'Theme', component: Colors },
    { path: '/theme/colors', name: 'Colors', component: Colors },
    { path: '/theme/typography', name: 'Typography', component: Typography },
    { path: '/base', exact: true, name: 'Base', component: Cards },
    { path: '/base/cards', name: 'Cards', component: Cards },
    { path: '/base/forms', name: 'Forms', component: Forms },
    { path: '/base/switches', name: 'Switches', component: Switches },
    { path: '/base/tables', name: 'Tables', component: Tables },
    { path: '/base/tabs', name: 'Tabs', component: Tabs },
    { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
    { path: '/base/carousels', name: 'Carousel', component: Carousels },
    { path: '/base/collapses', name: 'Collapse', component: Collapses },
    { path: '/base/dropdowns', name: 'Dropdowns', component: Dropdowns },
    { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
    { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
    { path: '/base/navbars', name: 'Navbars', component: Navbars },
    { path: '/base/navs', name: 'Navs', component: Navs },
    { path: '/base/paginations', name: 'Paginations', component: Paginations },
    { path: '/base/popovers', name: 'Popovers', component: Popovers },
    { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
    { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
    { path: '/buttons', exact: true, name: 'Buttons', component: Buttons },
    { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
    { path: '/buttons/button-dropdowns', name: 'Button Dropdowns', component: ButtonDropdowns },
    { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
    { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
    { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
    { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
    { path: '/icons/flags', name: 'Flags', component: Flags },
    { path: '/icons/font-awesome', name: 'Font Awesome', component: FontAwesome },
    { path: '/icons/simple-line-icons', name: 'Simple Line Icons', component: SimpleLineIcons },
    { path: '/notifications', exact: true, name: 'Notifications', component: Alerts },
    { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
    { path: '/notifications/badges', name: 'Badges', component: Badges },
    { path: '/notifications/modals', name: 'Modals', component: Modals },
    { path: '/widgets', name: 'Widgets', component: Widgets },
    { path: '/charts', name: 'Charts', component: Charts },
    { path: '/clientes', exact: true,  name: 'Users', component: Users },
    { path: '/clientes/:id', exact: true, name: 'User Details', component: User },
];

export default routes;
