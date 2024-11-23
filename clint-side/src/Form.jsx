

function Form() {
  const handlesubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    
    fetch("http://localhost:5000/users",{
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({name,email})
    })
    .then( data => console.log(data))
    .catch(err => console.log(err))
  }

  return (
    <form  onSubmit={handlesubmit} className="form">
      <input type="text" name="name" placeholder="name"  required />
      <input type="email" name="email" placeholder="email" required />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form
