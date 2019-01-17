import React from 'react';
import Layout from '../components/Layout';
import '../helpers/icons';
import Dashboard from "../components/Dashboard";

class Index extends React.Component {


    render() {
        return (
            <Layout>
                <Dashboard/>
            </Layout>
        )
    }
}

export default Index
