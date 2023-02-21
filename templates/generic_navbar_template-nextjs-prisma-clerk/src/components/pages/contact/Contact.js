import PROJECT_CONSTANTS from '@/lib/constants'

import React from 'react';
import Image from 'next/image'

import styles from '@/styles/pages/Contact.module.scss'

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.page_name = 'Contact'
    }

    async componentDidMount() {

    }

    render() {
        console.log(`Loading ${this.page_name} Page`)

        return (
            <div className={styles.contact_container}>
                <div className={styles.contact_image_container}>
                    <div className={styles.contact_image_border}>
                        <Image
                            className={styles.contact_image}
                            src={"/default_bio_pic.png"}
                            alt={"Bio Pic"}
                            priority={true}
                            width={200}
                            height={200}
                            quality={100}
                        />
                    </div>
                </div>
                <div className={styles.contact_title_container}>
                    <b className={styles.contact_title}>{PROJECT_CONSTANTS.CONTACT_FULL_NAME}</b>
                </div>
                <div className={styles.contact_text_container}>
                    <a className={`${styles.contact_link} ${styles.link}`} href={`mailto:${PROJECT_CONSTANTS.CONTACT_EMAIL}`}>{PROJECT_CONSTANTS.CONTACT_EMAIL}</a>
                </div>
            </div>
        )
    }
}

export default Contact;
