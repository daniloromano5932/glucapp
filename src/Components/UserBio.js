
function userBio(data) {


  return (
    <div className='user-bio'>
      <h1>{`${data.first_name} ${data.surname}`}</h1>
      <h3>{data.date_of_birth}</h3>
      <ul>
        <li>
          <p>E-Mail: </p>
          <p>{data.email}</p>
        </li>
        <li>
          <p>Address: </p>
          <p>{data.address}</p>
        </li>
        <li>
          <p>Phone Number: </p>
          <p>{data.phone_number}</p>
        </li>
        <li>
          <p>Codice Fiscale: </p>
          <p>{data.codice_fiscale}</p>
        </li>
        <li>
          <p>Sex: </p>
          <p>{data.sex}</p>
        </li>
      </ul>
    </div>
  );
}

export default userBio