import math from 'mathjs'

export default class CalcEngine {
    constructor() {
        this.curValue = ''
        this.result = ''
        this.history = []
        this.register = []
    }

    input=(d)=>{
        if(isNaN(d)){
            throw Error('only numeric is allowed')
        }
        if(this.curValue.indexOf('.')>=0){
            return
        }
        if (this.curValue === '') {
            this.curValue += '0.';
        } else {
            this.curValue += '.';
        }

        this.curValue+=d
    }

    getValue = () => {
        return this.curValue
    }

    getHistory = () => {
        return this.history
    }
    getResult = () => {
        return this.result
    }
    getExpression = () => {
        return this.register.join(' ')
    }

    toggleSign() {
        this.curValue = (parseFloat(this.curValue) * (-1)).toString();
    }

    loadHistory(index) {
        // this.curValue = this.history[index].result.toString();
    }

    add = () => {
        if (this.curValue === '')
            return
        this.register.push(this.curValue).push('+')
        this.curValue = ''
    }
    subtract = () => {
        if (this.curValue === '')
            return
        this.register.push(this.curValue).push('-')
        this.curValue = ''
    }
    multiply = () => {
        if (this.curValue === '')
            return
        this.register.push(this.curValue).push('*')
        this.curValue = ''
    }
    divide = () => {
        if (this.curValue === '')
            return
        this.register.push(this.curValue).push('/')
        this.curValue = ''
    }
    equals = () => {
        if (this.curValue === '')
            return
        const expression = this.getExpression()
        const res=this.result = math.eval(expression)
        this.curValue = this.result.toString()
        this.history.splice(0, 0, {expression, res})
        this.register = []
    }
}