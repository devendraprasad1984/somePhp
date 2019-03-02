import App0Starter from "./basicApps/app0/app0starter";
import App1Page from "./basicApps/app1/app1";
import App2Page from "./basicApps/app2/app2";
import App3Page from "./basicApps/app3/app3page";
import App4ReactAgGrid from "./basicApps/app4/app4";
import App5Page from "./basicApps/app5/app5";
import App6Page from "./basicApps/app6/app6Page";

export const SIGN_IN='SIGN_IN'
export const SIGN_OUT='SIGN_OUT'
export const CREATE_STREAM='CREATE_STREAM'
export const FETCH_STREAMS='FETCH_STREAMS'
export const FETCH_STREAM_BY_ID='FETCH_STREAM_BY_ID'
export const EDIT_STREAM_BY_ID='EDIT_STREAM_BY_ID'
export const DELETE_STREAM_BY_ID='DELETE_STREAM_BY_ID'


export const AppPages=[
    {name:'0',text:'Base',path:'/apps/app0', component:App0Starter}
    ,{name:'1',text:'Counter',path:'/apps/app1', component:App1Page}
    ,{name:'2',text:'Timer',path:'/apps/app2', component:App2Page}
    ,{name:'3',text:'Calci',path:'/apps/app3', component:App3Page}
    ,{name:'4',text:'Grid',path:'/apps/app4', component:App4ReactAgGrid}
    ,{name:'5',text:'QRCode',path:'/apps/app5', component:App5Page}
    ,{name:'6',text:'FX',path:'/apps/app6', component:App6Page}
]