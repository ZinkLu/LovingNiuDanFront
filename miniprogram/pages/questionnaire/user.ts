
export const Constellation: object[] = [
    { key: "capricorn", value: "魔羯座" },
    { key: "aquarius", value: "水瓶座" },
    { key: "pisces", value: "双鱼座" },
    { key: "aries", value: "牡羊座" },
    { key: "taurus", value: "金牛座" },
    { key: "gemini", value: "双子座" },
    { key: "cancer", value: "巨蟹座" },
    { key: "leo", value: "狮子座" },
    { key: "virgo", value: "处女座" },
    { key: "libra", value: "天秤座" },
    { key: "scorpio", value: "天蝎座" },
    { key: "sagittarius", value: "射手座" },
]

export const Marriage: object[] = [
    { key: 1, value: "单身" },
    { key: 2, value: "已婚" },
    { key: 0, value: "保密" },
]

export const Gender: object[] = [
    { key: 1, value: "男" },
    { key: 2, value: "女" },
    { key: 0, value: "保密" },
]

export const Education: object[] = [
    { key: 0, value: "小学" },
    { key: 1, value: "初中" },
    { key: 2, value: "高中" },
    { key: 3, value: "中专" },
    { key: 4, value: "大专" },
    { key: 5, value: "本科" },
    { key: 6, value: "研究生" },
    { key: 7, value: "研究生以上" },
]


export interface PlaceType {
    province: string
    city: string
    district: string
}

export interface userInfoType {
    serial: string,
    userName: string,
    gender: number,
    birthDay: string,
    height: number,
    constellation: string, // 星座
    profession: string, // 职业
    education: number, // 学位
    birthPlace: string, // 出生地
    marriage: number, // 婚姻
    hobbies: string,
    contract: string, // 联系方式 
    selfIntroduction: string,
    requirements: string,
}
