import React from 'react'
import CalcKeypad from "./CalcKeypad";
import {CalcHeader} from "./calcHeader";
// import CalcEngine from './CalcEngine'

// const calcEngine=new CalcEngine()

export default class CalcDisplay extends React.Component{
    render(){
        return(
            <div>
                <CalcHeader title="Calci"/>
                <CalcKeypad/>
            </div>
        )
    }
}