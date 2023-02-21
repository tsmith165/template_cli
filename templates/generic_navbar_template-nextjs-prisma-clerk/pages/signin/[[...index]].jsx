import React from "react";

import styles from "@/styles/forms/SignIn.module.scss"

import PageLayout from '@/components/layout/PageLayout'

import { SignIn } from "@clerk/nextjs";

class SignInPage extends React.Component {
    constructor(props) {
        super(props);

        this.page_title = "Sign In"
    }

    async componentDidMount() { }

    render() {
        return (
            <PageLayout page_title={this.page_title}>
                <div className={styles.sign_in_container}>
                    <div className={styles.sign_in_inner_container}>
                        <SignIn path="/signin" routing="path" signUpUrl="/signup" />
                    </div>
                </div>
            </PageLayout>
        )
    }
}

export default SignInPage;