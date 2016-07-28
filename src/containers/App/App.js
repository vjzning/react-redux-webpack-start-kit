import  React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {load, loadServer} from 'redux/modules/info';
import {asyncConnect} from 'redux-async-connect';
@connect(state => ({
    data: state.info,
    svr: state.info.data
}), {
    load,
   loadServer
})
export default class  App extends  React.Component {
    static propsTypes = {
      name: React.PropTypes.string
    };
    componentDidMount() {
      this.props.loadServer().then((...par) => {
        console.log(par);
      });
    }
    handleChange(e) {
        this.props.load(e.target.value);
    }
    render() {
      const lunch = this.props.lunch;
      console.log(lunch);
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
                <div>
                  {JSON.stringify(this.props.svr)}
                </div>
            </div>
        )
    }
}