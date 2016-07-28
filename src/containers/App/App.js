import  React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {load} from 'redux/modules/info';
@connect(state => ({
    data: state.info
}), {
    load
})
export default class  App extends  React.Component {
    static propsTypes = {
      name: React.PropTypes.string
    };
    handleChange(e) {
        this.props.load(e.target.value);
    }
    render() {
        return (
            <div>
                App test async 
                <Link activeClassName="active" to="/" onlyActiveOnIndex={true}>home</Link>
                <Link activeClassName="active" to="/about">about</Link>
                <Link activeClassName="active" to="/info">info</Link>
                {this.props.children}
                a:{this.props.data.a}
                b: {this.props.data.b}
                <input  onChange={this.handleChange.bind(this)}/>
            </div>
        )
    }
}