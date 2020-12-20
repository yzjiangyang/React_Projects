import { Input, Form, Button, Row, Col, message } from 'antd'
import React, { useState, useEffect }from 'react'
import styles from './index.module.less'
const InputItem = (props) => {
    const {name, rules, ...rest} = props
    const [timing, setTiming] = useState(false)
    const [count, setCount] = useState(3)
    const handleClickCaptcha = () => {
        message.success('成功获取验证码1234')
        setTiming(true)
    }
    useEffect(() => {
        let interval
        if (timing) {
            interval = setInterval(() => {
                setCount((preSecond) => {
                    if (preSecond === 1) {
                        setTiming(false)
                        clearInterval(interval)
                        return 3
                    }
                    return preSecond - 1
                })
            }, 1000)
        }
        return () => clearInterval(interval)
    }, [timing])

    if (name === 'captcha') {
        return (
            <Form.Item name={ name } rules={ rules }>
                <Row gutter={8}>
                    <Col span={16}>
                        <Input { ...rest }>
                        </Input> 
                    </Col>
                    <Col span={8}>
                        <Button
                            className={styles.getCaptcha}
                            disabled={timing}
                            size="large"
                            onClick={handleClickCaptcha}
                        >
                            {timing? `${count}s` : 'Send Captcha'}
                        </Button>
                    </Col>
                </Row>
            </Form.Item>
        )
    }
    return (
        <Form.Item name={ name } rules={ rules }>
            <Input { ...rest }>
            </Input>
        </Form.Item>
    )
}

export default InputItem