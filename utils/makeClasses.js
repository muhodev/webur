function makeClasses(props, obj, initialClassName = "") {

    let className = initialClassName.toString();

    for (const property in obj) {
        if (props[property]) {
            className += ` ${obj[property]}`
        }
    }

    return className

}

export default makeClasses