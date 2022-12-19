import { clone, cloneDeep } from "lodash";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { createForm } from "../../../services/form";
export const Create = () => {
  const [Group, setGroup] = useState({
    title: "",
    form_data: [
      {
        input_label: "",
        input_type: "",
      },
    ],
  });
  const { ID } = useParams();

  const onClickDelete = (e, index) => {
    e.preventDefault();
    const list = cloneDeep(Group);
    list.form_data.splice(index, 1);
    setGroup(list);
  };

  const onAddBtnClick = (e) => {
    e.preventDefault();
    const newValue = {
      ...Group,
      form_data: [
        ...Group.form_data,
        clone({ input_label: "", input_type: "text" }),
      ],
    };
    setGroup(newValue);
  };

  const updateField = (e) => {
    const { name, value } = e.target;
    let newValue = cloneDeep(Group);
    newValue[name] = value;
    setGroup(newValue);
  };
  const updateFieldArr = (e, index) => {
    const { name, value } = e.target;
    console.log(name, value);
    let newValue = cloneDeep(Group);
    newValue.form_data[index][name] = value;
    setGroup(newValue);
  };
  const submit = async (e) => {
    try {
      e.preventDefault();
      const response = await createForm(Group);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>{ID ? "Edit Form" : "Create a new Form"}</h1>
      <form onSubmit={(e) => submit(e)}>
        <div style={{ margin: "10px 0" }}>
          <label style={{ margin: "0 10px" }}>Form Title</label>
          <input
            type="text"
            name="title"
            value={Group.title}
            onChange={(e) => updateField(e)}
          />
        </div>
        {Group?.form_data.map((val, i) => {
          console.log(val);
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                margin: "10px 0",
                justifyContent: "space-around",
                alignItems: "center",
                border: "1px solid",
              }}
              key={i}
            >
              <div style={{ margin: "10px 0" }}>
                <label style={{ margin: "0 10px" }}>Input Label</label>
                <input
                  type="label"
                  name="input_label"
                  value={val.input_label}
                  onChange={(e) => updateFieldArr(e, i)}
                />
              </div>
              <div style={{ margin: "10px 0" }}>
                <label style={{ margin: "0 10px" }}>Input Label</label>
                <select
                  id="cars"
                  name="input_type"
                  value={val.input_type}
                  onChange={(e) => updateFieldArr(e, i)}
                >
                  <option value="text">Text Field</option>
                  <option value="email">Email</option>
                  <option value="number">Number</option>
                  <option value="date">Date</option>
                  <option value="password">Password</option>
                </select>
              </div>
              <button
                onClick={(e) => onClickDelete(e, i)}
                style={{ float: "right" }}
              >
                Delete
              </button>
            </div>
          );
        })}
        <div>
          <button onClick={(e) => onAddBtnClick(e)} style={{ float: "right" }}>
            Add
          </button>
        </div>
        <button onClick={submit}>Submit</button>
      </form>
    </div>
  );
};
