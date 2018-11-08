let url="http://localhost:8080/api"

export function signout(){

}
export function signin(user){

}
export function signup(user){

}
export function passwordRecovery(user){

}
export function create(collection,obj){
	return fetch(`${url}/${collection}`, {
	  method: 'POST',
	  body: JSON.stringify(obj),
	  headers:{
	    'Content-Type': 'application/json'
	  }
	})

}
export function list(collection){
	return fetch(`${url}/${collection}`)

}
export function remove(collection, objID){

}
export function upload(folder, file){

}
