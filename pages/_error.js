import React from 'react'
import Layout from '../components/Layout';

export default class Error extends React.Component {
    static getInitialProps({res, err}) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null;
        return {statusCode}
    }

    render() {
        return (
            <Layout>
                {this.props.statusCode
                    ? `${this.props.statusCode} | Auf dem Server ist ein Fehler aufgetreten`
                    : 'Ihr Browser hat einen Fehler verursacht'}
            </Layout>
        )
    }
}





