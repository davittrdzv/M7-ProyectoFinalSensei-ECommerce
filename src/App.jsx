const App = () => {
  return (
    <div>
      <h1>Hacer todo esto. Esta carpeta ya lo tiene pero hay que confirmar.</h1>
      <h1>Eliminar</h1>
      <ul>
        <li>Proyecto: Eliminar contenido del README</li>
        <li>Index.html: Cambiar título</li>
        <li>Index.html: Eliminar link de favicon</li>
        <li>Public: Eliminar imagen (Hacerlo desde el explorador. Desde VSC se borra también la carpeta)</li>
        <li>Src/assets: Eliminar imagen</li>
        <li>App.jsx: Eliminar todo el código y hacer rafce</li>
        <li>Index.css: Eliminar</li>
        <li>App.css: Eliminar</li>
      </ul>
      <h1>Modificar</h1>
      <ul>
        <li>Package.json: "name": "AQUÍ VA EL NOMBRE DEL PROYECTO, IGUAL QUE LA CARPETA DEL PROYECTO"</li>
      </ul>
      <h1>Instalar Neostandard</h1>
      <ul>
        <li>npm install -D neostandard</li>
        <li>eslint.config.js: Debajo de import reactRefresh from 'eslint-plugin-react-refresh' poner import neostandard from 'neostandard'</li>
        <li>eslint.config.js: En export default, como primer elemento, poner ...neostandard(), </li>
      </ul>
    </div>
  )
}

export default App
