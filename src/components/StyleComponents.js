import styled, { css } from 'styled-components';
import { Menu, Input, Button, Col, Radio, Select } from 'antd';

export const HeaderWrap = styled.div`
    width: 100%;
    background-color: #fff;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    padding-left: 100px;
    padding-right: 100px;
    position: fixed;
    top: 0;
    z-index: 999;
`;

export const MbHeader = styled(Menu)`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 60px;
    z-index: 999;
    border-top: 2px solid #e6e6e6;
`;

export const MbMain = styled.div`
    padding-bottom: 70px;
`;

export const HeaderMenuItem = styled(Menu.Item)`
    width: 45%;
    margin: auto;
    height: 60px;
    text-align: center;
    display: flex !important;
    align-items: center;
    justify-content: center;
    border: none;
    font-size: 16px;
`;

export const SearchInputBox = styled(Input)`
    height: var(--desktop-search-input-height);
    border-radius: calc(0.5*var(--desktop-search-input-height));
    background: #fff;
    border: 1px solid #dfe1e5;

    & :focus, :hover, ::selection, :active{
        background: #fff;
        border: transparent !important;
        outline: none !important;
        box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28);
    }
`;

export const MobileSearchInputBox = styled(Input)`
    width: 100%;
    height: 55px;
    background: #fff;
    border-bottom: 1px solid #30a46c;

    & :focus, :hover, ::selection, :active{
        background: #fff;
        border-bottom: 1px solid #30a46c !important;
        outline: none !important;
    }
`;

export const MobileSearchBoxFooter = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    background: #fff;
    align-items: center;
    border-bottom: 2px solid #e6e6e6;
    padding: 0 20px;
    justify-content: flex-end;
    font-size: 16px;

    & > div{
        padding: 5px 10px;
        border-radius: 5px;
        border: 1px solid #eee;
        color: #8f8f8f;
    }
`;

export const SearchPreviewBox = styled.div`
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    flex-direction: column;
    padding: 10px;
    justify-content: center;

    & > h4{
        font-size: 16px;
        font-weight: 700;
    }

    & > span{
        font-size: 14px;
        color: var(--color-grey0);
        margin-top: 5px;
    }

    & :hover, :focus {
        background: #e6e6e6;
    }
`;

export const BigRankList = styled.div`
    width: 100%;
    height: var(--desktop-bigrank-list-height);
    display: flex;
    border-radius: calc(0.5*var(--desktop-search-input-height));
    background-color: #fff;
    box-shadow: 0 23px 20px -24px hsl(219deg 37% 18% / 24%);
    margin-top: 30px;
    padding: 20px;
`;

export const MobileBigRankList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: calc(0.5*var(--desktop-search-input-height));
    background-color: #fff;
    box-shadow: 0 23px 20px -24px hsl(219deg 37% 18% / 24%);
    margin-top: 30px;
    padding: 20px 30px;
    ${props =>
        props.$islook ?
            css`
            height: 735px;
        `
            :
            css`
            height:var(--mobile-bigrank-list-height);
        `
}
    @media all and (max-width:600px){
        padding: 15px 30px;
    }
`;

export const StockPresetLeft = styled.div`
    display: flex;
    flex-direction: column;

    & h4{
        font-size: 24px;
        font-weight: 700;
        line-height: 1.1;
    }

    & span{
        font-size: 20px;
        color: var(--color-grey0);
        margin-top: 8px;
    }
    @media all and (max-width:1200px){
        & h4{
            font-size: 20px;
        }
        & span{
            font-size: 16px;
            margin-top: 7px;
        }
    }

    @media all and (max-width:820px){
        & h4{
            font-size: 15px;
        }
        & span{
            font-size: 13px;
            margin-top: 7px;
        }
    }

    @media all and (max-width:600px){
        & h4{
            font-size: 20px;
        }
        & span{
            font-size: 17px;
            font-weight: 600;
        }
    }
`;

export const StockPresetRight = styled.div`
    display: flex;
    flex-direction: column;

    & .rank-diff-wrap{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    & .rank-diff-wrap > div{
        margin-top: 12px;
    }

    & .rank-diff-wrap > h4{
        font-size: 22px;
        font-weight: 700;
    }

    & .rank-price-diff{
        color: var(--color-grey0);
        margin-right: 7px;
        font-size: 17px;
        font-weight: 600;
    }

    @media all and (max-width:1200px){
        & .rank-diff-wrap > h4{
            font-size: 19px;
        }
        & .rank-price-diff{
            font-size: 13px;
        }
        & .rank-diff-wrap > div{
            margin-top: 8px;
        }
    }

    @media all and (max-width:820px){
        & .rank-diff-wrap > h4{
            font-size: 15px;
        }
        & .rank-price-diff{
            font-size: 13px;
        }
        & .rank-diff-wrap > div{
            margin-top: 5px;
        }
    }

    @media all and (max-width:600px){
        & .rank-diff-wrap > h4{
            font-size: 20px;
        }
        & .rank-price-diff{
            font-size: 16px;
        }
        & .rank-diff-wrap > div{
            margin-top: 7px;
        }
        margin-left: 10px;
    }
`;

export const RankSumTop = styled.div`
    flex: 1.5;
    width: 100%;
    border: 2px solid #e6e6e6;
    border-radius: 16px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    & .rank-sum-ct{
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    & .rank-sum-top{
        flex: 1.5;
    }

    & .rank-sum-ct > span{
        font-size: 15px;
        font-weight: 700;
        color: var(--color-grey0);
    }

    & .rank-sum-ct > p{
        font-size: 25px;
        font-weight: 600;
        margin-top: 10px;
    }

    @media all and (max-width:1200px){
        & .rank-sum-ct > span{
            font-size: 12px;
        }

        & .rank-sum-ct > p{
            font-size: 19px;
        }
    }

    @media all and (max-width:820px){
        & .rank-sum-ct > span{
            font-size: 10px;
        }

        & .rank-sum-ct > p{
            font-size: 15px;
        }
    }

    @media all and (max-width:820px){
        & .rank-sum-ct > span{
            font-size: 13px;
        }

        & .rank-sum-ct > p{
            font-size: 18px;
            margin-top: 7px;
        }
    }

`;

export const RatioSpan = styled.span`
    font-size: 17px;
    font-weight: 600;
    ${props =>
        props.num &&
        props.num > 0 ?
            css`color:#c84a32;`
            : [props.num === 0 ?
                css`color:#333;`
                : css`color:#1261c4;`
            ]}

    @media all and (max-width:1200px){
        font-size: 13px    
    }

    @media all and (max-width:820px){
        font-size: 12px;
    }

    @media all and (max-width:600px){
        font-size: 17px;
    }
`;

export const BarList = styled.div`
    flex: 1.5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const RankTopWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & h4 {
        margin-bottom: 15px;
        font-size: 20px;
    }

    & span {
        margin-top: 20px;
        font-size: 23px;
        font-weight: 700;
    }

    @media all and (max-width:1200px){
        & h4 {
            margin-bottom: 10px;
            font-size: 17px;
        }
        & span {
            font-size: 20px;
            margin-top: 15px;
        }
    }

    @media all and (max-width:820px){
        & h4 {
            margin-bottom: 5px;
            font-size: 13px;
        }
        & span {
            font-size: 15px;
            margin-top: 10px;
        }
    }

    @media all and (max-width:600px){
        flex: 1;
        border-bottom: 1px solid #e6e6e6;
        padding-bottom: 30px;
        & h4 {
            font-size: 16px;
        }
        & span {
            font-size: 20px;
        }
    }
`;

export const GoDetail = styled.div`
    font-size: 14px;
    color: #5e5e5e;
    cursor: pointer;
    margin-top: 7px;
    padding: 7px;
    border: 1px solid #e6e6e6;
    border-radius: 5px;

    & :hover, :focus, :active {
        background: #e6e6e6;
    }
    @media all and (max-width:1300px){
        font-size: 12px    
    }

    @media all and (max-width:820px){
        font-size: 11px;
        font-weight: 600;
    }
`;

export const LoadingSpin = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    padding-top: 20%;
`;



export const MobileTopRank = styled.div`
    flex: 6;

    & > div{
        display: flex;
        margin-top: 30px;
    }
    
    ${props =>
        props.$islook ?
            css`
        display:flex;
        flex-direction: column;
        `
            :
            css`
        display: none;
        `
}`;

export const LookAtMore = styled(Button)`
    font-size: 16px;
    margin-top: 5px;
    height: 30px;
    color: #939393;
    ${props =>
        props.$islook ?
            css`
        display:none;
        `
            :
            css`
        display: block;
        `
}
`;

export const CloseLookAt = styled(Button)`
    padding-top: 10px;
    height: 40px;
    font-size: 16px;
    color: #939393;
${props =>
        props.$islook ?
            css`
        display:block;
        `
            :
            css`
        display: none;
        `
}`;

export const TopTenWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    padding: 0 20px;
    & span{
        font-size: 17px;
        color: #1d1d1f;
    }
`;

export const TopTenRankBox = styled.div`
    padding: 8px 10px;
    border: 1px solid hsla(216, 41%, 87%, 0.8);
    cursor: pointer;
    border-radius: 5px;
    color: #606f7b;
    

    & :focus, :active, :hover{
        background-color: #fff;
        color: #30a46c;
    }
`;

export const StockDetail = styled.div`
    margin-top: 100px;
    padding: 0 70px 50px 70px;
    display: flex;
    flex-direction: column;

    & .detail-summary {
        display: flex;
        width: 100%;
        margin: auto;
        padding: 20px;
        background: #fff;
        box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28);
        border-radius: calc(var(--desktop-detail-summary-height)*0.05);
        height: var(--desktop-detail-summary-height);
    }

    & .detail-summary-left {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    & .detail-summary-left > .detail-stock-preset{
        display: flex;
        padding: 10px;
        margin-bottom: 10px;
    }
    & .detail-preset-box{
        flex: 6;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    & .detail-right-preset{
        margin-left: 30px;
    }

    & .detail-summary-left > .detail-summary-grid{
        flex: 1;
        width: 100%;
        padding: 15px;
        border: 2px solid #e6e6e6;
        border-radius: 20px;
    }

    & .detail-summary-right {
        flex: 1;
    }

    @media all and (max-width:1440px){
        & .detail-summary {
            height: 950px;
            flex-direction: column;
        }
        & .detail-summary-right {
            margin-top: 20px;
        }
    }
    @media all and (max-width:1100px){
        & .detail-summary {
            height: 900px;
        }
    }
    @media all and (max-width:880px){
        & .detail-summary {
            height: 930px;
        }
    }

    @media all and (max-width:769px){
        & .detail-summary {
            height: 1100px;
        }
        padding: 0 30px 50px 40px;
    }

    @media all and (max-width:600px){
        margin-top: 5px;
        padding: 0 5px;

        & .detail-summary {
            padding: 10px 0;
        }

        & .detail-summary-left > .detail-stock-preset{
            margin-bottom: 10px;
            margin-left: 10px;
        }

        & .detail-preset-box{
            flex: 5;
        }

        & .detail-summary-left > .detail-summary-grid{
            padding: 0 5px 0 0;
            border: none;
            border-bottom: 1px solid #e6e6e6;
            border-top: 1px solid #e6e6e6;
            border-radius: 0;
            display: flex;
            align-items: center;
        }
        & .detail-summary-right {
            margin-top: 0;
        }
    }
`;

export const SummaryCol = styled(Col)`
    display: flex;
    flex-direction: row;
    width: 31%;
    justify-content: space-between;
    padding: 10px;
    font-size: 15px;
    font-weight: 600;
    & span{
        color: #606f7b;
        font-size: 14px;
        font-weight: 600;
    }

    & p {
        font-weight: 600;
    }
    @media all and (max-width:1400px){
        padding: 10px 15px;
    }
    @media all and (max-width:1100px){
        
        & span{
            font-size: 13px;
        }
        font-size: 14px;
    }
    @media all and (max-width:880px){
    
        & span{
            font-size: 12px;
        }
        font-size: 13px;
    }
    @media all and (max-width:769px){
        
    }
    @media all and (max-width:600px){
        width: 50%;
        padding: 8px 10px;
        & span{
            font-size: 11px;
        }
        font-size: 12px;
    }
`;


export const DetailCol = styled(Col)`
    display: flex;
    flex-direction: row;
    width: 280px;
    justify-content: space-between;
    padding: 10px;
    font-size: 15px;

    & span{
        color: #606f7b;
        font-size: 14px;
        font-weight: 600;
    }

    & h4{
        font-weight: 600;
        font-size: 13px;
    }

    & p {
        font-weight: 600;
        font-size: 14px;
    }
    @media all and (max-width:1400px){
        padding: 10px 15px;
    }
    @media all and (max-width:1100px){
    }
    @media all and (max-width:880px){
        padding: 10px 12px;
        & span{
            font-size: 12px;
        }

        & h4{
            font-size: 11px;
        }

        & p {
            font-size: 12px;
        }
    }
    @media all and (max-width:769px){

}
    @media all and (max-width:600px){
        & span{
            font-size: 13px;
        }

        & h4{
            font-size: 12px;
        }

        & p {
            font-size: 13px;
        }
    }
`;

export const DetailAnalysis = styled.div`
    margin-top: 30px !important;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    border-radius: calc(var(--desktop-detail-analysis-height)*0.05);
    margin: auto;
    padding: 20px;
    padding-bottom: 70px;
    background: #fff;
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28);

    & .detail-radio-group{
        text-align: center;
        margin-top: 10px;
        border-bottom: 1px solid #e6e6e6;
        padding-bottom: 30px;
    }
    & .detail-mobile-radio-group{
        display: flex;
        justify-content: center;
        margin-top: 5px;
    }
    & .radio2{
        border-bottom: 1px solid #e6e6e6;
        padding-bottom: 30px;
    }
    & .detail-analy-content{
        display: flex;
        flex-direction: column;
        flex: 1;
        margin-top: 30px;
        align-items: center;
    }

    & .detail-analy-chart{
        width: 100%;
        height: 500px;
    }
    & .detail-skills-chart{
        width: 100%;
        height: 700px;
    }
    & .detail-analy-summary {
        display: flex;
        align-items: center;
        width: 90%;
        height: fit-content;
        margin: 0 auto;
        padding: 20px;
        border-radius: calc(var(--desktop-detail-analy-summary)*0.05);
        border: 2px solid #e6e6e6;
        margin-top: 50px;
    }

    & .detail-analy-summary > div {
        flex: 1;
    }

    @media all and (max-width:1400px){
        & .detail-analy-summary {
            flex-direction: column;
        }
    }
    @media all and (max-width:1100px){
    }
    @media all and (max-width:880px){
    }
    @media all and (max-width:769px){
        & .detail-analy-summary {
            width: 100%;
        }
    }
    @media all and (max-width:600px){
        padding: 20px 0 40px 0;
        height: fit-content;
        border-radius: 25px;
        margin-top: 10px !important;
        & .detail-analy-summary {
            border:none;
            border-top: 1px solid #e6e6e6;
            border-radius: 0;
            padding: 30px 5px;
            margin-top: 0;
        }
        & .detail-skills-chart{
            height: 500px;
            padding-bottom: 50px;
        }

        & .supply-summary{
            margin-top: 40px;
            padding-top: 20px;
        }

      
    }
`;

//  f8f8fc
export const TableGrid = styled.div`
    width: 100%;
    & .table-grid-row {
        text-align: end;
        padding: 15px 0; 
        padding-right: 5px;
        font-size: 14px;
    }
    & .table-tr{
        border-bottom: 2px solid hsl(215, 42%, 90%);
        padding-bottom: 10px;
        color: #606f7b;
    }

    & .table-td-color{
        background-color: #f8f8fc;
    }

    & .table-td-last{
        border-bottom: 2px solid hsl(215, 42%, 90%);
    }
    @media all and (max-width:1400px){
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    @media all and (max-width:1100px){
        height: 1080px;
    }
    @media all and (max-width:880px){
        & .table-grid-row {
            font-size: 12px;
        }
    }
    @media all and (max-width:769px){
        font-weight: 600;
    }
    @media all and (max-width:600px){
       
        & .table-grid-row {
            font-size: 12px;
            justify-content: space-between;
            word-break: keep-all;
        }
    }
`;

export const RowGrid = styled.div`
    width: 100%;
    & .detail-grid-row{
        width: 100%;
        margin-left: 10px;
    }
    @media all and (max-width:1400px){
        justify-content: space-between;
        & .detail-grid-row{
            margin-left: 0;
            margin-top: 15px;
            border-top: 1px solid hsl(215,42%,90%);
        }
    }
    @media all and (max-width:1100px){
        height: 1080px;
    }
    @media all and (max-width:880px){
      
    }
    @media all and (max-width:769px){

    }
    @media all and (max-width:600px){
        
    }
`;

export const RadioBtn = styled(Radio.Button)`
    @media all and (max-width:600px){
        font-size: 14px;
    }
`;

export const SelectOpt = styled(Select.Option)`
`;