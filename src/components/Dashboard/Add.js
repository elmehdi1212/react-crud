const Add = () => {
  return (
    <div className="small-container">
      <form>
        <h1>Add Employee</h1>
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" type="text" name="firstName" />
        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" type="text" name="lastName" />
        <label htmlFor="email">Email</label>
        <input id="email" type="text" name="email" />
        <label htmlFor="salary">Salary</label>
        <input id="salary" type="text" name="salary" />
        <label htmlFor="date">Date</label>
        <input id="date" type="text" name="date" />
      </form>
    </div>
  );
};
export default Add;
