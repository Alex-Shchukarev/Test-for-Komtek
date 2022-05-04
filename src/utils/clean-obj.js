export function cleanFormat(obj) {
    const result = JSON.parse(JSON.stringify(obj))
            if('fullName' in result) {
                const arrNames = result['fullName'].split(' ')
                switch (arrNames.length) {
                    case 1:
                        result.surname = arrNames[0]
                        result.firstName = ''
                        result.fatherName = ''
                        break;
                    case 2:
                        result.surname = arrNames[0]
                        result.firstName = arrNames[1]
                        result.fatherName = ''
                        break;
                    case 3:
                        result.surname = arrNames[0]
                        result.firstName = arrNames[1]
                        result.fatherName = arrNames[2]
                        break;
                
                    default:
                        break;
                }
            }
    return result
}