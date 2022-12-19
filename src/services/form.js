export function createForm(formObj) {
  return fetch("http://localhost:9000/api/form", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzlmMmUzOTUyZDJlZDkzYjUyMjRlYWMiLCJlbWFpbCI6ImRoaXJhanNoYXJtYTIwMDQyMDAxQGdtYWlsLmNvbSIsInBob25lIjoiNzg5NTQ1ODc0NSIsImlhdCI6MTY3MTM3NjUzNywiZXhwIjoxNjcxNDYyOTM3fQ.ZhS3dAcLvxEPMIlY0yH-8sqRIR4FE3_Z7MNtmEhdAf4",
    },
    body: JSON.stringify(formObj),
  }).then((res) => res.json());
}

export function getFormData() {
  return fetch("http://localhost:9000/api/form", {
    method: "GET",
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzlmMmUzOTUyZDJlZDkzYjUyMjRlYWMiLCJlbWFpbCI6ImRoaXJhanNoYXJtYTIwMDQyMDAxQGdtYWlsLmNvbSIsInBob25lIjoiNzg5NTQ1ODc0NSIsImlhdCI6MTY3MTM3NjUzNywiZXhwIjoxNjcxNDYyOTM3fQ.ZhS3dAcLvxEPMIlY0yH-8sqRIR4FE3_Z7MNtmEhdAf4",
    },
  }).then((res) => res.json());
}
