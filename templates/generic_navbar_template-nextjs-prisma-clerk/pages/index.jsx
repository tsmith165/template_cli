import PROJECT_CONSTANTS from '@/lib/constants'

import React from 'react';

import PageLayout from '@/components/layout/PageLayout'

import styles from '@/styles/pages/Index.module.scss'

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.page_title = `Home | ${PROJECT_CONSTANTS.SITE_FULL_NAME}`
    }

    async componentDidMount() { }

    render() {
        return (
            <PageLayout page_title={this.page_title}>
                <div className={styles.page_container_split}>
                    <div className={styles.page_container_left}>

                    </div>
                    <div className={styles.page_container_right}>
                        
                    </div>
                </div>
            </PageLayout>
        )
    }
}

export default Home

