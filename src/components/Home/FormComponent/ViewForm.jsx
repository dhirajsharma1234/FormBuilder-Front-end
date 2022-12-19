export const View = () => {
  const FormData = {
    formName: "Candidate Selection",
    formData: [
      { label: "Name", inputType: "text" },
      { label: "Phone Number", inputType: "number" },
      { label: "Address", inputType: "text" },
      { label: "Email", inputType: "email" },
      { label: "Date", inputType: "date" },
    ],
  };
  return (
    <div>
      <h1>{FormData.formName}</h1>
      <form>
        {FormData.formData.map((item) => (
          <div>
            <label>{item.label}</label>
            <input type={item.inputType} />
          </div>
        ))}
        <input type="submit" />
      </form>
    </div>
  );
};
