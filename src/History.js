import data from "./History.json";

function History() {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>

          <iframe
            src={item.video}
            title={item.title}
            width="550px"
            height="300px"
          ></iframe>

        </div>
      ))}
    </div>
  );
}

export default History;