import "./success.css";

function SuccessFillTask({ open }) {
  if (!open) return null;

  return (
    <div className="success-popup">
      <p>Task added successfully!</p>
    </div>
  );
}

export default SuccessFillTask;
