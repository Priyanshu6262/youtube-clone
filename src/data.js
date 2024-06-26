export const API_KEY = 'AIzaSyDJil-t8gQgE21lSqpouJ7G1FqnCJsAPrM'

export const value_converter = (value) => {
    if(value>=1000000) {
        return Math.floor(value/1000000)+"M"
    }
    else if (value>=1000) {
        return Math.floor(value/1000)+' K'
    }
    else {
        return va
    }
}