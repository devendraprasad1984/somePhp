import React from 'react'

export default class CalendarTest extends React.Component{
    componentDidMount() {
        this.initDatePicker()
    }

    initDatePicker=()=>{
        const dtpick=window.jQuery(this.refs.refdatepicker)
        console.log("date pick values",dtpick)
        dtpick.datepicker()
    }

    render(){
        return(
            <div>
                <span>Calendar component from calendar js standalone and uses jQuery plugin standalone in jsx to render</span>
                <div>
                    datepicker: <input type='text' ref='refdatepicker' />
                </div>
            </div>
        )
    }
}