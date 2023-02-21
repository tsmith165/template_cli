export const SIGNED_OUT_MENU_LIST = [
    ["home", "Home", false, "/", false],
    ["contact", "Contact", false, "/contact", false],
    ["sign_in", "Sign In", false, "/signin", false]
]

export const SIGNED_IN_MENU_LIST = [
    ["home", "Home", false, "/", false],
    ["contact", "Contact", false, "/contact", false],
    ["profile", "Profile", false, "/profile", false],
    ["sign_out", "Sign Out", false, "/signout", false]
]

export const ADMIN_MENU_LIST = [
    ["home", "Home", false, "/", false],
    ["contact", "Contact", false, "/contact", false],
    ["profile", "Profile", false, "/profile", false],
    ["admin", "Edit Details", true, "/admin", true],
    ["sign_out", "Sign Out", false, "/signout", false]
]

// eslint-disable-next-line import/no-anonymous-default-export
export default { SIGNED_OUT_MENU_LIST, SIGNED_IN_MENU_LIST, ADMIN_MENU_LIST }