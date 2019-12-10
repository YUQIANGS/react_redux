import React,{ Component } from 'react';
import Counter from './counter';
import PropTypes  from 'prop-types';

class CounterPanel extends Component{
    static contextTypes = {
        store:PropTypes.object
    }
    constructor(){
        super(...arguments);
        this.state = this.getOwnState();
    }
    getOwnState = () => {
        const obj = this.context.store.getState().counter;
        let sum = 0;
        Object.keys(obj).map((item) => {
            sum += obj[item];
        });
        return Object.assign({},obj,{sum: sum});
    }
    onChange = () => {
        const obj = this.getOwnState();
        this.setState(obj);
    }
    componentDidMount(){
       this.context.store.subscribe(this.onChange);
    }
    render(){
        return(
            <div>
            <Counter name="first" count={this.state.first}/>
            <Counter name="second" count={this.state.second}/>
            <Counter name="thrid" count={this.state.thrid}/>
            <hr />
            total num:{this.state.sum}
         </div>
        );
    }
}

export default CounterPanel