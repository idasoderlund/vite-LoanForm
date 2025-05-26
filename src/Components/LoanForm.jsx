import React, { useState } from "react";

const LoanForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    income: "",
    loanAmount: "",
    apployment: "",
    salaryRange: "",
    purpose: "",
    repaymentPeriod: "",
    comments: "",
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
          <label htmlFor="name" className="costumer-label">
            Namn:
          </label>
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
          <label htmlFor="phone" className="costumer-label">
            Telefonnummer:
          </label>
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
          <label htmlFor="age" className="costumer-label">
            Ålder:
          </label>
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
          <label htmlFor="apployment" className="costumer-label">
            Har du en nuvarande anställning?
          </label>
          <input
            type="checkbox"
            id="apployment"
            name="apployment"
            value={formData.apployment}
            onChange={handleChange}
            className={errors.apployment ? "error" : ""}
          />
        </div>

        <div className="form-group">
          <label htmlFor="salary-range" className="costumer-label">
            Nutida erhållen inkomst:
          </label>
          <select
            id="salary-range"
            name="salary-range"
            value={formData.salaryRange}
            onChange={handleChange}
            className={errors.salaryRange ? "error" : ""}
          >
            <option value="">Choose salary range</option>
            <option value="less_5000.">Less than 5000Kr</option>
            <option value="5000_10000">5000-10.000Kr</option>
            <option value="10000_20000">10.000-20.000Kr</option>
            <option value="more_20000">More than 20.00Kr</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="purpose" className="costumer-label">
            Syftet med lån:
          </label>
          <input
            type="text"
            id="purpose"
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            className={errors.purpose ? "error" : ""}
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="repayment-period" className="cosumter-label">
            Beslutad Återbetalningstid:
          </label>
          <input
            type="number"
            id="repayment-period"
            name="repayment-period"
            value={formData.repaymentPeriod}
            onChange={handleChange}
            className={errors.repaymentPeriod ? "error" : ""}
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="comments" className="costumer-label">
            Kommentarer:
          </label>
          <input
            type="text"
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            className={errors.comments ? "error" : ""}
          ></input>
        </div>

        <button type="submit"> Skicka</button>
      </form>
    </div>
  );
};
export default LoanForm;
