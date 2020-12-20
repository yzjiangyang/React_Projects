import React, { useState } from 'react'
import { Tabs, Form, Checkbox, Row } from 'antd'
import { Link } from 'react-router-dom'
import { UserOutlined, LockTwoTone, MobileTwoTone, MailTwoTone, FacebookOutlined, GithubOutlined, GoogleOutlined } from '@ant-design/icons'
import styles from './index.module.less'
import InputItem from '../../components/InputItem'
import SubmitButton from '../../components/SubmitButton'
const { TabPane } = Tabs
const Login =() => {
    const [autoLogin, setAutoLogin] = useState(true)
    const handleFinish = (value) => {
        console.log(value)
    }
    return (
        <div className={styles.loginContainer}>
            <div className={styles.login}>
                <Form
                    onFinish={handleFinish}
                >
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="Account Login" key="1">
                            <InputItem
                                name="username"
                                prefix={
                                    <UserOutlined style={{color:'#1890ff'}} />
                                }
                                placeholder="Username"
                                size="large"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please Enter Your Username'
                                    }
                                ]}
                            />
                            <InputItem
                                name="password"
                                prefix={
                                    <LockTwoTone />
                                }
                                placeholder="Password"
                                size="large"
                                type="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please Enter Your Password'
                                    }
                                ]}
                            />
                        </TabPane>
                        <TabPane tab="Quick Login" key="2">
                            <InputItem
                                    name="mobile"
                                    prefix={
                                        <MobileTwoTone />
                                    }
                                    placeholder="Phone Number"
                                    size="large"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please Enter Your Phone Number'
                                        }
                                    ]}
                            />
                            <InputItem
                                    name="captcha"
                                    prefix={
                                        <MailTwoTone />
                                    }
                                    placeholder="Phone Captcha"
                                    size="large"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please Enter Your Phone Captcha'
                                        }
                                    ]}
                            />
                        </TabPane>
                    </Tabs>
                    <div>
                        <Row justify="space-between">
                            <Checkbox
                                checked={autoLogin}
                                onChange={(e) => setAutoLogin(e.target.checked)}
                            >
                                Remember me
                            </Checkbox>
                            <a href="#!">Forget password?</a>
                        </Row>
                    </div>
                    <SubmitButton>
                        Signin
                    </SubmitButton>
                </Form>
                <div>
                    or you can sign in with
                    <FacebookOutlined className={styles.icon}/>
                    <GithubOutlined className={styles.icon}/>
                    <GoogleOutlined className={styles.icon}/>
                    <Link className={styles.register} to='/register'>
                        Register
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Login