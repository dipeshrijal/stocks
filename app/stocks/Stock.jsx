import Link from "next/link";
import React from "react";

function Stock({ name, total, cssClass }) {
  return (
    <Link href={`/stocks/${name}`}>
      <div className={`stock ${cssClass}`}>
        <h3>{name}</h3>
        <h1>{total}</h1>
      </div>
    </Link>
  );
}

export default Stock;
