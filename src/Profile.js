import data from "./Profile.json";
function Profile() {
    return (
        <div> 
            {data.map((iteam) => (
                <div key={iteam.id}>
                    
                    <img src={iteam.img} style={{width: "200px",height: "200px",borderRadius: "50%",objectFit: "cover",objectPosition:"top"}}/>
                    <p> <b> username : </b> {iteam.username}</p>
                    <p> <b> email : </b> {iteam.email}</p>
                    <p> <b> subscribers: </b> {iteam.sub}</p>
                    
            
                </div>
            ))}
        </div>
);
  
}
export default Profile ;