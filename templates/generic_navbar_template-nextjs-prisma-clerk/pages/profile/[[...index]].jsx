import React from 'react';

import PageLayout from '@/components/layout/PageLayout';

import { UserProfile } from "@clerk/nextjs";

import styles from '@/styles/components/Clerk.module.scss';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.page_title = "User Profile"
    }

    async componentDidMount() { }

    render() {
        return (
            <PageLayout page_title={this.page_title}>
                <div className={styles.clerk_container}>
                    <div className={styles.clerk_inner_container}>
                        <UserProfile path="/profile" routing="path" />
                    </div>
                </div>
            </PageLayout>
        )
    }
}

export default Profile;
