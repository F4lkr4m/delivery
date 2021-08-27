import { Http } from "./http.js";
import { auth } from "./auth.js"

export function signupPost ({ email, password, name, number }) {
    return Http.ajaxPost({
        url: '/signup',
        body: {
            email,
            password,
            name,
            number
        }
    })
        .then(auth)
}

export function basketPost (basket) {
    return Http.ajaxPost({
        url: '/user/basket',
        body: basket
    });
}

export function addressPost (address) {
    return Http.ajaxPost({
        url: '/user/address',
        body: address
    });
}

export function getWSKey () {
    return Http.ajaxGet({
        url: '/connect/ws'
    });
}