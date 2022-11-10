import React, { useState } from "react";
import { useEffect } from "react";

const Profile = () => {
    const [documents, setDocuments] = useState([]);
    const [userdata, setUserData] = useState([]);
const handleSubmit=(e)=>{
    e.preventDefault();
    setUserData("");
}
console.log(documents);
useEffect(()=>{
  
// axios.get("https://5000/upload")
// const res = await axios.post(process.env.REACT_APP_API_URL + `api/image-uploader`, formData);

},[])

  return (
    <>
      <header>
        <nav>
          <ul className="navigation">
            <li>Users DashBoard</li>
          </ul>
        </nav>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <input type="file" 
            onChange={(e) => {
                setUserData({ ...userdata, Doc: e.target.files[0] });
                setDocuments([...documents, e.target.files[0].name]);
              }}
              multiple
          />

        </form>
        {/* {documents?.map((row) => {
          return <p>{row}</p>;
        })} */}
      </main>
    </>
  );
};

export default Profile;
