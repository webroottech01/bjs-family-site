export const tabOpacity = (index: number, slidIndex: number) => {
    let opacity = 1;
    if(index === 0 && slidIndex <= 4) {
        opacity = 1;
    } else if(index === 1 && (slidIndex > 4 && slidIndex <= 6)) {
        opacity = 1;
    } else if(index === 2 && slidIndex === 7) {
        opacity = 1;
    } else {
        opacity = 0.4;
    }
    return opacity;
}