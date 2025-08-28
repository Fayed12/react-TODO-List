import "./faild.css";

function FailFillAllInputs({ open }) {
  if (!open) return null;

  return (
    <div className="fail-popup">
      <p>⚠️ Please fill Task Title and Description!</p>
    </div>
  );
}

export default FailFillAllInputs;
