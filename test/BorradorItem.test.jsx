import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { BorradorItem, BorradorList } from "../src/components/BorradorItem";

describe("<BorradorItem />", () => {
  const borrador = {
    id: "1",
    nombre: "Mi amparo",
    texto: "PRIMERO. El acto reclamado...",
    expediente: "123/2026",
    fecha: new Date().toISOString(),
  };

  beforeEach(() => {
    Object.defineProperty(navigator, "clipboard", {
      value: { writeText: vi.fn() },
      writable: true,
      configurable: true,
    });
  });

  it("muestra el nombre y expediente", () => {
    render(<BorradorItem b={borrador} onDelete={() => {}} />);
    expect(screen.getByText("Mi amparo")).toBeInTheDocument();
    expect(screen.getByText(/123\/2026/)).toBeInTheDocument();
  });

  it("muestra el texto al hacer click en Ver", () => {
    render(<BorradorItem b={borrador} onDelete={() => {}} />);
    fireEvent.click(screen.getByText("Ver"));
    expect(screen.getByText(/PRIMERO/)).toBeInTheDocument();
  });

  it("copia al portapapeles al hacer click en Copiar", () => {
    const writeText = vi.fn();
    Object.defineProperty(navigator, "clipboard", { value: { writeText }, configurable: true, writable: true });
    render(<BorradorItem b={borrador} onDelete={() => {}} />);
    fireEvent.click(screen.getByText("Copiar"));
    expect(writeText).toHaveBeenCalledWith(borrador.texto);
  });

  it("llama a onDelete al hacer click en Eliminar", () => {
    const onDelete = vi.fn();
    render(<BorradorItem b={borrador} onDelete={onDelete} />);
    fireEvent.click(screen.getByText("Eliminar"));
    expect(onDelete).toHaveBeenCalled();
  });
});

describe("<BorradorList />", () => {
  it("muestra mensaje vacio si no hay borradores", () => {
    render(<BorradorList borradores={[]} onDelete={() => {}} />);
    expect(screen.getByText(/Aun no hay borradores/)).toBeInTheDocument();
  });

  it("renderiza cada borrador", () => {
    const bs = [
      { id: "1", nombre: "Doc 1", texto: "...", expediente: "1/2026", fecha: new Date().toISOString() },
      { id: "2", nombre: "Doc 2", texto: "...", expediente: "2/2026", fecha: new Date().toISOString() },
    ];
    render(<BorradorList borradores={bs} onDelete={() => {}} />);
    expect(screen.getByText("Doc 1")).toBeInTheDocument();
    expect(screen.getByText("Doc 2")).toBeInTheDocument();
  });

  it("llama a onDelete con el id del borrador", () => {
    const onDelete = vi.fn();
    const bs = [{ id: "abc", nombre: "X", texto: "t", expediente: "1", fecha: new Date().toISOString() }];
    render(<BorradorList borradores={bs} onDelete={onDelete} />);
    fireEvent.click(screen.getByText("Eliminar"));
    expect(onDelete).toHaveBeenCalledWith("abc");
  });
});
