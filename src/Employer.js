import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";

function Employer() {
  const [employer, setEmployer] = useState(false);
  const handleEmployer = () => {
    setEmployer(!employer);
  };
  const formik = useFormik({
    initialValues: {
      Occupation: "",
      EmployerName: "",
      EmployerAddress: "",
      EmployerAddress2: "",
      EmployerCity: "",
      EmployerState: "",
      EmployerPostalCode: "",
      EmployerCountry: "",
      Industry: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.Occupation) {
        errors.Occupation = "Please Enter Employer Occupation";
      }
      if (!values.EmployerName) {
        errors.EmployerName = "Please Enter Employer Name";
      }
      if (!values.EmployerAddress) {
        errors.EmployerAddress = "Please Enter Employer Address";
      }
      if (!values.EmployerPostalCode) {
        errors.EmployerPostalCode = "Please Enter Employer Postal Code";
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        await axios.post("http://localhost:3001/employer", values);
        alert("Data Posted successfully");
        formik.resetForm();
      } catch (error) {
        console.log(error);
        alert("Error in Posting Data");
      }
    },
  });
  return (
    <div className="container">
      {" "}
      <div className="m-3">
        <nav class="navbar bg-primary fw-bold" onClick={handleEmployer}>
          Employer information
        </nav>
        {employer ? (
          <div className="Employer">
            <form onSubmit={formik.handleSubmit}>
              <div className="row g-3 align-items-center mt-1">
                <div className="col-6 ">
                  <div className="row align-items-center">
                    <div className="col-4">
                      <label for="Occupation" className="col-form-label">
                        Occupation:
                      </label>
                    </div>
                    <div className="col-8">
                      <select
                        id="Occupation"
                        name="Occupation"
                        className="form-select"
                        aria-label="Default select example"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.Occupation}
                      >
                        <option value={""} selected>
                          Unassigned
                        </option>
                        <option value="Engineer">Engineer</option>
                        <option value="Doctor">Doctor</option>
                        <option value="Banker">Banker</option>
                      </select>
                      <span style={{ color: "red" }}>
                        {formik.touched.Occupation &&
                        formik.errors.Occupation ? (
                          <div>{formik.errors.Occupation}</div>
                        ) : null}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-6 ">
                  <div className="row align-items-center">
                    <div className="col-4">
                      <label for="EmployerName" className="col-form-label">
                        Employer Name:
                      </label>
                    </div>
                    <div className="col-6">
                      <input
                        type="text"
                        className="form-control"
                        id="EmployerName"
                        name="EmployerName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.EmployerName}
                      />
                      <span style={{ color: "red" }}>
                        {formik.touched.EmployerName &&
                        formik.errors.EmployerName ? (
                          <div>{formik.errors.EmployerName}</div>
                        ) : null}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row g-3 align-items-center mt-1">
                <div className="col-6 ">
                  <div className="row align-items-center">
                    <div className="col-4">
                      <label for="EmployerAddress" className="col-form-label">
                        Employer Address:
                      </label>
                    </div>
                    <div className="col-7">
                      <input
                        type="text"
                        className="form-control"
                        id="EmployerAddress"
                        name="EmployerAddress"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.EmployerAddress}
                      />
                      <span style={{ color: "red" }}>
                        {formik.touched.EmployerAddress &&
                        formik.errors.EmployerAddress ? (
                          <div>{formik.errors.EmployerAddress}</div>
                        ) : null}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-6 ">
                  <div className="row align-items-center">
                    <div className="col-4">
                      <label for="EmployerAddress2" className="col-form-label">
                        Employer Address Line 2:
                      </label>
                    </div>
                    <div className="col-7">
                      <input
                        type="text"
                        className="form-control"
                        id="EmployerAddress2"
                        name="EmployerAddress2"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.EmployerAddress2}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row g-3 align-items-center mt-1">
                <div className="col-6 ">
                  <div className="row align-items-center">
                    <div className="col-4">
                      <label for="EmployerCity" className="col-form-label">
                        City:
                      </label>
                    </div>
                    <div className="col-6">
                      <input
                        type="text"
                        className="form-control"
                        id="EmployerCity"
                        name="EmployerCity"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.EmployerCity}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-6 ">
                  <div className="row align-items-center">
                    <div className="col-4">
                      <label for="EmployerState" className="col-form-label">
                        State:
                      </label>
                    </div>
                    <div className="col-8">
                      <select
                        id="EmployerState"
                        name="EmployerState"
                        className="form-select"
                        aria-label="Default select example"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.EmployerState}
                      >
                        <option value={""} selected>
                          Unassigned
                        </option>
                        <option value="TN">TN</option>
                        <option value="KL">KL</option>
                        <option value="KA">KA</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row g-3 align-items-center mt-1">
                <div className="col-6 ">
                  <div className="row align-items-center">
                    <div className="col-4">
                      <label
                        for="EmployerPostalCode"
                        className="col-form-label"
                      >
                        Postal Code:
                      </label>
                    </div>
                    <div className="col-5">
                      <input
                        type="text"
                        className="form-control"
                        id="EmployerPostalCode"
                        name="EmployerPostalCode"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.EmployerPostalCode}
                      />{" "}
                      <span style={{ color: "red" }}>
                        {formik.touched.EmployerPostalCode &&
                        formik.errors.EmployerPostalCode ? (
                          <div>{formik.errors.EmployerPostalCode}</div>
                        ) : null}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-6 ">
                  <div className="row align-items-center">
                    <div className="col-4">
                      <label for="EmployerCountry" className="col-form-label">
                        Country:
                      </label>
                    </div>
                    <div className="col-8">
                      <select
                        id="EmployerCountry"
                        name="EmployerCountry"
                        className="form-select"
                        aria-label="Default select example"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.EmployerCountry}
                      >
                        <option value={""} selected>
                          Unassigned
                        </option>
                        <option value="IN">IN</option>
                        <option value="UK">UK</option>
                        <option value="USA">USA</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row g-3 align-items-center mt-1">
                <div className="col-6 ">
                  <div className="row align-items-center">
                    <div className="col-4">
                      <label for="Industry" className="col-form-label">
                        Industry:
                      </label>
                    </div>
                    <div className="col-8">
                      <select
                        id="Industry"
                        name="Industry"
                        className="form-select"
                        aria-label="Default select example"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.Industry}
                      >
                        <option value={""} selected>
                          Unassigned
                        </option>
                        <option value="Information Technology">
                          Information Technology
                        </option>
                        <option value="Medicine">Medicine</option>
                        <option value="Education">Education</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-6 d-flex  justify-content-center">
                  <input
                    type={"submit"}
                    className="btn btn-lg btn-secondary  "
                    value={"Add Employer"}
                  />
                </div>
              </div>
            </form>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Employer;
