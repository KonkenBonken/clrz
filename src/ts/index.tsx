import '../styles/index.scss';
import JSX from './jsx';

console.log('Hello World')

function Hello() {
  return (
    <div className="asd" >
      Hello
      <div id="hej">Hello Nested </div>
      <div> Hello Nested 2 </div>
    </div>
  );
}


document.body.append(Hello())
