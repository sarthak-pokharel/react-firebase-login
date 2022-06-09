
import axios from 'axios';



async function getFirebaseConfig(){
    let res = await axios.get('/.netlify/functions/confighandler');
    return res.data;
}

export {getFirebaseConfig};