export type Tournament = {
    id: string,
    name: string,
    deadline: number,
    openline: number,
    truedeadline: number,
    canRegister: boolean,
    status: number,
    isRegistrationOpen: boolean,
    isRegistrationClose: boolean,
    firstDay: number,
    lastDay: number,
    ageCategories: string[]
    type: Type,
    location: string,
    disciplines: string[],
}

export type Type = {
    id: number,
    isteam: boolean,
    name: string
}

export type BadnetTournaments = {
    events: BadnetTournament[]
}

export type BadnetTournament = {
    id: string,
    name: string,
    deadline: number,
    openline: number,
    truedeadline: number,
    canregister: boolean,
    status: number,
    isregiopen: boolean,
    isregiclose: boolean,
    firstday: number,
    lastday: number,
    catages: AgeCategory[]
    type: Type,
    level: Level,
    place: Place,
    disciplines: Discipline[],
}

export type AgeCategory = {
    name: string
}
export type Place = {
    location: string,
    dpt: number,
}
export type Discipline = {
    isdouble: boolean,
    name: string,
    stamp: string
}

export type Level = {
    id: number,
    name: string
}
