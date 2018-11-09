import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import HomeIcon from '@material-ui/icons/Home';
import HistoryIcon from '@material-ui/icons/History';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {Link} from 'react-router-dom';
// import Icon from '@material-ui/core/Icon';
// import Button from '@material-ui/core/Button';
import routeConf from '../../routes/router-conf';
import '../../styles/components/side-nav/side-nav-list.scss';
import {connect} from 'react-redux';
import actions from '../../redux/action';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        height: 'auto',
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing.unit * 3,
    },
    unnested: {
        paddingLeft: theme.spacing.unit * 2,
    },
});

class SideNavList extends React.Component {
    state = {};
    handleClickList = (stateName) => {
        this.props.onButtonShowSideNav();
        let state = this.state;
        state[stateName] = !state[stateName];
        this.setState(state);
    };
    //渲染菜单
    renderNavList = (route, that) => {
        const {match, classes} = this.props;
        return (<List component="nav">
            {_getListItem(route)}
        </List>);

        function _getListItem(route) {
            let navArr = [];
            for (let key in route) {
                if (!route[key].children) {
                    navArr.push(_getItemByKey(route[key]));
                } else {
                    navArr.push(_getItemNoLink(route[key], route[key].openStateFun, route[key].openState));
                    navArr.push(_getItemChildren(route[key].children, route[key].openState, true));
                }
            }
            return navArr;
        }

        function _getItemByKey(nav) {
            let link = props => <Link to={`${match.url}/${nav['link']}`} {...props} />;
            let className = nav.level ? classes.nested + ' nav-item' : classes.unnested + ' nav-item';
            console.log(nav)
            console.log(className)
            return (<ListItem
                button component={link}
                className={className}
                onClick={that.props.onButtonShowSideNav}>
                <ListItemIcon>
                    {nav['icon']}
                </ListItemIcon>
                <ListItemText inset primary={nav['name']}/>
            </ListItem>);
        }

        function _getItemNoLink(nav, openStateFun, openState) {
            return (
                <ListItem button onClick={() => {
                    that[openStateFun](openState);
                }} className={classes.unnested + ' nav-item ' + openState + 'item'}>
                    <ListItemIcon>
                        {nav['icon']}
                    </ListItemIcon>
                    <ListItemText inset primary={nav['name']}/>
                    {that.state[openState] ? <ExpandLess/> : <ExpandMore/>}
                </ListItem>
            );
        }

        function _getItemChildren(route, openState) {
            return (
                <Collapse in={that.state[openState]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {_getListItem(route)}
                    </List>
                </Collapse>
            );
        }
    }

    render() {
        const {classes} = this.props;
        const HomeLink = props => <Link exact to={'/'} {...props} />;
        const AboutLink = props => <Link exact to={'/about'} {...props} />;
        return (
            <div className={classes.root + ' side-nav-list-wrap'}>
                <List component="nav">
                    <ListItem button component={HomeLink} className="nav-item">
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText inset primary="首页"/>
                    </ListItem>
                </List>
                {this.renderNavList(routeConf.list, this)}
                <List component="nav">
                    <ListItem button component={AboutLink} className="nav-item">
                        <ListItemIcon>
                            <HistoryIcon/>
                        </ListItemIcon>
                        <ListItemText inset primary="关于博客"/>
                    </ListItem>
                </List>
            </div>
        );
    }
}

SideNavList.propTypes = {
    classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
        isHideSideNav: state.reducerSideNav.isHideSideNav,//
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onButtonHideSideNav: () => dispatch(actions.HideSideNav),
        onButtonShowSideNav: () => dispatch(actions.ShowSideNav),
    };
}

const SideNavListWrap = connect(mapStateToProps, mapDispatchToProps)(SideNavList);
export default withStyles(styles)(SideNavListWrap);

