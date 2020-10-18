import { get } from 'axios';

const URL = "http://www.juso.go.kr/addrlink/addrLinkApi.do";
const KEY = "devU01TX0FVVEgyMDIwMDkxMDE4MzIxNzExMDE3MDA=";

export const getAddress = async (search) =>{
    const result = await get(URL, {
        params: {
            confmKey: KEY,
            currentPage: 1,
            countPerPage: 10,
            keyword: search,
            resultType: 'json'
        },
    })
    return result.data.results.juso;
}
