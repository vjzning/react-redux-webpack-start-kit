import React from 'react';
export default class About extends React.Component {
    componentDidMount() {
        console.log('did mount about');
    }
    render() {
        console.log('111');
        return (
            <div>about</div>
        );
    }
}