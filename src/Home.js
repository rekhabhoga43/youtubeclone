import data from "./Home.json";
function Home() {
    return (
        <div> 
            {data.map((iteam) => (
                <div key={iteam.id}>
                    <h3>{iteam.title}</h3>
                    <iframe src={iteam.video} width="550px" height="300px" ></iframe>
                    <title> {iteam.title}</title>
            
                </div>
            ))}
        </div>
);
  
}
export default Home ;