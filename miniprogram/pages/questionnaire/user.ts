
export enum Constellation {
    capricorn = "魔羯座",
    aquarius = "水瓶座",
    pisces = "双鱼座",
    aries = "牡羊座",
    taurus = "金牛座",
    gemini = "双子座",
    cancer = "巨蟹座",
    leo = "狮子座",
    virgo = "处女座",
    libra = "天秤座",
    scorpio = "天蝎座",
    sagittarius = "射手座",
}

export enum Education {
    undergraduate = "本科",
    postgraduateAbove = "研究生以上",
}

export enum Marriage {
    single = "单身", married = "已婚", secret = "保密"
}

export enum Gender {
    male = "男", female = "女", secret = "保密"
}


export interface PlaceType {
    province: string
    city: string
    district: string
}

export interface userInfoType {
    serial: string,
    openID: string,
    userName: string,
    gender: Gender,
    birthDay: string,
    height: number,
    constellation: Constellation, // 星座
    profession: string, // 职业
    education: Education, // 学位
    birthPlace: PlaceType, // 出生地
    marriage: Marriage, // 婚姻
    hobbies: string,
    contract: string, // 联系方式 
    selfIntroduction: string,
    requirements: string,
}
