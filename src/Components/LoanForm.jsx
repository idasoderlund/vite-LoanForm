import React, { useState } from "react";

const LoanForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    income: "",
    loanAmount: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Namn är obligatoriskt.";
    if (!formData.phone.trim()) newErrors.phone = "Namn är obligatoriskt.";
    if (!formData.age.trim()) newErrors.age = "Namn är obligatoriskt.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Ansökan:", formData);
      alert("Ansökan skickad! Kontrollera konsolen för data.");
    }
  };

  return (
    <div className="container">
      <h1>Loan Application</h1>
      <form className="loan-form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="name">Namn:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? "error" : ""}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Telefonnummer</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={errors.phone ? "error" : ""}
          />
          {errors.phone && (
            <span className="error-message">{errors.phone}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="age">Ålder</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className={errors.age ? "error" : ""}
          />
          {errors.age && <span className="error-message">{errors.age}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="income">Inkomst</label>
          <input
            type="number"
            id="income"
            name="income"
            value={formData.income}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="loanAmount">Inkomst</label>
          <input
            type="number"
            id="loanAmonut"
            name="loanAmount"
            value={formData.loanAmount}
            onChange={handleChange}
          />
        </div>

        <button type="submit"> Skicka</button>
      </form>
    </div>
  );
};
export default LoanForm;
