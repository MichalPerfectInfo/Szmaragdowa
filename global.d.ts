// Ten plik informuje TypeScript, że importowanie plików z poniższymi 
// rozszerzeniami jest dozwolone i że wynikiem takiego importu jest
// moduł z domyślnym eksportem w postaci stringa (ścieżki do pliku).

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}

declare module '*.gif' {
  const value: string;
  export default value;
}
