import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import { useSelector } from 'react-redux';
import { TableGrid } from 'components/StyleComponents';
import { commas } from 'utils/method';

const drawCols = (value, type, idx) => {
    let newVal = '';
    newVal = value ? commas(value, 'num') : '-';
    return <Col key={`${type}${newVal}${idx}`} span={3}>{newVal}</Col>;
};

const renderTrCols = (dates, kind) => {
    const trCols = [];
    if (kind !== 'sector-net-buying') trCols.push(<Col key={'투자자'} span={3}>투자자</Col>);
    dates.forEach((date) => {
        trCols.push(<Col key={date} span={3}>{date}</Col>);
    });
    return trCols;
};

const renderTdCols = (values, type) => {
    const tdCols = [];
    if (values && values.length > 0) {
        tdCols.push(<Col key={`${type}`} span={3}>{type}</Col>);
        values.forEach((value, idx) => {
            tdCols.push(drawCols(value, type, idx));
        });
    }
    return tdCols;
};

const renderTdCols2 = (values, type) => {
    const tdCols = [];
    if (values && values.length > 0) {
        const valArr = values.slice(0, 2);
        const numArr = values.slice(2, values.length);
        valArr.forEach((value, idx) => {
            tdCols.push(<Col key={`${value}${idx}`} span={3}>{value}</Col>);
        });
        numArr.forEach((value, idx) => {
            tdCols.push(drawCols(value, type, idx));
        });
    }
    return tdCols;
};

const SupplyTableGrid = ({ tables, kind }) => {

    if (tables) {
        return (
            <TableGrid>
                <div className='num-kind'>(억원)</div>
                <Row justify='space-between' className='table-grid-row table-tr supply-tr'>
                    {renderTrCols(tables.date, kind)}
                </Row>
                { kind !== 'sector-net-buying' ?
                    <>
                        <Row justify='space-between' className='table-grid-row table-td-color'>
                            {renderTdCols(tables['개인'], '개인')}
                        </Row>
                        <Row justify='space-between' className='table-grid-row'>
                            {renderTdCols(tables['기관'], '기관')}
                        </Row>
                        {tables['연투사'] &&
                        <Row justify='space-between' className='table-grid-row table-top-border'>
                            {renderTdCols(tables['연투사'], '연투사')}
                        </Row>}
                        <Row justify='space-between' className='table-grid-row table-td-color table-td-last'>
                            {renderTdCols(tables['외국인'], '외국인')}
                        </Row>
                    </>
                    : <>
                        {tables.value && tables.value.map((value, idx) => {
                            if (idx % 2 === 1) {
                                return <Row key={idx} justify='space-between' className='table-grid-row'>
                                    {renderTdCols2(value, kind)}
                                </Row>;
                            } else {
                                return <Row key={idx} justify='space-between' className='table-grid-row table-td-color'>
                                    {renderTdCols2(value, kind)}
                                </Row>;
                            }

                        })}
                    </>}

            </TableGrid>
        );
    }
    return (
        <></>
    );
};

SupplyTableGrid.propstype = {
    tables: PropTypes.object.isRequired,
    kind: PropTypes.string.isRequired
};

export default SupplyTableGrid;