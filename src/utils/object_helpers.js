export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
    return items.map(user => {
        if (user[objPropName] === itemId) {
        // if (user.['id'] === itemId) {
            return {...user, ...newObjProps}
        }
        return user;
    });
}
