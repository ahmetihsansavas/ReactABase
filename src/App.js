import React, { useState, useEffect, useRef } from 'react';
import { classNames } from 'primereact/utils';
import { Route, Routes, useLocation } from 'react-router-dom';

import AppTopbar from './AppTopbar';
import AppFooter from './AppFooter';
import AppConfig from './AppConfig';
import AppRightMenu from './AppRightMenu';
import AppBreadcrumb from './AppBreadcrumb';
import AppMenu from './AppMenu';

import Dashboard from './components/Dashboard';
import FormLayoutDemo from './components/FormLayoutDemo';
import InputDemo from './components/InputDemo';
import FloatLabelDemo from './components/FloatLabelDemo';
import InvalidStateDemo from './components/InvalidStateDemo';
import ButtonDemo from './components/ButtonDemo';
import TableDemo from './components/TableDemo';
import ListDemo from './components/ListDemo';
import TreeDemo from './components/TreeDemo';
import PanelDemo from './components/PanelDemo';
import OverlayDemo from './components/OverlayDemo';
import MediaDemo from './components/MediaDemo';
import MenuDemo from './components/MenuDemo';
import MessagesDemo from './components/MessagesDemo';
import FileDemo from './components/FileDemo';
import ChartDemo from './components/ChartDemo';
import MiscDemo from './components/MiscDemo';
import Documentation from './components/Documentation';
import IconsDemo from './utilities/IconsDemo';
import CrudDemo from './pages/CrudDemo';
import CalendarDemo from './pages/CalendarDemo';
import TimelineDemo from './pages/TimelineDemo';
import Invoice from './pages/Invoice';
import Help from './pages/Help';
import EmptyPage from './pages/EmptyPage';
import BlocksDemo from './components/BlocksDemo';

import PrimeReact from 'primereact/api';
import { Tooltip } from 'primereact/tooltip';

import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './App.scss';
import { User } from './pages/User';
import { Deneme } from './pages/Deneme';

const App = (props) => {
    const [rightMenuActive, setRightMenuActive] = useState(false);
    const [configActive, setConfigActive] = useState(false);
    const [menuMode, setMenuMode] = useState('sidebar');
    const [overlayMenuActive, setOverlayMenuActive] = useState(false);
    const [ripple, setRipple] = useState(true);
    const [sidebarStatic, setSidebarStatic] = useState(false);
    const [staticMenuDesktopInactive, setStaticMenuDesktopInactive] = useState(false);
    const [staticMenuMobileActive, setStaticMenuMobileActive] = useState(false);
    const [menuActive, setMenuActive] = useState(false);
    const [searchActive, setSearchActive] = useState(false);
    const [topbarMenuActive, setTopbarMenuActive] = useState(false);
    const [sidebarActive, setSidebarActive] = useState(false);
    const [pinActive, setPinActive] = useState(false);
    const [activeInlineProfile, setActiveInlineProfile] = useState(false);
    const [resetActiveIndex, setResetActiveIndex] = useState(null);
    const copyTooltipRef = useRef();
    const location = useLocation();

    PrimeReact.ripple = true;

    const menu = [
        {
            label: 'Favorites',
            icon: 'pi pi-home',
            items: [{ label: 'Dashboard', icon: 'pi pi-home', to: '/' }]
        },
        {
            label: 'UI Kit',
            icon: 'pi pi-star',
            items: [
                { label: 'Form Layout', icon: 'pi pi-id-card', to: '/formlayout' },
                { label: 'Input', icon: 'pi pi-check-square', to: '/input' },
                { label: 'Float Label', icon: 'pi pi-bookmark', to: '/floatlabel' },
                { label: 'Invalid State', icon: 'pi pi-exclamation-circle', to: '/invalidstate' },
                { label: 'Button', icon: 'pi pi-mobile', to: '/button', className: 'rotated-icon' },
                { label: 'Table', icon: 'pi pi-table', to: '/table' },
                { label: 'List', icon: 'pi pi-list', to: '/list' },
                { label: 'Tree', icon: 'pi pi-share-alt', to: '/tree' },
                { label: 'Panel', icon: 'pi pi-tablet', to: '/panel' },
                { label: 'Overlay', icon: 'pi pi-clone', to: '/overlay' },
                { label: 'Media', icon: 'pi pi-image', to: '/media' },
                { label: 'Menu', icon: 'pi pi-bars', to: '/menu' },
                { label: 'Message', icon: 'pi pi-comment', to: '/message' },
                { label: 'File', icon: 'pi pi-file', to: '/file' },
                { label: 'Chart', icon: 'pi pi-chart-bar', to: '/chart' },
                { label: 'Misc', icon: 'pi pi-circle', to: '/misc' }
            ]
        },
        {
            label: 'PrimeBlocks',
            icon: 'pi pi-prime',
            items: [
                { label: 'Free Blocks', icon: 'pi pi-eye', to: '/blocks', badge: 'NEW' },
                { label: 'All Blocks', icon: 'pi pi-globe', url: 'https://www.primefaces.org/primeblocks-react', target: '_blank' }
            ]
        },
        {
            label: 'Utilities',
            icon: 'pi pi-compass',
            items: [
                { label: 'Icons', icon: 'pi pi-prime', to: '/icons' },
                { label: 'PrimeFlex', icon: 'pi pi-desktop', url: 'https://www.primefaces.org/primeflex', target: '_blank' },
                { label: 'Figma', icon: 'pi pi-pencil', url: 'https://www.figma.com/file/two0OGwOwHfq0sdjeK34l0/Preview-%7C-Atlantis-2022?node-id=15%3A1427&t=2lNJ5EzW0xuvQWdm-1', target: '_blank' }
            ]
        },
        {
            label: 'Pages',
            icon: 'pi pi-briefcase',
            items: [
                { label: 'Crud', icon: 'pi pi-pencil', to: '/crud' },
                { label: 'Calendar', icon: 'pi pi-calendar-plus', to: '/calendar' },
                { label: 'Timeline', icon: 'pi pi-calendar', to: '/timeline' },
                { label: 'Landing', icon: 'pi pi-globe', url: 'assets/pages/landing.html', target: '_blank' },
                { label: 'Login', icon: 'pi pi-sign-in', to: '/login' },
                { label: 'Invoice', icon: 'pi pi-dollar', to: '/invoice' },
                { label: 'Help', icon: 'pi pi-question-circle', to: '/help' },
                { label: 'Error', icon: 'pi pi-times-circle', to: '/error' },
                { label: 'Not Found', icon: 'pi pi-exclamation-circle', to: '/notfound' },
                { label: 'Access Denied', icon: 'pi pi-lock', to: '/access' },
                { label: 'Empty Page', icon: 'pi pi-circle', to: '/empty' },
                { label: 'User', icon: 'pi pi-user', to: '/user' },
                { label: 'Deneme', icon: 'pi pi-user', to: '/deneme' }
            ]
        },
        {
            label: 'Hierarchy',
            icon: 'pi pi-align-left',
            items: [
                {
                    label: 'Submenu 1',
                    icon: 'pi pi-align-left',
                    items: [
                        {
                            label: 'Submenu 1.1',
                            icon: 'pi pi-align-left',
                            items: [
                                { label: 'Submenu 1.1.1', icon: 'pi pi-align-left' },
                                { label: 'Submenu 1.1.2', icon: 'pi pi-align-left' },
                                { label: 'Submenu 1.1.3', icon: 'pi pi-align-left' }
                            ]
                        },
                        {
                            label: 'Submenu 1.2',
                            icon: 'pi pi-align-left',
                            items: [
                                { label: 'Submenu 1.2.1', icon: 'pi pi-align-left' },
                                { label: 'Submenu 1.2.2', icon: 'pi pi-align-left' }
                            ]
                        }
                    ]
                },
                {
                    label: 'Submenu 2',
                    icon: 'pi pi-align-left',
                    items: [
                        {
                            label: 'Submenu 2.1',
                            icon: 'pi pi-align-left',
                            items: [
                                { label: 'Submenu 2.1.1', icon: 'pi pi-align-left' },
                                { label: 'Submenu 2.1.2', icon: 'pi pi-align-left' },
                                { label: 'Submenu 2.1.3', icon: 'pi pi-align-left' }
                            ]
                        },
                        {
                            label: 'Submenu 2.2',
                            icon: 'pi pi-align-left',
                            items: [
                                { label: 'Submenu 2.2.1', icon: 'pi pi-align-left' },
                                { label: 'Submenu 2.2.2', icon: 'pi pi-align-left' }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            label: 'Start',
            icon: 'pi pi-download',
            items: [
                { label: 'Documentation', icon: 'pi pi-question', to: '/documentation' },
                {
                    label: 'Buy Now',
                    icon: 'pi pi-shopping-cart',
                    command: () => {
                        window.location = 'https://www.primefaces.org/store';
                    }
                }
            ]
        }
    ];

    const routes = [
        { parent: 'Dashboard', label: 'Sales Dashboard' },
        { parent: 'UI Kit', label: 'Form Layout' },
        { parent: 'UI Kit', label: 'Input' },
        { parent: 'UI Kit', label: 'Float Label' },
        { parent: 'UI Kit', label: 'Invalid State' },
        { parent: 'UI Kit', label: 'Button' },
        { parent: 'UI Kit', label: 'Table' },
        { parent: 'UI Kit', label: 'List' },
        { parent: 'UI Kit', label: 'Panel' },
        { parent: 'UI Kit', label: 'Tree' },
        { parent: 'UI Kit', label: 'Overlay' },
        { parent: 'UI Kit', label: 'Menu' },
        { parent: 'UI Kit', label: 'Media' },
        { parent: 'UI Kit', label: 'Message' },
        { parent: 'UI Kit', label: 'File' },
        { parent: 'UI Kit', label: 'Chart' },
        { parent: 'UI Kit', label: 'Misc' },
        { parent: 'UI Blocks', label: 'Blocks' },
        { parent: 'Utilities', label: 'Icons' },
        { parent: 'Pages', label: 'Crud' },
        { parent: 'Pages', label: 'Calendar' },
        { parent: 'Pages', label: 'Timeline' },
        { parent: 'Pages', label: 'Invoice' },
        { parent: 'Pages', label: 'Login' },
        { parent: 'Pages', label: 'Help' },
        { parent: 'Pages', label: 'Empty' },
        { parent: 'Pages', label: 'Access' },
        { parent: 'Start', label: 'Documentation' }
    ];

    let rightMenuClick;
    let configClick;
    let menuClick;
    let searchClick = false;
    let topbarItemClick;

    useEffect(() => {
        copyTooltipRef && copyTooltipRef.current && copyTooltipRef.current.updateTargetEvents();
        props.onColorSchemeChange("light")
    }, [location]);

    useEffect(() => {
        setResetActiveIndex(true);
        setMenuActive(false);
    }, [menuMode]);

    const onDocumentClick = () => {
        if (!searchClick && searchActive) {
            onSearchHide();
        }

        if (!topbarItemClick) {
            setTopbarMenuActive(false);
        }

        if (!menuClick) {
            if (isHorizontal() || isSlim()) {
                setMenuActive(false);
                setResetActiveIndex(true);
            }

            if (overlayMenuActive || staticMenuMobileActive) {
                setOverlayMenuActive(false);
                setStaticMenuMobileActive(false);
            }

            hideOverlayMenu();
            unblockBodyScroll();
        }

        if (!rightMenuClick) {
            setRightMenuActive(false);
        }

        if (configActive && !configClick) {
            setConfigActive(false);
        }

        topbarItemClick = false;
        menuClick = false;
        configClick = false;
        rightMenuClick = false;
        searchClick = false;
    };

    const onSearchHide = () => {
        setSearchActive(false);
        searchClick = false;
    };

    const onMenuModeChange = (menuMode) => {
        setMenuMode(menuMode);
        setOverlayMenuActive(false);
    };

    const onRightMenuButtonClick = () => {
        rightMenuClick = true;
        setRightMenuActive(true);
    };

    const onRightMenuClick = () => {
        rightMenuClick = true;
    };

    const onRightMenuActiveChange = (active) => {
        setRightMenuActive(active);
    };

    const onConfigClick = () => {
        configClick = true;
    };

    const onConfigButtonClick = (event) => {
        setConfigActive((prevState) => !prevState);
        configClick = true;
        event.preventDefault();
    };

    const onRippleChange = (e) => {
        PrimeReact.ripple = e.value;
        setRipple(e.value);
    };

    const onMenuButtonClick = (event) => {
        menuClick = true;

        if (isOverlay()) {
            setOverlayMenuActive((prevState) => !prevState);
        }

        if (isDesktop()) {
            setStaticMenuDesktopInactive((prevState) => !prevState);
        } else {
            setStaticMenuMobileActive((prevState) => !prevState);
        }

        event.preventDefault();
    };

    const hideOverlayMenu = () => {
        setOverlayMenuActive(false);
        setStaticMenuMobileActive(false);
    };

    const onTopbarItemClick = (event) => {
        topbarItemClick = true;
        setTopbarMenuActive((prevState) => !prevState);
        hideOverlayMenu();
        event.preventDefault();
    };

    const onToggleMenu = (event) => {
        menuClick = true;

        if (overlayMenuActive) {
            setOverlayMenuActive(false);
        }

        if (sidebarActive) {
            setSidebarStatic((prevState) => !prevState);
        }

        event.preventDefault();
    };

    const onSidebarMouseOver = () => {
        if (menuMode === 'sidebar' && !sidebarStatic) {
            setSidebarActive(isDesktop());
            setTimeout(() => {
                setPinActive(isDesktop());
            }, 200);
        }
    };

    const onSidebarMouseLeave = () => {
        if (menuMode === 'sidebar' && !sidebarStatic) {
            setTimeout(() => {
                setSidebarActive(false);
                setPinActive(false);
            }, 250);
        }
    };

    const onMenuClick = () => {
        menuClick = true;
    };

    const onChangeActiveInlineMenu = (event) => {
        setActiveInlineProfile((prevState) => !prevState);
        event.preventDefault();
    };

    const onRootMenuItemClick = () => {
        setMenuActive((prevState) => !prevState);
    };

    const onMenuItemClick = (event) => {
        if (!event.item.items) {
            hideOverlayMenu();
            setResetActiveIndex(true);
        }

        if (!event.item.items && (isHorizontal() || isSlim())) {
            setMenuActive(false);
        }
    };

    const isHorizontal = () => {
        return menuMode === 'horizontal';
    };

    const isSlim = () => {
        return menuMode === 'slim';
    };

    const isOverlay = () => {
        return menuMode === 'overlay';
    };

    const isDesktop = () => {
        return window.innerWidth > 991;
    };

    const onInputClick = () => {
        searchClick = true;
    };

    const breadcrumbClick = () => {
        searchClick = true;
        setSearchActive(true);
    };

    const unblockBodyScroll = () => {
        if (document.body.classList) {
            document.body.classList.remove('blocked-scroll');
        } else {
            document.body.className = document.body.className.replace(new RegExp('(^|\\b)' + 'blocked-scroll'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    };

    const layoutClassName = classNames('layout-wrapper', {
        'layout-static': menuMode === 'static',
        'layout-overlay': menuMode === 'overlay',
        'layout-overlay-active': overlayMenuActive,
        'layout-slim': menuMode === 'slim',
        'layout-horizontal': menuMode === 'horizontal',
        'layout-active': menuActive,
        'layout-mobile-active': staticMenuMobileActive,
        'layout-sidebar': menuMode === 'sidebar',
        'layout-sidebar-static': menuMode === 'sidebar' && sidebarStatic,
        'layout-static-inactive': staticMenuDesktopInactive && menuMode === 'static',
        'p-ripple-disabled': !ripple
    });

    return (
        <div className={layoutClassName} onClick={onDocumentClick}>
            <Tooltip ref={copyTooltipRef} target=".block-action-copy" position="bottom" content="Copied to clipboard" event="focus" />

            <div className="layout-main">
                <AppTopbar
                    items={menu}
                    menuMode={menuMode}
                    colorScheme={props.colorScheme}
                    menuActive={menuActive}
                    topbarMenuActive={topbarMenuActive}
                    activeInlineProfile={activeInlineProfile}
                    onTopbarItemClick={onTopbarItemClick}
                    onMenuButtonClick={onMenuButtonClick}
                    onSidebarMouseOver={onSidebarMouseOver}
                    onSidebarMouseLeave={onSidebarMouseLeave}
                    onToggleMenu={onToggleMenu}
                    onChangeActiveInlineMenu={onChangeActiveInlineMenu}
                    onMenuClick={onMenuClick}
                    onMenuItemClick={onMenuItemClick}
                    onRootMenuItemClick={onRootMenuItemClick}
                    resetActiveIndex={resetActiveIndex}
                />

                <AppMenu
                    model={menu}
                    onRootMenuItemClick={onRootMenuItemClick}
                    onMenuItemClick={onMenuItemClick}
                    onToggleMenu={onToggleMenu}
                    onMenuClick={onMenuClick}
                    menuMode={menuMode}
                    colorScheme={props.colorScheme}
                    menuActive={menuActive}
                    sidebarActive={sidebarActive}
                    sidebarStatic={sidebarStatic}
                    pinActive={pinActive}
                    onSidebarMouseLeave={onSidebarMouseLeave}
                    onSidebarMouseOver={onSidebarMouseOver}
                    activeInlineProfile={activeInlineProfile}
                    onChangeActiveInlineMenu={onChangeActiveInlineMenu}
                    resetActiveIndex={resetActiveIndex}
                />

                <AppBreadcrumb routes={routes} onMenuButtonClick={onMenuButtonClick} menuMode={menuMode} onRightMenuButtonClick={onRightMenuButtonClick} onInputClick={onInputClick} searchActive={searchActive} breadcrumbClick={breadcrumbClick} />

                <div className="layout-main-content">
                    <Routes>
                        <Route path="/" exact="true" element={<Dashboard />} />
                        <Route path="/documentation" element={<Documentation />} />
                        <Route path="/formlayout" element={<FormLayoutDemo />} />
                        <Route path="/floatlabel" element={<FloatLabelDemo />} />
                        <Route path="/input" element={<InputDemo />} />
                        <Route path="/invalidstate" element={<InvalidStateDemo />} />
                        <Route path="/button" element={<ButtonDemo />} />
                        <Route path="/table" element={<TableDemo />} />
                        <Route path="/list" element={<ListDemo />} />
                        <Route path="/tree" element={<TreeDemo />} />
                        <Route path="/panel" element={<PanelDemo />} />
                        <Route path="/overlay" element={<OverlayDemo />} />
                        <Route path="/menu/*" element={<MenuDemo />} />
                        <Route path="/message" element={<MessagesDemo />} />
                        <Route path="/media" element={<MediaDemo />} />
                        <Route path="/file" element={<FileDemo />} />
                        <Route path="/chart" element={<ChartDemo colorMode={props.colorScheme} location={location} />} />
                        <Route path="/misc" element={<MiscDemo />} />
                        <Route path="/blocks" element={<BlocksDemo />} />
                        <Route path="/icons" element={<IconsDemo />} />
                        <Route path="/crud" element={<CrudDemo />} />
                        <Route path="/calendar" element={<CalendarDemo />} />
                        <Route path="/help" element={<Help />} />
                        <Route path="/invoice" element={<Invoice colorMode={props.colorScheme} location={location} />} />
                        <Route path="/empty" element={<EmptyPage />} />
                        <Route path="/timeline" element={<TimelineDemo />} />
                        <Route path="/user" element={<User />} />
                        <Route path="/deneme" element={<Deneme />} />
                    </Routes>
                </div>

                <AppFooter colorScheme={props.colorScheme} />
            </div>

            <AppRightMenu rightMenuActive={rightMenuActive} onRightMenuClick={onRightMenuClick} onRightMenuActiveChange={onRightMenuActiveChange} />

            <AppConfig
                configActive={configActive}
                onConfigButtonClick={onConfigButtonClick}
                onConfigClick={onConfigClick}
                menuMode={menuMode}
                changeMenuMode={onMenuModeChange}
                colorScheme={props.colorScheme}
                changeColorScheme={props.onColorSchemeChange}
                theme={props.theme}
                changeTheme={props.onMenuThemeChange}
                componentTheme={props.componentTheme}
                changeComponentTheme={props.onComponentThemeChange}
                ripple={ripple}
                onRippleChange={onRippleChange}
            />
        </div>
    );
};

export default App;
