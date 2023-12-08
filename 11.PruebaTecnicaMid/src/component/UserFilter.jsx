export default function UsersFilter ({ users, showColor }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Last Name</th>
            <th>Country</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {
            users.map((user, index) => {
              const backgroundRowsColor = index % 2 === 0 ? '#123' : '#322'
              const colorRows = showColor ? backgroundRowsColor : 'transparent'

              return (
            <tr
              key={user.email}
              style={{ backgroundColor: colorRows }}
            >
              <td>
                <img src={user.picture.thumbnail} alt={user.name.first} />
              </td>
              <td>{user.name.first} Index={index}</td>
              <td>{user.name.last}</td>
              <td>{user.location.country}</td>
              <td> <button className="row_btn">Delete Row</button> </td>
            </tr>
              )
            })
          }

          {/* <tr>
            <td>Photo Here</td>
            <td>Charlie</td>
            <td>asdads</td>
            <td>Brazil</td>
            <td>Delete Row</td>
          </tr> */}
        </tbody>
      </table>
    </>
  )
}
