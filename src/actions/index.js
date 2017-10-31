
export const FETCH_GNOMES = 'fetch_gnomes'
export const FETCH_GNOMES_SUCCESS = 'fetch_gnomes_success'

const ROOT_URL = 'http://master.datasource.jazzy-hr.jzapp.io/api/v1/gnomes?'

export function gnomesFetchDataSucces(gnomes){
    return{
        type: FETCH_GNOMES_SUCCESS,
        gnomes,
    }
}
export function fetchGnomes(){
    return function action(dispatch){
        
        fetch(`${ROOT_URL}_format=json&limit=15&offset=0`,{
            method: 'GET',
        })
        .then(response=>{
            if(!response.ok){
                throw new Error('not working')
            }
            return response.json()
        })
        .then(data=>{
            return dispatch(gnomesFetchDataSucces(data))
        })
        .catch(err=>console.log(err))
    }
}