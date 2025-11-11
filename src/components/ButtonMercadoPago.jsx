import React from "react";
import "./ButtonMercadoPago.css";
import { SvgMercadoPago } from "./SVGMercadoPago";

export default function MercadoPagoButton({
  href = "https://link.mercadopago.com.ar/facufel",
  children = "Colabora desde Mercado Pago",
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
        <SvgMercadoPago width={"100px"} />
      <span className="mp-text">{children}</span>
    </a>
  );
}
