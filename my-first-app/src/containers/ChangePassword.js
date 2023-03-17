import axios from 'axios';
import React, {useState} from 'react'

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword,setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    const accessToken = localStorage.getItem('accessToken');

    const handlePasswordChange = (e) => {
      e.preventDefault();
      axios.post("https://dailomaa.com/api/auth/change/password", {
        old_password:oldPassword ,
        new_password: newPassword,
        confirm_password: confirmPassword
    },{
        headers: {
          'Authorization': `Bearer ${accessToken}`
        },
    })

        .then((response) => {
          console.log(response.data)
        })
        .catch((error) => {
          console.error(error);
        });
    };

  return (
    <div className="container my-5">
  <div className="card p-4">
    <div className="card-body">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form className="form" onSubmit={handlePasswordChange}>
          <div className="form-group">
              <label htmlFor="password">Old Password</label>
              <input
                name="oldPassword"
                type="password"
                className="form-control"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">New Password</label>
              <input
                name="newPassword"
                type="password"
                className="form-control"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Confirm Password</label>
              <input
                name="confirmPassword"
                type="password"
                className="form-control"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Change Password
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default ChangePassword