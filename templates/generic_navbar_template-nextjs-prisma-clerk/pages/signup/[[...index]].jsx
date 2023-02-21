import React from "react";

import styles from "../../styles/forms/SignIn.module.scss"

import PageLayout from '../../src/components/layout/PageLayout'

import { SignUp } from "@clerk/nextjs";

class SignUpPage extends React.Component {
    constructor(props) {
        super(props);

        this.page_title = "Sign Up"
    }

    async componentDidMount() { }

    render() {
        return (
            <PageLayout page_title={this.page_title}>
                <div className={styles.sign_in_container}>
                    <div className={styles.sign_in_inner_container}>
                        <SignUp/>
                    </div>
                </div>
            </PageLayout>
        )
    }
}

export default SignUpPage;