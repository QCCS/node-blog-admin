import React from 'react';
//图标
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SendIcon from '@material-ui/icons/Send';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import TabIcon from '@material-ui/icons/Tab';
import TheatersIcon from '@material-ui/icons/Theaters';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import DraftsIcon from '@material-ui/icons/Drafts';
import ListIcon from '@material-ui/icons/List';
import CakeSharpIcon from '@material-ui/icons/CakeSharp';

//组件
import Dashboard from '../pages/list/dashboard';
import SqlController from '../pages/list/sql-controller';
import AppSetting from '../pages/list/app-setting';

import PostList from '../pages/list/post/post-list';
import PostNew from '../pages/list/post/post-new';
import ListOne from '../pages/list/one';
import ListTwo from '../pages/list/two';

import CommentList from '../pages/list/comment/comment-list';
import TagList from '../pages/list/tag/tag-list';

import UserList from '../pages/list/user/user-list';
import RoleList from '../pages/list/user/role-list';
import PermissionList from '../pages/list/user/permission-list';

let home = {
    home: {
        link: '',
        name: '首页',
        parentLink: null
    },
    about: {
        link: 'about',
        name: '关于',
        parentLink: null
    }
};
let list = {
    Dashboard: {
        component: <Dashboard/>,
        link: 'Dashboard',
        name: '控制面板',
        parentLink: 'list',
        icon: <InboxIcon></InboxIcon>
    },
    AppSettingLink: {
        component: <AppSetting/>,
        link: 'AppSetting',
        name: '博客设置',
        parentLink: 'list',
        icon: <SendIcon></SendIcon>
    },
    SqlControllerLink: {
        component: <SqlController/>,
        link: 'SqlControllerLink',
        name: 'SQL控制',
        parentLink: 'list',
        icon: <InboxIcon></InboxIcon>
    },
    post: {
        link: null,
        name: '博客管理',
        parentLink: 'list',
        icon: <TabIcon></TabIcon>,
        openStateFun: 'handleClickList',
        openState: 'postNav',
        children: {
            PostNewLink: {
                level:1,
                component: <PostNew/>,
                link: 'PostNew',
                name: '新增博客',
                parentLink: 'list',
                icon: <OndemandVideoIcon></OndemandVideoIcon>
            },
            PostListLink: {
                level:1,
                component: <PostList/>,
                link: 'PostList',
                name: '博客列表',
                parentLink: 'list',
                icon: <TabIcon></TabIcon>
            },
            twoLink: {
                level:1,
                component: <ListOne/>,
                link: 'one',
                name: '阅读量',
                parentLink: 'list',
                icon: <TheatersIcon></TheatersIcon>
            },
            threeLink: {
                level:1,
                component: <ListTwo/>,
                link: 'two',
                name: '收藏',
                parentLink: 'list',
                icon: <InboxIcon></InboxIcon>
            },
        }
    },

    tag: {
        link: null,
        name: '标签管理',
        parentLink: 'list',
        icon: <InboxIcon></InboxIcon>,
        openStateFun: 'handleClickList',
        openState: 'tagNav',
        children: {
            TagListLink: {
                level:1,
                component: <TagList/>,
                link: 'TagList',
                name: '标签列表',
                parentLink: 'list',
                icon: <CakeSharpIcon></CakeSharpIcon>
            },
        }
    },

    comment: {
        link: null,
        name: '评论管理',
        parentLink: 'list',
        icon: <DraftsIcon></DraftsIcon>,
        openStateFun: 'handleClickList',
        openState: 'commentNav',
        children: {
            CommentListLink: {
                level:1,
                component: <CommentList/>,
                link: 'CommentListLink',
                name: '评论列表',
                parentLink: 'list',
                icon: <StarBorderIcon></StarBorderIcon>
            },
        }
    },

    user: {
        link: null,
        name: '用户管理',
        parentLink: 'list',
        icon: <InboxIcon></InboxIcon>,
        openStateFun: 'handleClickList',
        openState: 'userNav',
        children: {
            UserListLink: {
                level:1,
                component: <UserList/>,
                link: 'UserList',
                name: '用户列表',
                parentLink: 'list',
                icon: <CakeSharpIcon></CakeSharpIcon>
            },
            RoleListLink: {
                level:1,
                component: <RoleList/>,
                link: 'RoleList',
                name: '角色列表',
                parentLink: 'list',
                icon: <ListIcon></ListIcon>
            },
            PermissionListLink: {
                level:1,
                component: <PermissionList/>,
                link: 'PermissionList',
                name: '权限列表',
                parentLink: 'list',
                icon: <StarBorderIcon></StarBorderIcon>
            },
        }
    },
};
export default {
    home,
    list
};

