
import { jwtEncode, jwtDecode} from '../JWT'
import Cookies from 'universal-cookie';
 
const cookies = new Cookies();
//Mã hoá JWT
export const setToken = ((token) => {
    try {
        cookies.set('accessToken', jwtEncode(token, "list"), { path: '/'});
        return;
    }catch(err) {
        return;
    }
});

export const getToken = (() => {
    try {
        return jwtDecode(cookies.get('accessToken'), "list") ;
    }catch(err) {
        return {};
    }
});

export const deleteToken = (() => {
    try {
        cookies.remove('accessToken');
        return;
    }catch(err) {
        return;
    }
});





