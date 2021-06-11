import ReactDOM from "react-dom"; //Package that consists of features such as the render method

import "./index.css"; //The import below specifies that css file should be considered
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root")); //The following code states render <App /> where a document has a id or "root"(In this case index.html)
