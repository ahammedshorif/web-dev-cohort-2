import {atom, selector} from "recoil"


export const networkAtom = atom({
    key:"networkAtom",
    default: 9,
})

export const notificationAtom = atom({
    key:"notificationAtom",
    default: 114,
})

export const jobsAtom = atom({
    key:"jobsAtom",
    default: 0,
})

export const messagekAtom = atom({
    key:"messagekAtom",
    default: 3,
})


export const totalNotificationCount = selector({
    key:"totalNotificationCount",
    get: ({get})=>{
        const networkCount = get(networkAtom);
        const notificationCount = get(notificationAtom)
        const jobsCount = get(jobsAtom)
        const messageCount = get(messagekAtom)
        return networkCount+notificationCount+jobsCount+messageCount;
    }
})