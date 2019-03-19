import App0Starter from "./basicApps/app0/app0starter";
import App1Page from "./basicApps/app1/app1";
import App2Page from "./basicApps/app2/app2";
import App3Page from "./basicApps/app3/app3page";
import App4ReactAgGrid from "./basicApps/app4/app4";
import App5Page from "./basicApps/app5/app5";
import App6Page from "./basicApps/app6/app6Page";
import App from "./components/App";
import ComponentsTest from "./components/components-test";
import {AppSeachBar} from "./components/AppSearchBar";
import {AppVideoComponent} from "./components/appVideoComponent";
import {AppSongs} from "./components/AppSongs";
import {AppBlogPosts} from "./components/AppBlogPosts";
import AppTwitchTV from "./components/AppTwitchTV";
import AppContextTest from "./components/app_context_test";
import HooksApp from "./components/App_Hooks";
import {SeasonsComponent} from "./components/seasons";

export const SIGN_IN = 'SIGN_IN'
export const SIGN_OUT = 'SIGN_OUT'
export const CREATE_STREAM = 'CREATE_STREAM'
export const FETCH_STREAMS = 'FETCH_STREAMS'
export const FETCH_STREAM_BY_ID = 'FETCH_STREAM_BY_ID'
export const EDIT_STREAM_BY_ID = 'EDIT_STREAM_BY_ID'
export const DELETE_STREAM_BY_ID = 'DELETE_STREAM_BY_ID'

// export const BASE_ROUTE_HOME = `${process.env.PUBLIC_URL}`
// export const BASE_ROUTE_HOME = 'http://localhost'
export let BASE_ROUTE_HOME = ''
export const BASE_ROUTE_DIR = '/react-build'
// if(window.location.href.indexOf('//localhost')>0){
//     BASE_ROUTE_HOME = 'http://localhost'
// }else if(window.location.href.indexOf('dpresume.com')>0){
//     BASE_ROUTE_HOME = 'http://dpresume.com'
// }

const appPageText =`${BASE_ROUTE_HOME}${BASE_ROUTE_DIR}/apps`
const practicePageText = `${BASE_ROUTE_HOME}${BASE_ROUTE_DIR}/practice`

// const appPageText ='/apps'
// const practicePageText = '/practice'

export const AppPages = [
    {name: '0', text: 'Base', path: `${appPageText}/app0`, component: App0Starter}
    , {name: '1', text: 'Counter', path: `${appPageText}/app1`, component: App1Page}
    , {name: '2', text: 'Timer', path: `${appPageText}/app2`, component: App2Page}
    , {name: '3', text: 'Calci', path: `${appPageText}/app3`, component: App3Page}
    , {name: '4', text: 'Grid', path: `${appPageText}/app4`, component: App4ReactAgGrid}
    , {name: '5', text: 'QRCode', path: `${appPageText}/app5`, component: App5Page}
    , {name: '6', text: 'FX', path: `${appPageText}/app6`, component: App6Page}
]

export const PracticePages = [
    {name: '0', text: 'Home', path: practicePageText + '/baseApp', component: App}
    , {name: '1', text: 'Test', path: practicePageText + '/ComponentsTest', component: ComponentsTest}
    , {name: '2', text: 'Search Bar', path: practicePageText + '/AppSeachBar', component: AppSeachBar}
    , {name: '3', text: 'Video App', path: practicePageText + '/AppVideoComponent', component: AppVideoComponent}
    , {name: '4', text: 'Songs App', path: practicePageText + '/AppSongs', component: AppSongs}
    , {name: '5', text: 'Blogs', path: practicePageText + '/AppBlogPosts', component: AppBlogPosts}
    , {name: '6', text: 'Streaming', path: practicePageText + '/AppTwitchTV', component: AppTwitchTV}
    , {name: '7', text: 'Contexts', path: practicePageText + '/AppContextTest', component: AppContextTest}
    , {name: '8', text: 'Hooks', path: practicePageText + '/HooksApp', component: HooksApp}
    , {name: '9', text: 'Seasons', path: practicePageText + '/SeasonsComponent', component: SeasonsComponent}
]

