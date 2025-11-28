import React from "react";
import "./ButtonMercadoPago.css";
import { SvgMercadoPago } from "./SvgMercadoPago.jsx";

export default function MercadoPagoButton({
  href = "https://link.mercadopago.com.ar/facufel",
  children = "Colaborá desde Mercado Pago",
  className = "",
  target = "_blank",
  rel = "noopener noreferrer",
  ariaLabel,
}) {
  const label = ariaLabel || `Ir a Mercado Pago - ${children}`;

  return (
    <a
      href={href}
      className={`mp-button ${className}`.trim()}
      target={target}
      rel={rel}
      aria-label={label}
    >
      {<SvgMercadoPago width={"40px"} />}
      <span className="mp-text">{children}</span>
    </a>
  );
}
