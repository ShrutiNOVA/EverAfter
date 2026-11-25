// Type declarations for CSS modules
declare module '*.module.css' {
  const styles: { [className: string]: string };
  export default styles;
}
