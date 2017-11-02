// @flow
export const FETCH_GNOMES = 'fetch_gnomes'
export const FETCH_GNOMES_SUCCESS = 'fetch_gnomes_success'
export const EDIT_GNOME_DISPLAY = 'edit_gnome_display'

const ROOT_URL = 'http://master.datasource.jazzy-hr.jzapp.io/api/v1/gnomes'

export function editGnomeFormDisplay(display){
    return{
        type: EDIT_GNOME_DISPLAY,
        display: display
    }
}
export function gnomesFetchDataSuccess(gnomes){
    return{
        type: FETCH_GNOMES_SUCCESS,
        gnomes,
    }
}

export function updateGnome(values, id){
    return function action(dispatch){
        fetch(`${ROOT_URL}/${id}`,{
            method: 'PATCH',
            body: JSON.stringify(values)
        })
        .then(response =>{
            if(!response.ok) throw new Error
            return response.json()
        })
        .then(data=>{
            alert(`new data ${data}`)
        })
        .catch(err=>console.log(err))
    }
}
export function fetchGnomes(limit){
    return function action(dispatch){
        
        fetch(`${ROOT_URL}?_format=json&limit=${limit}&offset=0`,{
            method: 'GET',
        })
        .then(response=>{
            if(!response.ok){
                throw new Error('not working')
            }
            return response.json()
        })
        .then(data=>{
            return dispatch(gnomesFetchDataSuccess(data))
        })
        .catch(err=>console.log(err))
    }
}