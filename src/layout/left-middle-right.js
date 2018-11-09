/**
 * Created by zhouli on 18/9/17
 */
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ControlledExpansionPanels from '../components/components-test/controlled-expansion-panels';
import SideNav from '../components/components-test/side-nav';
import appContext from '../context-data/app-context';
import appContextTwo from '../context-data/app-context-two';
import actions from '../redux/action';
import '../styles/layout/left-middle-right.css';
import '../styles/index.scss';

// import ReactMarkdown from 'react-markdown';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import post1 from './readme.md';
import post2 from './readme.md';
import post3 from '../../README.md';
const styles = theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,

    },
    toolbarMain: {
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
    },
    mainFeaturedPost: {
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing.unit * 4,
    },
    mainFeaturedPostContent: {
        padding: `${theme.spacing.unit * 6}px`,
        [theme.breakpoints.up('md')]: {
            paddingRight: 0,
        },
    },
    mainGrid: {
        marginTop: theme.spacing.unit * 3,
    },
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
    markdown: {
        padding: `${theme.spacing.unit * 3}px 0`,
    },
    sidebarAboutBox: {
        padding: theme.spacing.unit * 2,
        backgroundColor: theme.palette.grey[200],
    },
    sidebarSection: {
        marginTop: theme.spacing.unit * 3,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing.unit * 8,
        padding: `${theme.spacing.unit * 6}px 0`,
    },
});

const sections = [
    'Technology',
    'Design',
    'Culture',
    'Business',
    'Politics',
    'Opinion',
    'Science',
    'Health',
    'Style',
    'Travel',
];

const featuredPosts = [
    {
        title: 'Featured post',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
    {
        title: 'Post title',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
];

const posts = [post1, post2, post3];

const archives = [
    'March 2020',
    'February 2020',
    'January 2020',
    'December 2019',
    'November 2019',
    'October 2019',
    'September 2019',
    'August 2019',
    'July 2019',
    'June 2019',
    'May 2019',
    'April 2019',
];

const social = ['GitHub', 'Twitter', 'Facebook'];


class LeftMiddleRight extends React.Component {
    constructor() {
        super();
        this.state = {
            text: 'Hello',
            body: 'json119'
        };
    }

    componentDidMount() {
    }

    test = () => {
        console.log(this.context);
    };

    getChildContext() {
        return {
            lmrContextData: {
                data: 'lmr-data'
            }
        };
    }

    postJson119 = () => {
        let url = '/api';
        fetch(url, {
            method: 'post',
            headers: {},
            body: JSON.stringify({
                'name': 'zhouli',
                'password': '123'
            })
        })
            .then((response) => {
                if (response.status == 200) {
                    this.setState({
                        body: response.body
                    });
                }
            })
            .catch(function (err) {
                console.log('Fetch错误:' + err);
            });
    };
    getJson119 = () => {
        let url = '/api';
        fetch(url, {
            method: 'get',
            headers: {},
        })
            .then(response => response.body)
            .then(data => {
                this.setState({
                    body: data.toString()
                });
            })
            .catch(function (err) {
                console.log('Fetch错误:' + err);
            });
    };
    render = () => {
        let link = props => <Link to={'/list/Dashboard'} {...props} />;

        const {classes} = this.props;
        return ( <div className='left-middle-right-wrap'>

            {/*//需要设置一个全局变量，监听窗口变化，设置样式，变量考虑放context*/}
            <div className='left' style={{'height':document.getElementById('body').offsetHeight-102}}>
                <List component="nav">
                    <ListItem button component={link}>
                        <ListItemText inset primary="后台管理系统"/>
                    </ListItem>
                    <ListItem button component={link}>
                        <ListItemText inset primary={this.props.left}/>
                    </ListItem>
                    <ListItem button onClick={this.test}>
                        <ListItemText inset primary="test"/>
                    </ListItem>
                </List>
            </div>
            <div className='right' style={{'height':document.getElementById('body').offsetHeight-102}}>
                <h1>{this.props.right}</h1>
                <h1>{this.props.text}</h1>
                <h1 className="request-res">请求完毕显示：{this.props.getPost}</h1>
                <div onClick={this.props.onButtonClick}>print hello</div>
                <div className='request-btn' onClick={this.props.onAjaxButtonClick}>发送请求</div>
                <div onClick={this.getJson119}>fetch get</div>
                <div onClick={this.postJson119}>fetch post</div>
            </div>


            <div className='center'>
                <React.Fragment>
                    <CssBaseline />
                    <div className={classes.layout}>
                        <Toolbar className={classes.toolbarMain}>
                            <Button size="small">Subscribe</Button>
                            <Typography
                                component="h2"
                                variant="h5"
                                color="inherit"
                                align="center"
                                noWrap
                                className={classes.toolbarTitle}
                            >
                                Blog
                            </Typography>
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                        </Toolbar>
                        <Toolbar variant="dense" className={classes.toolbarSecondary}>
                            {sections.map(section => (
                                <Typography color="inherit" noWrap key={section}>
                                    {section}
                                </Typography>
                            ))}
                        </Toolbar>
                        <main>
                            {/* Main featured post */}
                            <Paper className={classes.mainFeaturedPost}>
                                <Grid container>
                                    <Grid item md={6}>
                                        <div className={classes.mainFeaturedPostContent}>
                                            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                                Title of a longer featured blog post
                                            </Typography>
                                            <Typography variant="h5" color="inherit" paragraph>
                                                Multiple lines of text that form the lede, informing new readers quickly and
                                                efficiently about what&apos;s most interesting in this post&apos;s contents…
                                            </Typography>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Paper>
                            {/* End main featured post */}
                            {/* Sub featured posts */}
                            <Grid container spacing={40} className={classes.cardGrid}>
                                {featuredPosts.map(post => (
                                    <Grid item key={post.title} xs={12} md={6}>
                                        <Card className={classes.card}>
                                            <div className={classes.cardDetails}>
                                                <CardContent>
                                                    <Typography component="h2" variant="h5">
                                                        {post.title}
                                                    </Typography>
                                                    <Typography variant="subtitle1" color="textSecondary">
                                                        {post.date}
                                                    </Typography>
                                                    <Typography variant="subtitle1" paragraph>
                                                        {post.description}
                                                    </Typography>
                                                    <Typography variant="subtitle1" color="primary">
                                                        Continue reading...
                                                    </Typography>
                                                </CardContent>
                                            </div>
                                            <Hidden xsDown>
                                                <CardMedia
                                                    className={classes.cardMedia}
                                                    image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" // eslint-disable-line max-len
                                                    title="Image title"
                                                />
                                            </Hidden>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                            {/* End sub featured posts */}
                            <Grid container spacing={40} className={classes.mainGrid}>
                                {/* Main content */}
                                <Grid item xs={12} md={8}>
                                    <Typography variant="h6" gutterBottom>
                                        From the Firehose
                                    </Typography>
                                    <Divider />
                                    {/*{posts.map((item,index) => (item))}*/}
                                    {posts.map((item,index) => (<div key={index} dangerouslySetInnerHTML={{__html:item}}/>))}
                                </Grid>
                                {/* End main content */}
                                {/* Sidebar */}
                                <Grid item xs={12} md={4}>
                                    <Paper elevation={0} className={classes.sidebarAboutBox}>
                                        <Typography variant="h6" gutterBottom>
                                            About
                                        </Typography>
                                        <Typography>
                                            Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit
                                            amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
                                        </Typography>
                                    </Paper>
                                    <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                                        Archives
                                    </Typography>
                                    {archives.map(archive => (
                                        <Typography key={archive}>{archive}</Typography>
                                    ))}
                                    <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                                        Social
                                    </Typography>
                                    {social.map(network => (
                                        <Typography key={network}>{network}</Typography>
                                    ))}
                                </Grid>
                                {/* End sidebar */}
                            </Grid>
                        </main>
                    </div>

                </React.Fragment>
                <div className='body'>
                    body
                    <div className='test'>
                        test
                        <div className='test-inner'>test-inner</div>
                    </div>
                </div>
                {this.props.middle}
                {/*考虑把createContext1做成函数*/}
                <appContext.Provider value={{createContext1: 'createContext3', createContext2: 'createContext2'}}>
                    <ControlledExpansionPanels></ControlledExpansionPanels>
                </appContext.Provider>

                <br/>
                <br/>
                <appContextTwo.Provider
                    value={{createContextTwo1: 'createContext3', createContextTwo2: 'createContext2'}}>
                    <SideNav></SideNav>
                </appContextTwo.Provider>

                <div>
                    <h1>fetch请求测试</h1>
                    <div dangerouslySetInnerHTML={{__html: this.state.body}}></div>
                </div>

                {/* Footer */}
                <footer className={classes.footer}>
                    <Typography variant="h6" align="center" gutterBottom>
                        Footer
                    </Typography>
                    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                        Something here to give the footer a purpose!
                    </Typography>
                </footer>
                {/* End footer */}
            </div>
            <div className='clear'></div>
        </div> );
    }
}

//for eslint
LeftMiddleRight.propTypes = {
    left: PropTypes.any,
    right: PropTypes.any,
    middle: PropTypes.any,
    text: PropTypes.any,
    onButtonClick: PropTypes.any,
    onAjaxButtonClick: PropTypes.any,
    getPost: PropTypes.any,
};
LeftMiddleRight.contextTypes = {
    router: PropTypes.object,
    myContextData: PropTypes.object
};
//必须 定义 getChildContext 方法，返回需要提供的数据
LeftMiddleRight.childContextTypes = {
    lmrContextData: PropTypes.object
};

//映射Redux state到组件的属性
//参数state为reducer中的state，触发器可能会改变他
//这里映射到本组件的props上来，触发器改变之后立即生效
//使用 this.props.text
function mapStateToProps(state) {
    return {
        text: state.reducerTest.text,
        getPost: state.reducerTest.getPost,// 异步action
    };
}

//映射Redux actions到组件的属性
//包动作映射到本组件的props上
//使用 this.props.onButtonClick
function mapDispatchToProps(dispatch) {
    return {
        onAjaxButtonClick: () => {
            console.log('发请求');
            dispatch(actions.GetPostListIng);
            setTimeout(() => {
                let res = parseInt(Math.random() * 100);
                console.log(res);
                if (res % 2 === 0) {
                    actions.GetPostListOk.payload = '请求结果'+res;
                    dispatch(actions.GetPostListOk);
                } else {
                    actions.GetPostListErr.payload = '请求结果'+res;
                    dispatch(actions.GetPostListErr);
                }
            }, 2000);
        },
        onButtonClick: () => {
            //中间件，在action前，指定操作
            console.log('发请求');
            setTimeout(() => {
                dispatch(actions.PrintHelloAction);
            }, 2000);
        },
    };
}

const LeftMiddleRightWrap = connect(mapStateToProps, mapDispatchToProps)(LeftMiddleRight);

export default withStyles(styles)(LeftMiddleRightWrap);
