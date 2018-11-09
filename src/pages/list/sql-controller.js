/**
 * Created by zhouli on 18/9/19
 */
import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import '../../styles/pages/list/sql-dashboard.scss';
import Upload from 'rc-upload';
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

class SqlController extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 'recents',
            destroyed: false,
        };
        this.uploaderProps = {
            action: '/api/upload',
            data: { a: 1, b: 2 },
            headers: {
                Authorization: 'xxxxxxx',
            },
            multiple: true,
            beforeUpload(file) {
                console.log('beforeUpload', file.name);
            },
            onStart: (file) => {
                console.log('onStart', file.name);
                // this.refs.inner.abort(file);
            },
            onSuccess(file) {
                console.log('onSuccess', file);
            },
            onProgress(step, file) {
                console.log('onProgress', Math.round(step.percent), file.name);
            },
            onError(err) {
                console.log('onError', err);
            },
        };

    }

    componentDidMount() {
    }
    destroy = () => {
        this.setState({
            destroyed: true,
        });
    }


    render = () => {
        return (<div className="sql-dashboard-wrap">
            SQL控制面板
            <div className="uploader-wrap">
                <Upload {...this.uploaderProps} ref="inner">
                    可点击或拖拽上传文件
                </Upload>
            </div>
        </div>)
    }
}

export default withStyles(styles)(SqlController);
