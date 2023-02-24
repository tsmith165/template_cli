import PROJECT_CONSTANTS from '@/lib/constants'

import React from 'react';
import { withRouter } from 'next/router'

import PageLayout from '@/components/layout/PageLayout'

import styles from '@/styles/pages/Admin.module.scss'

class Admin extends React.Component {
    constructor(props) {
        super(props);

        this.page_title = `Admin | ${PROJECT_CONSTANTS.SITE_FULL_NAME}`
    }

    async componentDidMount() { }

    render() {
        if (!this.props.isLoaded) { return(<></>) }
        if (!this.props.isSignedIn) { this.props.router.push('/') }
        if (this.props.user == null) { this.props.router.push('/') }
        
        const role = (this.props.user.publicMetadata.role !== undefined) ? this.props.user.publicMetadata.role : null;
        console.log(`USER ROLE: ${role}`)
        
        if (role !== "ADMIN") { this.props.router.push('/') }
        
        if (!this.props.router.isReady) { return(<></>) }

        return (
            <PageLayout page_title={this.page_title}>
                <div className={styles.main_container}>
                    <div className={styles.main_body}>
                        <h2 className={styles.module_title}>Admin:</h2>
                        <div className={styles.page_main_container}>

                        </div>
                    </div>
                </div>
            </PageLayout>
        )
    }
}

export default withRouter(Admin);
