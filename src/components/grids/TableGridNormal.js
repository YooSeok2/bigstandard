import React from 'react';
import PropTypes from 'prop-types';
import { TableGrid } from '../StyleComponents';
import { Col, Row } from 'antd';
import { convertToYearsType, convertToType, convertToRatioInYears } from 'utils/method';
import moment from 'moment';
import { useSelector } from 'react-redux';

const drawCols = (value, type, idx) => {
    let newVal;
    if (type === 'num') {
        newVal = value ? convertToType(value, type) : '-';
    } else if (type === 'ratio') {
        newVal = value ? convertToRatioInYears(value) : '-';
    } else {
        newVal = value ? convertToYearsType(value, type) : '-';
    }

    return <Col key={`${type}${newVal}${idx}`} style={{ fontWeight: 700 }} span={4}>{newVal}</Col>;
};

const renderTrCols = (dates, winWidth) => {
    const trCols = [];
    dates.forEach((date) => {
        trCols.push(<Col key={date} style={{ fontWeight: 700 }} span={4} >{date}</Col>);
    });
    if (winWidth < 600) trCols.shift();

    return trCols;
};

const renderTdCols = (values, type, winWidth) => {
    const tdCols = [];
    if (values && values.length > 0) {
        values.forEach((value, idx) => {
            tdCols.push(drawCols(value, type, idx));
        });
    }
    if (winWidth < 600) tdCols.shift();
    return tdCols;
};

const matchTypeName = (type) => {
    if (type === 'sales') return '매출액';
    if (type === 'operating') return '영업이익';
    if (type === 'earnings') return '순이익';
    return '-';
};

const convertToCategory = (data, type) => {
    if (type === 'cy') return data + '년';
    if (type === 'cq') return moment(data).format('YYYY/MM');
    return '-';
};

const TableGridNormal = ({ tableData, tableType, category = null }) => {
    const { windowWidth } = useSelector((state) => state.global);
    if (tableData) {
        return (
            <TableGrid>
                <Row className='table-grid-row table-tr'>
                    {category && <Col key={'매출액'} span={4}>{matchTypeName(tableType)}</Col>}
                    {renderTrCols(tableData.date, windowWidth)}
                </Row>
                <Row className='table-grid-row table-td-color'>
                    {category && <Col key={category.period} span={4}>
                        {convertToCategory(category.period, category.mainType)}</Col>}
                    {renderTdCols(tableData.value, tableType, windowWidth)}
                </Row>
                <Row className='table-grid-row table-td-last'>
                    {category && <Col key={`변동율`} span={4}>변동율(%)</Col>}
                    {renderTdCols(tableData.ratio, 'ratio', windowWidth)}
                </Row>
            </TableGrid>
        );
    }
    return (
        <></>
    );

};

TableGridNormal.propstype = {
    tableData: PropTypes.object.isRequired,
    tableType: PropTypes.string.isRequired,
    category: PropTypes.string
};

export default TableGridNormal;