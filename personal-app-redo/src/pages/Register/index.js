import React, { useState } from 'react'
import { Form, Popover, Progress } from 'antd'
import InputItem from '../../components/InputItem'
import styles from './index.module.less'
const passwordStatusMap = {
    ok: (
        <div>
            Strong
        </div>
    ),
    pass: (
        <div>
            Medium
        </div>
    ),
    poor: (
        <div>
            Weak
        </div>
    )
}
const passwordProgressMap = {
    ok: "success",
    pass: "normal",
    poor: "exception"
}
const Register = () => {
    const [visible, setVisible] = useState(false)
    const [popover, setPopover] = useState(false)
    const [form] = Form.useForm()
    const handleFinish = (value) => {
        console.log(value)
    }
    const checkConfirm = (_, value) => {
        const promise = Promise
        if (value && value !== form.getFieldValue('password')) {
            return promise.reject('Password does not match')
        }
        return promise.resolve()
    }
    const checkPassword = (_, value) => {
        const promise = Promise
        if (!value) {
            setVisible(!!value)
            return promise.reject('Please Enter Your Password')
        }
        if (value) {
            setVisible(!!value)
            setPopover(!popover)
        }
        if (value && form.getFieldValue('confirm')) {
            form.validateFields(['confirm'])
        }
        return promise.resolve()
    }
    const getPasswordStatus = () => {
        const value = form.getFieldValue('password')
        if (value && value.length > 9) {
            return 'ok'
        }
        if (value && value.length > 5) {
            return 'pass'
        }
        return 'poor'
    }
    const renderPasswordProgress = () => {
        const value = form.getFieldValue('password')
        return value && value.length && (
            <div>
                <Progress
                status={passwordProgressMap[getPasswordStatus()]}
                strokeWidth={6}
                percent={value.length * 10 > 100 ? 100 : value.length * 10}
                showInfo={false}
                />
            </div>
        )
    }
    return (
        <div className={styles.loginRegister}>
            <div className={styles.register}>
                <Form
                    form={form}
                    onFinish={handleFinish}
                >
                    <InputItem
                        name="mail"
                        placeholder="E-mail address"
                        size="large"
                        rules={[
                            {
                                required: true,
                                message: 'Please Enter Your E-mail Address' 
                            },
                            {
                                type: 'email',
                                message: 'Please Enter Valid E-mail Address'
                            }
                        ]}
                    />
                    <Popover
                        content={
                            visible && (
                            <div>
                                {passwordStatusMap[getPasswordStatus()]}
                                {renderPasswordProgress()}
                                <div>
                                    At least 6 characters including upper case and number
                                </div>
                            </div>)
                        }
                        overlayStyle={{width: 240}}
                        placement="right"
                        visible={visible}
                    >
                        <InputItem
                            name="password"
                            placeholder="Password"
                            size="large"
                            type="password"
                            rules={[
                                {
                                    validator: checkPassword
                                }
                            ]}
                        />
                    </Popover>
                    <InputItem
                        name="confirm"
                        placeholder="Confirm password"
                        size="large"
                        type="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please Confirm Your Password'
                            },
                            {
                                validator: checkConfirm
                            }
                        ]}
                    />
                </Form>
            </div>
        </div>
    )
}
export default Register