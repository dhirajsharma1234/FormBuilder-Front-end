import "./Home.css";
import { useNavigate, generatePath } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const formData = [
    { id: "1", title: "form1", button: "view", edit: "edit" },
    { id: "2", title: "form2", button: "view", edit: "edit" },
    { id: "3", title: "form3", button: "view", edit: "edit" },
    { id: "4", title: "form4", button: "view", edit: "edit" },
    { id: "5", title: "form5", button: "view", edit: "edit" },
    { id: "6", title: "form6", button: "view", edit: "edit" },
  ];

  // let data;
  // const getData = async () => {
  //   try {
  //     let formD = await getFormData();

  //     data = formD.data.map((val) => {
  //       return { ...val, button: "view", edit: "edit" };
  //     });
  //     return;
  //   } catch (error) {}
  // };

  // getData();
  // // useEffect(() => {
  // // }, []);

  return (
    <div style={{ padding: "10px" }}>
      <button
        style={{
          border: "1px solid transparent",
          backgroundColor: "#337ACD",
          color: "white",
          float: "right",
          padding: "10px",
          borderRadius: "10px",
        }}
        onClick={() => navigate("/create")}
      >
        Create Form
      </button>

      <div
        className="App"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItem: "center",
          flexWrap: "wrap",
          padding: "20px",
        }}
      >
        {formData?.map((val) => (
          <div
            style={{
              flex: "1 1 1",
              margin: "10px",
              backgroundColor: "gray",
              minWidth: "150px",
              padding: "5px",
            }}
          >
            <h3 style={{ color: "white" }}>{val.title}</h3>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItem: "center",
              }}
            >
              <button
                style={{
                  border: "1px solid transparent",
                  backgroundColor: "#337ACD",
                  color: "white",
                }}
                onClick={() =>
                  navigate(generatePath("/view/:id", { id: val.id }))
                }
              >
                {val.button.toUpperCase()}
              </button>
              <button
                style={{
                  border: "1px solid transparent",
                  backgroundColor: "#337ACD",
                  color: "white",
                }}
                onClick={() =>
                  navigate(generatePath("/edit/:id", { id: val.id }))
                }
              >
                {val.edit.toUpperCase()}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Home;
