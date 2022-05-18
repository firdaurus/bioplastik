const hashes = [
    {
        hash: '9cec5302',
        genus: 'Fissidens',
    },
    {
        hash: '34c0df48',
        genus: 'Polytrichum',
    },
    {
        hash: 'a5772ff3',
        genus: 'Rhodobryum',
    }
]

const getGenusFromHash = function(_hash: string){
    let genus = hashes.find(function(hash){
        return hash.hash === _hash
    })
    return genus?.genus || ''
}

const getHashFromGenus = function(_genus: string){
    let hash = hashes.find(function(hash){
        return hash.genus === _genus
    })
    return hash?.hash || ''
}

export default hashes
export {
    getGenusFromHash,
    getHashFromGenus,
}
