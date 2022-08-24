import {EventEmitter} from 'events';
import axios from "axios";
import "dotenv/config"

const broker:EventEmitter = new EventEmitter();

broker.on('image_upload', async (url:string)=>{
    //make a call to p2-image-filter service
    try{
        const res = await axios.get(process.env.IMAGE_FILTER_ENDPOINT+encodeURIComponent(url))
    }
    catch (e){
    }

})

export default broker;