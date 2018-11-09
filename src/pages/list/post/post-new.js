/**
 * Created by zhouli on 18/9/19
 */
import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import '../../../styles/pages/list/post/post-new.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {createPost} from '../../../service/post-api';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css'
const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    icon: {
        margin: theme.spacing.unit * 2,
    },
    iconHover: {
        margin: theme.spacing.unit * 2,
        '&:hover': {
            color: "#ff0000",
        },
    },
});

class PostList extends React.Component {
    constructor() {
        super();
        this.state = {
            editorState: BraftEditor.createEditorState(null),
            title: 'recents',
            desc: 'Cat in the Hat',
            content: 'Cat in the Hat',
            is_delete: 1,
            is_draft: 1,
        };

    }

    componentDidMount() {
    }

    handleChange = name => event => {
        console.log(name)
        console.log(event.target.value)
        this.setState({
            [name]: event.target.value,
        });
    };

    savePost = () => {
        let params = {
            title: this.state.title,
            desc: this.state.desc,
            content: this.state.content,
            md_content: this.state.editorState.toHTML(),
            is_delete: 1,
            is_draft: 1,
        }
        createPost(params)
            .then(res => {
                console.log(res)
            })

    }
    handleEditorChange = (editorState) => {
        this.setState({ editorState })
    }

    submitContent = () => {
        // 在编辑器获得焦点时按下ctrl+s会执行此方法
        // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
        const htmlContent = this.state.editorState.toHTML();
        console.log(htmlContent)
    }

    render = () => {
        return (<div className="post-list-wrap">
            <h2>创建博客</h2>
            <TextField
                id="outlined-name"
                label="题目"
                value={this.state.title}
                onChange={this.handleChange('title')}
                margin="normal"
                variant="outlined"
            />
            <br/>
            <TextField
                id="outlined-name"
                label="描述"
                value={this.state.desc}
                onChange={this.handleChange('desc')}
                margin="normal"
                variant="outlined"
            />
            <br/>
            <TextField
                id="outlined-name"
                label="内容"
                value={this.state.content}
                onChange={this.handleChange('content')}
                margin="normal"
                variant="outlined"
            />
            <br/>
            <div className="editor-wrap">
                <BraftEditor
                    value={this.state.editorState}
                    onChange={this.handleEditorChange}
                    onSave={this.submitContent}
                />
            </div>

            <Button
                className="new-post-save-btn"
                variant="contained"
                color="primary"
                disableRipple
                onClick={this.savePost}
            >
                保存
            </Button>
        </div>)
    }
}

export default withStyles(styles)(PostList);
