import useSWR from 'swr';
import axios from 'axios';

const fetcher = (url) => axios({
    method: 'GET',
    url: url
}).then((result) => result.data);

const SwrHooks = (url) => {
    const { data, error } = useSWR(url, fetcher);
    if (error) {
        console.log(error);
        return null;
    }

    return data;
};

export default SwrHooks;
