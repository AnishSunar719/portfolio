import axios from "axios";

function SendMsg(formData){
        const url = process.env.REACT_APP_DB_URL;
        // const url = process.env.url;
        const config = {
            headers:{
                'content-type': 'application/json',
            }
        };
        return axios.post(url, formData, config);
    }

export default SendMsg;