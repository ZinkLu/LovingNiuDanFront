import { PlaceType, userInfoType } from "./user"

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
    userName: string
    gender: number
    birthDay: string
    height: number
    constellation: string
    profession: string
    education: number
    birthPlace: string
    marriage: number
    hobbies: string
    contract: string
    selfIntroduction: string
    requirements: string


    constructor() {
        this.serial = ""
        this.userName = ""
        this.gender = 0
        this.birthDay = "1992-10-31"
        this.height = 1.00
        this.constellation = ""
        this.profession = ""
        this.education = 5
        this.birthPlace = ""
        this.marriage = 0
        this.hobbies = ""
        this.contract = ""
        this.selfIntroduction = ""
        this.requirements = ""
    }
}
