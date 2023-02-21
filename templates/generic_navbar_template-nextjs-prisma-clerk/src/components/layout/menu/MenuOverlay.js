import React from 'react';

import MenuOverlayButton from './MenuOverlayButton';

import styles from "@/styles/layout/MenuOverlay.module.scss"

import { SIGNED_OUT_MENU_LIST, SIGNED_IN_MENU_LIST, ADMIN_MENU_LIST } from "@/lib/menu_list.js"

class MenuOverlay extends React.Component {
    constructor(props) {
        super(props);

        const using_menu = this.select_menu(this.props.isLoaded, this.props.isSignedIn, this.props.user);
    
        for (var i = 0; i < using_menu.length; i++) {
            let menu_item = using_menu[i];
            let menu_class = menu_item[0];
            let menu_name = menu_item[1];
            let is_admin = menu_item[2];
            let menu_slug = menu_item[3];
            let is_indexed = menu_item[4];
    
            if ((is_indexed == true) && (!menu_slug.includes(this.props.most_recent_page_id))) {
                using_menu[i][3] += this.props.most_recent_page_id
            }
        }
    
        console.log("Menu List (Next Line):");
        console.log(using_menu);
            
        var menu_items = this.generate_menu(using_menu);

        this.state = {
            menu_items: menu_items
        }

        this.generate_menu = this.generate_menu.bind(this);
        this.select_menu = this.select_menu.bind(this);
    }

    async componentDidMount() {

    }

    generate_menu(menu_list) {
        var menu_items = [];
        for (var i=0; i < menu_list.length; i++) {
    
            let class_name = menu_list[i][0];
            let menu_item_string = menu_list[i][1];
            let url_endpoint = menu_list[i][3];
    
            console.log(`Creating Menu Item for: ${menu_item_string}`);
    
            const menu_item = <MenuOverlayButton
                                key={i}
                                id={i}
                                menu_name={menu_item_string}
                                url_endpoint ={url_endpoint}
                                app_state={this.props.app_state}
                                app_set_state={this.props.app_set_state}
                              />;
    
            menu_items.push(menu_item);
        }
    
        return menu_items
    }
    
    select_menu(isLoaded, isSignedIn, user) {
        if (!isLoaded) {
            console.log('User not loaded - returning signed out menu...')
            return SIGNED_OUT_MENU_LIST
        }
        if (!isSignedIn) {
            console.log('User not signed in - returning signed out menu...')
            return SIGNED_OUT_MENU_LIST
        }
        if (user == null) {
            console.log('User equals null - returning signed out menu...')
            return SIGNED_OUT_MENU_LIST
        }
        if (!'publicMetadata' in user) {
            console.log('User does not contain publicMetadata - returning signed out menu...')
            return SIGNED_OUT_MENU_LIST
        }
        if (!'role' in user.publicMetadata) {
            console.log('User does not contain role - returning signed out menu...')
            return SIGNED_OUT_MENU_LIST
        }
        if (user.publicMetadata.role === 'ADMIN') {
            console.log('User has role Admin - returning signed in admin menu...')
            return ADMIN_MENU_LIST
        }
        console.log('User does not have role Admin - returning signed in non-admin menu...')
        return SIGNED_IN_MENU_LIST
    }

    render() {
        return (
            <div className={styles.menu_overlay_items_container}>
                {this.state.menu_items}
            </div>
        )
    }
}

export default MenuOverlay;
