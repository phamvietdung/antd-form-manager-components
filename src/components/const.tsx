const DayOfWeek = (locale: string) => {
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
        case 'us':
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

export {
    DayOfWeek
}