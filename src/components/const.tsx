export type ILocale = 'en' | 'vn' | 'cn'

const DayOfWeek = (locale: ILocale) => {
    switch (locale) {
        case 'vn':
            return [
                {
                    id: '2',
                    value: 'Thứ hai'
                },
                {
                    id: '3',
                    value: 'Thứ ba'
                },
                {
                    id: '4',
                    value: 'Thứ tư'
                },
                {
                    id: '5',
                    value: 'Thứ năm'
                },
                {
                    id: '6',
                    value: 'Thứ sáu'
                },
                {
                    id: '7',
                    value: 'Thứ bảy'
                },
                {
                    id: '0',
                    value: 'Chủ nhật'
                }
            ]
        case 'cn':
            return [
                {
                    id: '2',
                    value: '第二'
                },
                {
                    id: '3',
                    value: '周二'
                },
                {
                    id: '4',
                    value: '周三'
                },
                {
                    id: '5',
                    value: '周四'
                },
                {
                    id: '6',
                    value: '星期五'
                },
                {
                    id: '7',
                    value: '周六'
                },
                {
                    id: '0',
                    value: '星期日'
                }
            ]
        case 'en':
        default:
            return [
                {
                    id: '2',
                    value: 'Monday'
                },
                {
                    id: '3',
                    value: 'Tuesday'
                },
                {
                    id: '4',
                    value: 'Wednesday'
                },
                {
                    id: '5',
                    value: 'Thursday'
                },
                {
                    id: '6',
                    value: 'Friday'
                },
                {
                    id: '7',
                    value: 'Saturday'
                },
                {
                    id: '0',
                    value: 'Sunday'
                }
            ]
    }
}

const DayOfMonth = () => {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    return arr.map(x => {
        return {
            id: `${x}`,
            value: `${x}`
        }
    })
}

const MonthOfYear = (locale : ILocale) => {
    switch (locale) {
        case 'vn':
            return [
                {
                    id: '1',
                    value: 'Tháng một'
                },
                {
                    id: '2',
                    value: 'Tháng hai'
                },
                {
                    id: '3',
                    value: 'Tháng ba'
                },
                {
                    id: '4',
                    value: 'Tháng tư'
                },
                {
                    id: '5',
                    value: 'Tháng năm'
                },
                {
                    id: '6',
                    value: 'Tháng sáu'
                },
                {
                    id: '7',
                    value: 'Tháng bảy'
                },
                {
                    id: '8',
                    value: 'Tháng tám'
                },
                {
                    id: '9',
                    value: 'Tháng chín'
                },
                {
                    id: '10',
                    value: 'Tháng mười'
                },
                {
                    id: '11',
                    value: 'Tháng mười một'
                },
                {
                    id: '12',
                    value: 'Tháng mười hai'
                }
            ]
        case 'cn':
            return [
                {
                    id:"1",
                    value:"一月"
                },
                {
                    id:"2",
                    value:"二月"
                },
                {
                    id:"3",
                    value:"三月"
                },
                {
                    id:"4",
                    value:"四月"
                },
                {
                    id:"5",
                    value:"五月"
                },
                {
                    id:"6",
                    value:"六月"
                },
                {
                    id:"7",
                    value:"七月"
                },
                {
                    id:"8",
                    value:"八月"
                },
                {
                    id:"9",
                    value:"九月"
                },
                {
                    id:"10",
                    value:"十月"
                },
                {
                    id:"11",
                    value:"十一月"
                },
                {
                    id:"12",
                    value:"十二月"
                }
            ]
        case 'en':
        default:
            return [
                {
                    id: '1',
                    value: 'January'
                },
                {
                    id: '2',
                    value: 'February'
                },
                {
                    id: '3',
                    value: 'March'
                },
                {
                    id: '4',
                    value: 'April'
                },
                {
                    id: '5',
                    value: 'May'
                },
                {
                    id: '6',
                    value: 'June'
                },
                {
                    id: '7',
                    value: 'July'
                },
                {
                    id: '8',
                    value: 'August'
                },
                {
                    id: '9',
                    value: 'September'
                },
                {
                    id: '10',
                    value: 'October'
                },
                {
                    id: '11',
                    value: 'November'
                },
                {
                    id: '12',
                    value: 'December'
                }
            ]
    }
}

const Year = () => {

    var arr = [];

    var date = new Date();

    for(var i = 1900; i < date.getFullYear(); i++){
        arr.push(i);
    }

    return arr.map(x => {
        return {
            id : `${x}`,
            value : `${x}`
        }
    })
}

export {
    DayOfWeek,
    DayOfMonth,
    MonthOfYear,
    Year
}