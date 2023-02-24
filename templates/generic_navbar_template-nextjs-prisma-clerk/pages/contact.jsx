import PROJECT_CONSTANTS from '@/lib/constants'

import React from 'react';

import PageLayout from '@/components/layout/PageLayout'
import Contact from '@/components/pages/contact/Contact';

class ContactPage extends React.Component {
    constructor(props) {
        super(props);

        this.page_title = `Contact | ${PROJECT_CONSTANTS.SITE_FULL_NAME}`
    }

    async componentDidMount() { }

    render() {
        return (
          <PageLayout page_title={this.page_title}>
            <Contact/>
          </PageLayout>
        )
    }
}

export default ContactPage;