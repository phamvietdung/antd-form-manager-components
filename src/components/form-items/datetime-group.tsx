import { Input, Select } from 'antd';
import React, { useState } from 'react'
import { DayOfMonth, MonthOfYear, Year } from '../const';

const { Option } = Select;

interface DateTimeGroupModel {
    date?: string,
    month?: string,
    year?: string
}

interface DateTimeGroupProps {
    style?: React.CSSProperties,
    value?: DateTimeGroupModel,
    onChange?: (value: DateTimeGroupModel) => void,
    name: string,
    disabled?: boolean
}

const DateTimeGroup: React.FC<DateTimeGroupProps> = ({ disabled = false, name = "", style = undefined, value = {}, onChange }) => {

    const [date, setDate] = useState<string>(value.date ?? "");
    const [month, setMonth] = useState<string>(value.month ?? "");
    const [year, setYear] = useState<string>(value.year ?? "");


    const triggerChange = (changedValue: { date?: string; month?: string, year?: string }) => {
        onChange?.({ date, month, year, ...value, ...changedValue });
    };

    // const onDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setDate(e.target.value);
    //     triggerChange({ date: e.target.value });
    // };

    // const onMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setMonth(e.target.value);
    //     triggerChange({ month: e.target.value });
    // };


    // const onYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setYear(e.target.value);
    //     triggerChange({ year: e.target.value });
    // };

    const onDateChange = (e: string) => {
        console.log(e);
        setDate(e);
        triggerChange({ date: e });
    };

    const onMonthChange = (e: string) => {
        console.log(e);
        setMonth(e);
        triggerChange({ month: e });
    };


    const onYearChange = (e: string) => {
        console.log(e);
        setYear(e);
        triggerChange({ year: e });
    };

    let styleFirst = Object.assign({}, style ?? {});;

    if (style == undefined)
        styleFirst = {
            width: '33%'
        }
    else
        styleFirst.width = '33%';


    let stylesNth = Object.assign({}, styleFirst ?? {});;

    stylesNth.width = 'calc(33% - 10px)'

    stylesNth.marginLeft = 10;

    return (
        <span>
            <Select
                disabled={disabled}
                showSearch
                style={styleFirst}
                defaultActiveFirstOption={false}
                optionFilterProp="children"
                filterOption={(input, option: any) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                allowClear={true}
                value={date}
                onChange={onDateChange}
            >
                {
                    DayOfMonth().map((select_data: any, select_index: any) => (
                        <Option
                            value={select_data['id']}
                            key={`${name}-${select_index}`}>
                            {select_data['value']}
                        </Option>
                    ))
                }
            </Select>
            <Select
                disabled={disabled}
                showSearch
                style={stylesNth}
                defaultActiveFirstOption={false}
                optionFilterProp="children"
                filterOption={(input, option: any) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                allowClear={true}
                value={month}
                onChange={onMonthChange}
            >
                {
                    MonthOfYear().map((select_data: any, select_index: any) => (
                        <Option
                            value={select_data['id']}
                            key={`${name}-${select_index}`}>
                            {select_data['value']}
                        </Option>
                    ))
                }
            </Select>
            <Select
                disabled={disabled}
                showSearch
                style={stylesNth}
                defaultActiveFirstOption={false}
                optionFilterProp="children"
                filterOption={(input, option: any) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                allowClear={true}
                value={year}
                onChange={onYearChange}
            >
                {
                    Year().map((select_data: any, select_index: any) => (
                        <Option
                            value={select_data['id']}
                            key={`${name}-${select_index}`}>
                            {select_data['value']}
                        </Option>
                    ))
                }
            </Select>
            {/* <Input
                type="text"
                value={date}
                onChange={onDateChange}
                style={styleFirst}
            />
            <Input
                type="text"
                value={month}
                onChange={onMonthChange}
                style={stylesNth}
            />
            <Input
                type="text"
                value={year}
                onChange={onYearChange}
                style={stylesNth}
            /> */}
        </span>
    );
}

export default DateTimeGroup;