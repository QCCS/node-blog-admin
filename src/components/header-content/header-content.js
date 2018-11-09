/**
 * Created by zhouli on 18/9/19
 */
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {withStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Slide from '@material-ui/core/Slide';
import CloseIcon from '@material-ui/icons/Close';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import {connect} from 'react-redux';
import actions from '../../redux/action';
import {loginService} from '../../service/api';

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

const styles = theme => ({
    root: {
        width: '100%',
    },
    appBar: {
        position: 'relative',
    },
    flex: {
        flex: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: 20,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    paperInner: {},

    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
});

class HeaderContent extends React.Component {
    state = {
        anchorEl: null,
        mobileMoreAnchorEl: null,
        openDialog: false,
        checkedPhone: false,
        checkedEmail: false,

        mobile: "",
        password: "",
    };

    handleProfileMenuOpen = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleMenuClose = () => {
        this.setState({anchorEl: null});
        this.handleMobileMenuClose();
    };

    handleMobileMenuOpen = event => {
        this.setState({mobileMoreAnchorEl: event.currentTarget});
    };

    handleMobileMenuClose = () => {
        this.setState({mobileMoreAnchorEl: null});
    };

    handleLogin = () => {
        this.setState({
            openDialog: true,
            anchorEl: null
        });

    }
    handleClose = () => {
        this.setState({openDialog: false});
    }
    handleCloseLogout = () => {
        this.setState({anchorEl: false});
        // this.props.onButtonHideClick();
        this.loginOutAction()
    }
    handleChangePhone = () => {
        this.setState({
            checkedPhone: true,
            checkedEmail: false
        });
        this.props.onButtonShowClick();
    }
    handleChangeEmail = () => {
        this.setState({
            checkedPhone: false,
            checkedEmail: true
        });
        this.props.onButtonHideClick();
    }

    onPhoneChange = (e) => {
        console.log(e)
        console.log(e.target.value)
        this.setState({
            mobile: e.target.value,
        });
    }
    onPasswordChange = (e) => {
        console.log(e)
        console.log(e.target.value)
        this.setState({
            password: e.target.value,
        });
    }

    //登陆
    loginAction = () => {
        let params = {
            mobile: this.state.mobile,
            password: this.state.password
        }
        console.log('登陆')
        loginService(params)
            .then(res => {
                console.log('登陆完成')
                console.log(res)
                //存在localStorge中，UI自动化测试的时候，有点坑
                window.sessionStorage.setItem("authorization", res.data.token.access_token);
            })
    }
    //退出
    loginOutAction = () => {
        window.sessionStorage.setItem("authorization", null);
    }
    toggleSideNav = () => {
        this.props.isHideSideNav ? this.props.onButtonShowSideNav() : this.props.onButtonHideSideNav()
    }

    render() {
        const {anchorEl, mobileMoreAnchorEl, checkedPhone, checkedEmail} = this.state;
        const {classes} = this.props;
        const isMenuOpen = Boolean(anchorEl);
        const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

        const renderMenu = (
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                transformOrigin={{vertical: 'top', horizontal: 'right'}}
                open={isMenuOpen}
                onClose={this.handleMenuClose}
            >
                <MenuItem onClick={this.handleCloseLogout}>退出</MenuItem>
                <MenuItem onClick={this.handleLogin} className="open-login-btn">登录</MenuItem>
                {/*<MenuItem onClick={this.handleClose}>Profile</MenuItem>*/}
            </Menu>
        );

        const renderMobileMenu = (
            <Menu
                anchorEl={mobileMoreAnchorEl}
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                transformOrigin={{vertical: 'top', horizontal: 'right'}}
                open={isMobileMenuOpen}
                onClose={this.handleMobileMenuClose}
            >
                <MenuItem>
                    <IconButton color="inherit">
                        <Badge className={classes.margin} badgeContent={4} color="secondary">
                            <MailIcon/>
                        </Badge>
                    </IconButton>
                    <p>Messages</p>
                </MenuItem>
                <MenuItem>
                    <IconButton color="inherit">
                        <Badge className={classes.margin} badgeContent={11} color="secondary">
                            <NotificationsIcon/>
                        </Badge>
                    </IconButton>
                    <p>Notifications</p>
                </MenuItem>
                <MenuItem onClick={this.handleProfileMenuOpen}>
                    <IconButton color="inherit">
                        <AccountCircle/>
                    </IconButton>
                    <p>Profile</p>
                </MenuItem>
            </Menu>
        );

        return (
            <div className={classes.root}>
                <Dialog
                    fullScreen
                    open={this.state.openDialog}
                    onClose={this.handleClose}
                    TransitionComponent={Transition}
                >
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                                <CloseIcon/>
                            </IconButton>
                            <Typography variant="title" color="inherit" className={classes.flex}>
                                Login
                            </Typography>
                            <Button color="inherit" onClick={this.handleClose} className="logined-ok-btn">
                                确定
                            </Button>
                        </Toolbar>
                    </AppBar>
                    <List>
                        <ListItem button onClick={this.handleChangePhone} className="phone-login-way">
                            <ListItemText primary="手机登陆" secondary="zhouli"/>
                            {checkedPhone + ""}
                        </ListItem>
                        <Divider/>
                        <ListItem button onClick={this.handleChangeEmail}>
                            <ListItemText primary="邮箱登陆" secondary="json119.com"/>
                            {checkedEmail + ""}
                        </ListItem>
                    </List>


                    <Slide direction="up" in={checkedPhone} mountOnEnter unmountOnExit>


                        <main className={classes.main}>
                            <CssBaseline />
                            <Paper className={classes.paper}>
                                <Avatar className={classes.avatar}>
                                    <LockIcon />
                                </Avatar>
                                <Typography component="h1" variant="h5">
                                    登录
                                </Typography>
                                <form className={classes.form}>
                                    <FormControl margin="normal" required fullWidth className="mobile-input-wrap">
                                        <InputLabel htmlFor="email">电话号码</InputLabel>
                                        <Input id="mobile" name="mobile"
                                               autoComplete="mobile"
                                               onChange={(e) => {
                                                   this.onPhoneChange(e)
                                               }}
                                               autoFocus />
                                    </FormControl>
                                    <FormControl margin="normal" required fullWidth  className="password-input-wrap">
                                        <InputLabel htmlFor="password">密码</InputLabel>
                                        <Input name="password"
                                               onChange={(e) => {
                                                   this.onPasswordChange(e)
                                               }}
                                               type="password"
                                               id="password"
                                               autoComplete="current-password" />
                                    </FormControl>
                                    <FormControlLabel
                                        control={<Checkbox value="remember" color="primary" />}
                                        label="记住我"
                                    />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        onClick={this.loginAction}
                                        className={classes.submit+" mobile-password-login-btn"}
                                    >
                                    登录
                                    </Button>
                                </form>
                            </Paper>
                        </main>


                        {/*<Paper elevation={2} className={classes.paper}>*/}
                            {/*<div className={classes.paperInner}>Phone</div>*/}

                            {/*<div className="mobile-input-wrap">*/}
                                {/*<h1>mobile</h1>*/}
                                {/*<input onChange={(e) => {*/}
                                    {/*this.onPhoneChange(e)*/}
                                {/*}}/>*/}
                            {/*</div>*/}
                            {/*<div className="password-input-wrap">*/}
                                {/*<h1>password</h1>*/}
                                {/*<input onChange={(e) => {*/}
                                    {/*this.onPasswordChange(e)*/}
                                {/*}}/>*/}
                            {/*</div>*/}

                            {/*<div onClick={this.loginAction} className="mobile-password-login-btn">登陆</div>*/}
                        {/*</Paper>*/}







                    </Slide>
                    <Slide direction="up" in={checkedEmail} mountOnEnter unmountOnExit>
                        <Paper elevation={4} className={classes.paper}>
                            <div className={classes.paperInner}>Email</div>
                        </Paper>
                    </Slide>
                </Dialog>

                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="title" color="inherit" noWrap>
                            <IconButton className={classes.menuButton+' header-toggle-class'}
                                        onClick={this.toggleSideNav}
                                        color="inherit" aria-label="Open drawer">
                                <MenuIcon/>
                            </IconButton>
                            博客管理系统
                        </Typography>

                        <div className={classes.grow}/>
                        {/*className={classes.sectionDesktop}*/}
                        <div>
                            {/*<IconButton color="inherit">*/}
                            {/*<Badge className={classes.margin} badgeContent={4} color="secondary">*/}
                            {/*<MailIcon/>*/}
                            {/*</Badge>*/}
                            {/*</IconButton>*/}
                            {/*<IconButton color="inherit">*/}
                            {/*<Badge className={classes.margin} badgeContent={17} color="secondary">*/}
                            {/*<NotificationsIcon/>*/}
                            {/*</Badge>*/}
                            {/*</IconButton>*/}
                            <IconButton
                                aria-owns={isMenuOpen ? 'material-appbar' : null}
                                aria-haspopup="true"
                                className="open-login-model"
                                onClick={this.handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle/>
                            </IconButton>
                        </div>
                        {/*<div className={classes.sectionMobile}>*/}
                        {/*<IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">*/}
                        {/*<MoreIcon/>*/}
                        {/*</IconButton>*/}
                        {/*</div>*/}
                    </Toolbar>
                </AppBar>
                {renderMenu}
                {renderMobileMenu}
            </div>
        );
    }
}

HeaderContent.propTypes = {
    classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
        isHideFooter: state.isHideFooter,
        isHideSideNav: state.reducerSideNav.isHideSideNav,//
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onButtonHideClick: () => dispatch(actions.HideFooterAction),
        onButtonShowClick: () => dispatch(actions.ShowFooterAction),
        onButtonHideSideNav: () => dispatch(actions.HideSideNav),
        onButtonShowSideNav: () => dispatch(actions.ShowSideNav),
    }
}

const HeaderContentWrap = connect(mapStateToProps, mapDispatchToProps)(HeaderContent);
export default withStyles(styles)(HeaderContentWrap);
