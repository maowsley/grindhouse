let APIURL = " ";

switch(window.location.hostname) {
    case 'localhost' || '127.0.0.1':

    APIURL = "http://localhost:3000";
    break;

    case 'https://maogrindhouse.herokuapp.com':
        APIURL = "https://ghserver-mao.herokuapp.com"
}

export default APIURL;