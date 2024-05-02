function Widget({ title, description, percentage }) {
  return (
    <div className="status">
      <div className="info">
        <h3>{title}</h3>
        <h1>{description}</h1>
      </div>
      <div className="progresss">
        <svg>
          <circle cx="38" cy="38" r="36"></circle>
        </svg>
        <div className="percentage">
          <p>{percentage}%</p>
        </div>
      </div>
    </div>
  );
}

export default Widget;
