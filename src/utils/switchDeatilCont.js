import DetailCalculation from 'components/DetailCalculation';
import DetailQuarter from 'components/DetailQuarter';
import DetailSupply from 'components/DetailSupply';
import DetailTech from 'components/DetailTech';
import DetailYearly from 'components/DetailYearly';
import Loading from 'components/Loading';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const switchDetailCont = (shcode, type) => {
    const url = BASE_URL + `/details/${shcode}/${type}`;
    switch (type) {
    case 'ay' :
        return <DetailYearly url={url} />;
    case 'aq' :
        return <DetailQuarter url={url} />;
    case 'cy' :
    case 'cq' :
        return <DetailCalculation url={url} type={type} />;
    case 'su' :
        return <DetailSupply url={url} />;
    case 'ti' :
        return <DetailTech url={url} />;
    default :
        return <Loading></Loading>;
    }

};

export default switchDetailCont;