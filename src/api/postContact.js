import axios from "axios";

function SendMsg(formData){
        const url = "http://localhost:4000/contact";
        // const url = process.env.url;
        const config = {
            headers:{
                'content-type': 'application/json',
            }
        };
        return axios.post(url, formData, config);
    }

export default SendMsg;