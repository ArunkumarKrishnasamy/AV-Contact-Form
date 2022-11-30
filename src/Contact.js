import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";

function Contact() {
  const [contact, setContact] = useState(false);
  const handleContact = () => {
    setContact(!contact);
  };
  const formik = useFormik({
    initialValues: {
      address: "",
      address2: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
      motherName: "",
      EmergencyContact: "",
      EmergencyPhone: "",
      HomePhone: "",
      WorkPhone: "",
      MobilePhone: "",
      ContactEmail: "",
      TrustedEmail: "",
      District: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.address) {
        errors.address = "Please Enter Address";
      }
      if (!values.postalCode) {
        errors.postalCode = "Please Enter postalCode";
      }
      if (!values.MobilePhone) {
        errors.MobilePhone = "Please Enter MobilePhone number";
      }

      return errors;
    },
    onSubmit: async (values) => {
      try {
        await axios.post("http://localhost:3001/contact", values);
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
      <div className="m-3">
        <nav class="navbar bg-primary fw-bold" onClick={handleContact}>
          Conatct Information
        </nav>
        {contact ? (
          <div className="Contact">
            <form onSubmit={formik.handleSubmit}>
              <div className="row g-3 align-items-center mt-1">
                <div className="col-6 ">
                  <div className="row align-items-center">
                    <div className="col-4">
                      <label for="address" className="col-form-label">
                        Address:
                      </label>
                    </div>
                    <div className="col-7">
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        name="address"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.address}
                      />{" "}
                      <span style={{ color: "red" }}>
                        {formik.touched.address && formik.errors.address ? (
                          <div>{formik.errors.address}</div>
                        ) : null}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-6 ">
                  <div className="row align-items-center">
                    <div className="col-4">
                      <label for="address2" className="col-form-label">
                        Address Line 2:
                      </label>
                    </div>
                    <div className="col-7">
                      <input
                        type="text"
                        className="form-control"
                        id="address2"
                        name="address2"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.address2}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row g-3 align-items-center mt-1">
                <div className="col-6 ">
                  <div className="row align-items-center">
                    <div className="col-4">
                      <label for="city" className="col-form-label">
                        City:
                      </label>
                    </div>
                    <div className="col-5">
                      <input
                        type="text"
                        className="form-control"
                        id="city"
                        name="city"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.city}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-6 ">
                  <div className="row align-items-center">
                    <div className="col-4">
                      <label for="state" className="col-form-label">
                        State:
                      </label>
                    </div>
                    <div className="col-8">
                      <select
                        id="state"
                        name="state"
                        className="form-select"
                        aria-label="Default select example"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.state}
                      >
                        <option value={""} selected>
                          Unassigned
                        </option>
                        <option value="Chennai">Chennai</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Banglore">Banglore</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row g-3 align-items-center mt-1">
                <div className="col-6 ">
                  <div className="row align-items-center">
                    <div className="col-4">
                      <label for="postalCode" className="col-form-label">
                        Postal Code:
                      </label>
                    </div>
                    <div className="col-4">
                      <input
                        type="number"
                        className="form-control"
                        id="postalCode"
                        name="postalCode"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.postalCode}
                      />{" "}
                      <span style={{ color: "red" }}>
                        {formik.touched.postalCode &&
                        formik.errors.postalCode ? (
                          <div>{formik.errors.postalCode}</div>
                        ) : null}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-6 ">
                  <div className="row align-items-center">
                    <div className="col-4">
                      <label for="country" className="col-form-label">
                        Country:
                      </label>
                    </div>
                    <div className="col-8">
                      <select
                        id="country"
                        name="country"
                        className="form-select"
                        aria-label="Default select example"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.country}
                      >
                        <option value={""} selected>
                          Unassigned
                        </option>
                        <option value="India">India</option>
                        <option value="China">China</option>
                        <option value="Pakistan">Pakistan</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row g-3 align-items-center mt-1">
                <div className="col-6 ">
                  <div className="row align-items-center">
                    <div className="col-4">
                      <label for="motherName" className="col-form-label">
                        Mother's Name:
                      </label>
                    </div>
                    <div className="col-6">
                      <input
                        type="text"
                        className="form-control"
                        id="motherName"
                        name="motherName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.motherName}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-6 ">
                  <div className="row align-items-center">
                    <div className="col-4">
                      <label for="EmergencyContact" className="col-form-label">
                        Emergency Contact:
                      </label>
                    </div>
                    <div className="col-4">
                      <input
                        type={"text"}
                        className="form-control"
                        id="EmergencyContact"
                        name="EmergencyContact"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.EmergencyContact}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row g-3 align-items-center mt-1">
                <div className="col-6 ">
                  <div className="row align-items-center">
                    <div className="col-4">
                      <label for="EmergencyPhone" className="col-form-label">
                        Emergency Phone:
                      </label>
                    </div>
                    <div className="col-6">
                      <input
                        type="text"
                        className="form-control"
                        id="EmergencyPhone"
                        name="EmergencyPhone"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.EmergencyPhone}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-6 ">
                  <div className="row align-items-center">
                    <div className="col-4">
                      <label for="HomePhone" className="col-form-label">
                        Home Phone:
                      </label>
                    </div>
                    <div className="col-6">
                      <input
                        type="tel"
                        className="form-control"
                        id="HomePhone"
                        name="HomePhone"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.HomePhone}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row g-3 align-items-center mt-1">
                <div className="col-6 ">
                  <div className="row align-items-center">
                    <div className="col-4">
                      <label for="WorkPhone" className="col-form-label">
                        Work Phone:
                      </label>
                    </div>
                    <div className="col-6">
                      <input
                        type="tel"
                        className="form-control"
                        id="WorkPhone"
                        name="WorkPhone"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.WorkPhone}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-6 ">
                  <div className="row align-items-center">
                    <div className="col-4">
                      <label for="MobilePhone" className="col-form-label">
                        Mobile Phone:
                      </label>
                    </div>
                    <div className="col-6">
                      <input
                        type="tel"
                        className="form-control"
                        id="MobilePhone"
                        name="MobilePhone"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.MobilePhone}
                      />
                      <span style={{ color: "red" }}>
                        {formik.touched.MobilePhone &&
                        formik.errors.MobilePhone ? (
                          <div>{formik.errors.MobilePhone}</div>
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
                      <label for="ContactEmail" className="col-form-label">
                        Contact Email:
                      </label>
                    </div>
                    <div className="col-7">
                      <input
                        type="email"
                        className="form-control"
                        id="ContactEmail"
                        name="ContactEmail"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.ContactEmail}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-6 ">
                  <div className="row align-items-center">
                    <div className="col-4">
                      <label for="TrustedEmail" className="col-form-label">
                        Trusted Email:
                      </label>
                    </div>
                    <div className="col-8">
                      <input
                        type="email"
                        className="form-control"
                        id="TrustedEmail"
                        name="TrustedEmail"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.TrustedEmail}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row g-3 align-items-center mt-1">
                <div className="col-6 ">
                  <div className="row align-items-center">
                    <div className="col-4">
                      <label for="District" className="col-form-label">
                        District:
                      </label>
                    </div>
                    <div className="col-8">
                      <select
                        id="District"
                        name="District"
                        className="form-select"
                        aria-label="Default select example"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.District}
                      >
                        <option value={""} selected>
                          Unassigned
                        </option>
                        <option value="Chennai">Chennai</option>
                        <option value="Trichy">Trichy</option>
                        <option value="Madurai">Madurai</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-6 d-flex  justify-content-center">
                  <input
                    type={"submit"}
                    className="btn btn-lg btn-secondary  "
                    value={"Add New Contact"}
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

export default Contact;
