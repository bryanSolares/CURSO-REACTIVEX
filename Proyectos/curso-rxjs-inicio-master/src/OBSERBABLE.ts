export const OBSERBABLE = {
  next: (value) => console.log(value),
  error: (error) => console.warn("Error Controlado:", error),
  complete: () => console.log("Completado"),
};
