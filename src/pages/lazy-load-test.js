/**
 * Created by zhouli on 18/9/17
 */
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/layout/left-right.scss';
import {connect} from 'react-redux';

class LeftRight extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
    }

    render = () => {
        return ( <div className="left-right-wrap">
            <div className={this.props.isHideSideNav ? 'left left-w-80' : 'left'}>{this.props.left}</div>
            <div className={this.props.isHideSideNav ? 'right right-w-80' : 'right'}>{this.props.right}</div>
            <div className="clear"></div>
        </div> );
    }
}

//for eslint
LeftRight.propTypes = {
    left: PropTypes.any,
    right: PropTypes.any,
    isHideSideNav: PropTypes.any,
};

function mapStateToProps(state) {
    return {
        isHideSideNav: state.reducerSideNav.isHideSideNav,//
    };
}

function mapDispatchToProps(dispatch) {
    return {dispatch};
}

const LeftRightWrap = connect(mapStateToProps, mapDispatchToProps)(LeftRight);
export default LeftRightWrap;

