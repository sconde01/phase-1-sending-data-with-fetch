const submitData = (name, email) => {
  const configurationObject ={
    method:'POST',
    headers: {
      'content-type': "application/json",
      "accept": "application/json",
    },
    body: JSON.stringify({name, email})
    
  };
  return fetch ("http://localhost:3000/users", configurationObject)
  .then(resp => resp.json())
  .then(body => addNewContact (body.id))
  //  .then (data => {
  // console.log(data)
  // const body = document.querySelector (body)
  // body.append(data.id)
  .catch(response => "Unauthorized Access")

}

const addNewContact = (newID) => {
  document.body.innerHTML = newID;
  document.body.append(message)
}

