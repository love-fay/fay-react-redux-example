/**
 * Created by feichongzheng on 16/12/20.
 */
import React, {Component} from 'react';
import Card from 'antd/lib/card';
import Form from 'antd/lib/form';
import Icon from 'antd/lib/icon';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import Checkbox from 'antd/lib/checkbox';
import Spin from 'antd/lib/spin';
import Alert from 'antd/lib/alert';
import 'fay-antd/card';
import 'fay-antd/form';
import 'fay-antd/input';
import 'fay-antd/button';
import 'fay-antd/checkbox';
import 'fay-antd/spin';
import 'fay-antd/alert';
const FormItem = Form.Item;
import style from './style.css';
import {getQueryString} from 'fay-query/params';
import PropTypes from 'prop-types';
import {appName} from 'fay-base/appInfo';
import cookie from 'react-cookie';

class LoginForm extends Component {

    static propTypes = {
        location: PropTypes.any,
        history: PropTypes.any,
        form: PropTypes.object,
    };

    constructor (props) {
        super(props);
        this.state = {
            loading: false,
            message: '',
            messageType: '',
            showMessage: 'none',
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({showMessage: 'none', message: '', messageType: ''});
        const { location, history } = this.props;
        let nextPathname = '';
        let returnPath = getQueryString('returnPath');
        if (location.state && location.state.nextPathname) {
            nextPathname = location.state.nextPathname;
        } else if (returnPath) {
            nextPathname += returnPath;
        }
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.setState({loading: true});
                const user = {username: values.userName, password: values.password, nickname: '爱死费崇政'};
                cookie.save('current-user', user, values.remember ? {maxAge: ''} : undefined);
                history.push(nextPathname, null);
            }
        });
    };

    render () {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className={style.root}>
                <Spin spinning={this.state.loading}>
                    <Card title={appName} className={style.card}>
                        <div className={style.customImage}>
                            <img width="150px" src="assets/images/logo/150x150.png" />
                        </div>
                        <Form onSubmit={this.handleSubmit} className={style.loginForm}>
                            <FormItem>
                                {getFieldDecorator('userName', {
                                    rules: [
                                        { required: true, message: '请输入您的用户名!' },
                                    ],
                                })(
                                    <Input addonBefore={<Icon type="user" />} placeholder="用户名" />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [
                                        { required: true, message: '请输入您的密码!' },
                                    ],
                                })(
                                    <Input autoComplete="off" autoFocus addonBefore={<Icon type="lock" />} type="password" placeholder="密码" />
                                )}
                            </FormItem>
                            <FormItem>
                                <Alert style={{display: this.state.showMessage}} message={this.state.message} type={this.state.messageType} showIcon/>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: false,
                                })(
                                    <Checkbox>记住我</Checkbox>
                                )}
                                <Button type="primary" htmlType="submit" className={style.loginFormButton}>
                                    登录
                                </Button>
                            </FormItem>
                        </Form>
                    </Card>
                </Spin>
            </div>
        );
    }
}

export default Form.create()(LoginForm);

