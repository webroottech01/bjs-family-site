export const compareTodayAndCollectionDates = (cd: number, td: number) => {
    if (td > cd) return td;
    else return cd;
}
export const compareCollectionAndDeliveryDates = (cd: number, dd: number) => {
    if ((cd - dd) === 0) return "Collection and Delivery dates can not be same";
    else return "";
}
export const compareTodayAndDeliveryDates = (td: number, dd: number) => {
    if ((td - dd) === 0) return "Delivery date must not be current date"
}
export const compareAllDates = (td: number, cd: number, dd: number) => {
    if ((cd && dd) > td) {
        if (dd < cd) {
            return "Delivery cannot be done prior to collection"
        }
    }
}