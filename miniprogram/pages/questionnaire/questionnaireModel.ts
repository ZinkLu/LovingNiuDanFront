import { PlaceType, userInfoType, Gender, Constellation, Education, Marriage } from "./user"

class Place implements PlaceType {
    private _province = ""
    public get province(): string {
        return this._province
    }
    public set province(value: string) {
        this._province = value
    }

    private _city = ""
    public get city(): string {
        return this._city
    }
    public set city(value: string) {
        this._city = value
    }

    private _district = ""
    public get district(): string {
        return this._district
    }
    public set district(value: string) {
        this._district = value
    }
}


export class UserInfo implements userInfoType {

    serial: string
    openID: string
    userName: string
    gender: Gender
    birthDay: string
    height: number
    constellation: Constellation
    profession: string
    education: Education
    birthPlace: Place
    marriage: Marriage
    hobbies: string
    contract: string
    selfIntroduction: string
    requirements: string


    constructor() {
        this.serial = ""
        this.openID = ""
        this.userName = ""
        this.gender = Gender.female
        this.birthDay = "1992-10-31"
        this.height = 1.00
        this.constellation = Constellation.aquarius
        this.profession = ""
        this.education = Education.postgraduateAbove
        this.birthPlace = new Place()
        this.marriage = Marriage.single
        this.hobbies = ""
        this.contract = ""
        this.selfIntroduction = ""
        this.requirements = ""
    }
}
