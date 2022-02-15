let APIURL = " ";

switch(window.location.localhost) {
    case 'localhost' || '127.0.0.1':

    APIURL = "http://localhost:3000";
    break;

    case 'https://maogrindhouse.herokuapp.com':
        APIURL = "https://mao-grindhouse-server.herokuapp.com"
}

export default APIURL;