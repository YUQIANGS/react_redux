import React,{ Component } from 'react';
import PropTypes  from 'prop-types';
import * as actions from '../action';

class Counter extends Component{
    static contextTypes = {
        store: PropTypes.object
    }
    constructor(){
        super(...arguments);
        this.state = {
            count: this.props.count
        };
    }
    increase = () => {
        this.context.store.dispatch(actions.increase(this.props.name));
    }
    decrease = () => {
        this.context.store.dispatch(actions.decrease(this.props.name));
    }
    componentWillReceiveProps(nextProps) {
        const { count } = this.state
        const newdata = nextProps.count.toString()
        if (count.toString() !== newdata) {
          this.setState({
            count: nextProps.count,
          })
        }
    }
    render(){
        return(
            <div>
                <button style={{margin: "0 5px 0 5px"}} onClick={this.increase}>+</button><button onClick={this.decrease}>-</button>{this.state.count}
            </div>
        );
    }
}

export default Counter;