import React from 'react'
import { Container,Row, Col } from 'react-bootstrap'

import {ReactChildren, ReactChild} from 'react';

interface Props {
    children: React.ReactNode
}

const FormContainer = ({ children }: Props) => {
  return (
    <Container className='py-3'>
        <Row className='justify-md-content-md-center'>
            <Col xs={12} md={6}>
                    <>{children}</>
            </Col>
        </Row>
    </Container>
  )
}

export default FormContainer;
